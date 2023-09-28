import "./Bookings.css";
import {useNavigate} from 'react-router-dom';
import { Button } from "react-bootstrap";
const Hotel = (props) => {
     return(
          <div className='bks'>
               <div id="cnt">
          <h3> Name : {props.hotel.name} </h3>
          <h5>City : {props.hotel.name}</h5>
          <h5>Rooms : {props.hotel.rooms}</h5>
          <h5>Total Price : {props.hotel.price}</h5>
          <h5>check in date : {props.hotel.checkIn.toString()}</h5>
          <h5>check out date : {props.hotel.checkOut}</h5>
          </div>
          </div>
     )
}
const Bookings = (props) => {
     const navigate = useNavigate();
     console.log(props.hotels);
     return(<>
          <Button id="another" onClick={() =>navigate('/')} variant="outline-success" size="lg">
               Book Another Hotel
          </Button>
          {props.hotels.map( (ele,key) => {
             return (<Hotel key={key} hotel={ele}/>);  
          })}</>
     );
}
export default Bookings;
