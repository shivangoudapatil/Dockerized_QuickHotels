import "./Booked.css";
import { useNavigate } from "react-router-dom";
import tick from "./tick.png";

const Booked = () => {
     const navigate = useNavigate();
     return(
          <div id="cm">
          <img className="tick" src={tick} alt="not found"></img>
          <div id="txt">
          <h1>YOUR TICKET HAS BEEN BOOKED</h1><br/>
          <h4 style={{color:"blue"}} id="clickHere" onClick={() =>navigate('/bookings')} className="bh"> Click here </h4>{' '}
          <h4  className="bh"> to see all your bookings</h4>
          </div></div>
     )
}
export default Booked;