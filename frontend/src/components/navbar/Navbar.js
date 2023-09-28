import {Navbar,Container,Nav} from 'react-bootstrap';
import $ from 'jquery';
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = (props) => {
     const navigate = useNavigate();

     useEffect( ()=> {
          if(props.user.userMail==="null" || props.user.userMail==="none" )
          {
               $('.navLogin').show();
               $('#userLogo').hide();
               $('#logout').hide();
               $('#bookingsButton').hide();
          }
          else 
          {
               $('#logout').show();
               $('#bookingsButton').show();
               $('.navLogin').hide();
               $('#userLogo').show();
          }
     });

     return(
     <Navbar id="nvv" collapseOnSelect style={{backgroundColor:"powderblue"}} expand="lg" sticky="top">
     <Container>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="me-auto">
          <Nav.Link onClick={() =>navigate('/')} >HOME</Nav.Link>
          <Nav.Link onClick={() =>navigate('/bookings')} id="bookingsButton">BOOKINGS</Nav.Link>
          <Nav.Link id="logout" href="/">Log Out</Nav.Link>
          
     </Nav>
     <Navbar.Brand >Quick-Hotels</Navbar.Brand>
     <Nav>
          <Nav.Link className="navLogin" href="login">LOGIN</Nav.Link>
          <Nav.Link className="navLogin" eventKey={2} href="signup">SIGN UP</Nav.Link>
          <h4 id="userLogo">{props.user.userMail}</h4>
     </Nav>
     </Navbar.Collapse>
     </Container>
     </Navbar>);
}
export default NavBar;
