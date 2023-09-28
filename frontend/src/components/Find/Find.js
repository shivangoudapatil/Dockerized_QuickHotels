import './Find.css';
import {Button} from 'react-bootstrap';
import { useEffect } from 'react';
import $ from 'jquery';
const Find = (props) => {
     // let findJson = props.quer;
     let a=props.quer.find.name;
     let b=props.quer.find.city;
     if(props.quer.find.name==="null") a = "";
     if(props.quer.find.city==="null") b = "";
     const passJson = props.quer;
     // if(props.quer.find.name==="null") findJson.find.name = "null";
     // if(props.quer.find.city==="null") findJson.find.city = "null";
     // if(props.quer.find.price===-1) findJson.find.price = -1;
     // if(props.quer.find.rating===-1) findJson.find.rating = -1;
     useEffect(() => {
          // if(props.quer.find.freeCancellation===1) $('#f1').attr("checked","checked");
          // if(props.quer.find.freeCancellation===0) $('#f2').attr("checked","checked");
          if(props.quer.sortBy.name===1) $('#s1').attr("checked","checked");
          if(props.quer.sortBy.price===1) $('#s2').attr("checked","checked");
          if(props.quer.sortBy.rating===1) $('#s3').attr("checked","checked");
     })

     const sendIt = (e) => {
          e.preventDefault();
          if(passJson.find.name === "") passJson.find.name = "null";
          if(passJson.find.city === "") passJson.find.city = "null";
          if (passJson.find.name !== "null") passJson.find.name = passJson.find.name.toUpperCase();
          if (passJson.find.city !== "null") passJson.find.city = passJson.find.city.toUpperCase();
          props.ultimateSearch(passJson);
     }
     
     const changeSort = (e) => {
          for (let [key] of Object.entries(passJson.sortBy)) {
               if(key===e.target.value) passJson['sortBy'][key] = 1;
               else passJson['sortBy'][key] = -1;
          }
     }

     const changeFind = (e) => {
          passJson['find'][e.target.name] = e.target.value;
     }

     console.log(props.quer.find)
    return (
        <form className="findcmp">
             <div className="findf">
          <h3>FILTERS </h3> 
        <label htmlFor="name">name:</label><br/>
        <input onChange={changeFind} type="text" id="name" name="name" 
        defaultValue={a}/><br />

        <label htmlFor="city">city:</label><br />
        <input onChange={changeFind} type="text" id="city" name="city" 
        defaultValue={b}/><br/>

        {/* <label htmlFor="price">price:</label><br />
        <input onChange={changeFind} type="number" id="price" name="price" defaultValue={-1}/><br /> */}

        {/* <label htmlFor="rating">rating:</label><br />
        <input onChange={changeFind} type="number" id="rating" name="rating" defaultValue={-1}/><br /> */}

          <div className="findf"><br/><br/>
        <h3>SORT BY </h3>
        <input onChange={changeSort} type="radio" id="s1" name="sort" value="name" />{' '}
        <label htmlFor="name">Name</label><br />
        <input onChange={changeSort} type="radio" id="s2" name="sort" value="price" />
        <label htmlFor="price">Price</label><br />
        <input onChange={changeSort} type="radio" id="s3" name="sort" value="rating" />
        <label htmlFor="Rating">Rating</label><br /><br/>
        </div>
        </div>

        <Button onClick = {sendIt} variant="outline-dark" type="submit">SUBMIT</Button>
        <br/><br/>


      </form>
    );
} 

export default Find;
