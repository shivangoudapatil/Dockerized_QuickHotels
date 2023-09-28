import Details from "../Details/Details";
import Find from '../Find/Find';
import "./Veiw.css"

const List = (props) => {
     let imgList = [
          "https://i.ibb.co/2s7sth0/img1.jpg",
          "https://i.ibb.co/s3HDbdT/img2.jpg",
          "https://i.ibb.co/DrjzW7n/img3.jpg",
          "https://i.ibb.co/8ch42fC/img4.jpg",
          "https://i.ibb.co/VTLxj76/img5.jpg",
          "https://i.ibb.co/wNysxbF/img6.jpg",
          "https://i.ibb.co/Jz61KYc/img8.jpg",
          "https://i.ibb.co/6n9HSPZ/img9.jpg",
          "https://i.ibb.co/qmV7YJy/img10.jpg",
          "https://i.ibb.co/zZT31CV/img11.jpg",
          "https://i.ibb.co/GshSykG/img12.jpg",
          "https://i.ibb.co/bL51n9J/img13.jpg",
          "https://i.ibb.co/R3mL49g/img14.jpg",
          "https://i.ibb.co/zm2XRxh/img15.jpg",
          "https://i.ibb.co/P1VcB4z/img16.jpg",
          "https://i.ibb.co/X7Wj4B6/img17.jpg",
          "https://i.ibb.co/g9FGMV0/img18.jpg",
          "https://i.ibb.co/2ny1BgZ/img19.jpg",
          "https://i.ibb.co/nMZGthH/img20.jpg",
          "https://i.ibb.co/w0S9BNz/img21.jpg",
          "https://i.ibb.co/Zc4xNgZ/img22.jpg",
          "https://i.ibb.co/BKGkW59/img23.jpg"
     ]
     let ar = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
     ar.sort( ()=>Math.random()-0.5 );
     let lt;
     if(props.list.length > 21) lt = props.list.slice(0,21)
     else lt = props.list;
     return(<div id="wrapper">
     <div id="first" className="ff"><Find quer={props.quer} ultimateSearch={props.ultimateSearch}/></div>
     <div id="second" className="dd">
          {lt.map((ele,key) => {
               return(<Details key={key} lk={imgList[ar[key]]} addHotel = {props.addHotel} hotel={ele}/>);
          })}
     </div>
     </div>
     );
}

export default List;