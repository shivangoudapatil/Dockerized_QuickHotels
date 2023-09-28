import NavBar from "./components/navbar/Navbar";
import Login from "./components/LoginPage/Login";
import Signup from "./components/LoginPage/Signup";
import {Routes,Route,useNavigate} from 'react-router-dom';
import Home from './components/Home/Home';
import Veiw from './components/Veiw/Veiw';
import Booked from './components/Booked/Booked';
import Bookings from './components/Bookings/Bookings';
import {useState} from 'react';
import axios from "axios";

function App() {
     const navigate = useNavigate();
     let [user, setUser] = useState({userMail:"null"});
     let [quer, setQuer] = useState({
          "find" : {
               "name" : "null",
               "city" : "null",
               "price" : -1,
               "rating" : -1,
               "freeCancellation" : -1
          },
          "sortBy" : {
               "name" : -1,
               "price" : -1,
               "rating" : -1
          }
     });
     let [list, setList] = useState([]);
     let [Info, setInfo] = useState({rooms:0});
     // const funn = () => {
     //      console.log(document.getElementsByTagName("Route")[0].getAttribute("path"));
     // }


     const checkCred = async (cred) => {
          try {
	          const res = await axios.post('http://localhost:5000/loginAuth',cred);
               setUser(res.data.user);
	     }
          catch (err) {
	          console.log(err);
	     }
     }

     const addCred = async (cred) => {
          try {
	          const res = await axios.post('http://localhost:5000/signupAuth',cred);
               setUser(res.data.user);
               navigate('/');
	     }
          catch (err) {
	          console.log(err);
	     }
     }

     const addHotel = async (HOTEL) => {
          try {
               let updatedUser = user;
               HOTEL.price = HOTEL.price*Info.rooms;
               HOTEL.rooms = Info.rooms;
               HOTEL.checkIn = Info.checkIn;
               HOTEL.checkOut = Info.checkOut;
               updatedUser.hotels.push(HOTEL);
               console.log(updatedUser);
	          const res = await axios.post('http://localhost:5000/book',updatedUser);
               setUser(res.data.user);
               navigate('/booked');
	     }
          catch (err) {
	          console.log(err);
	     }
     }

     const addnsearch = (inf,pr) => {
          if(user.userMail==="null")
          {
               alert('Please login/signup to continue')
               return;
          }
          setInfo(inf);
          ultimateSearch(pr);
          navigate('/query');
     }

     const ultimateSearch = async (para) => {
          try {
               setQuer(para);
	          const res = await axios.post('http://localhost:5000/query',para);
               setList(res.data.list);
	     }
          catch (err) {
	          console.log(err);
	     }
     }
  return (
    <div className="App">
          <NavBar user={user}  className="nv"/>
          {/* <h1 onClick={funn}>hey</h1> */}
          <Routes>
          <Route id='hj' path="/" element={<Home  quer={quer} addnsearch={addnsearch}/>}/>
          <Route path="/login" element={<Login checkCred={checkCred} user={user}/>} />
          <Route path="/signup" element={<Signup addCred={addCred}/>} />
          <Route path="/query" element={<Veiw  quer={quer} list={list}
          addHotel={addHotel} ultimateSearch={ultimateSearch}/>} />
          <Route path="/booked" element={<Booked/>} />
          <Route path="/bookings" element={<Bookings hotels={user.hotels}/>} />
          </Routes>
    </div>
  );
}

export default App;
