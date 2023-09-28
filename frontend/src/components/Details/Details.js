import {Button} from "react-bootstrap";
import "./Details.css";
const Details = (props) => {
     const bookIt = () =>{
          props.addHotel(props.hotel)
     }
     return(
     <div className="un">
          <div className="card">
          <img className="sz" src={props.lk} align="right" alt="nothing here"/>

          <div className='content'>
          <h2>{props.hotel.name}</h2>
          <h4>city : {props.hotel.city}</h4>
          <h4>ratings : {props.hotel.rating}</h4>
          <h4 id="ov">price : {props.hotel.price}/-</h4>
          <Button onClick={bookIt} id="bk" variant="success">BOOK</Button>
          </div>
          </div>
          </div>
     );
}
export default Details;


