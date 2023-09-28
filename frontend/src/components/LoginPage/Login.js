import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
const Login = (props) => {
     let vals;
     const navigate = useNavigate();
     useEffect( ()=> {
          if(props.user.userMail==="null") document.querySelector('#invalidity').style.display = "none";
          else if(props.user.userMail==="none") document.querySelector('#invalidity').style.display = "block";
          //else window.location.href = '/home'; window.history.pushState("", "", "/home");
          //else <Navigate to='/'/>
          else navigate('/');
     });
     const sendIt = (event) => {
          event.preventDefault();
          props.checkCred(vals)
     }

     const leaveFeild = (e) => {
          vals = {...vals,[e.target.name]:e.target.value}
     }

     return(
      <section className="vh-100">
           <br/><p></p>
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid" alt="img not found" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={sendIt}>
                <div className="divider d-flex align-items-center my-4">
                </div>
                <h2 id="invalidity" style={{color:"red"}}>INVALID CREDENTIALS</h2>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">User Name</label>
                  <input type="text" onChange={leaveFeild} name="userMail" id="emailIP"
                   className="form-control form-control-lg" placeholder="Enter a valid email address" required/>
               </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                  <input type="password" onChange={leaveFeild} name="password" id="passwordIP" 
                  className="form-control form-control-lg" placeholder="Enter password" required/>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit"  className="btn btn-primary btn-lg">Login</button>
                  <br/><br/>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="signup" className="link-danger">Signup</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Login;
