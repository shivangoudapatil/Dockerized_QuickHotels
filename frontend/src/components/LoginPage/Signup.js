const Signup = (props) => {
     let vals = {hotels:[]};
     const sendIt = (event) => {
          event.preventDefault();

          props.addCred(vals)
     }

     const leaveFeild = (e) => {
          vals = {...vals,[e.target.name]:e.target.value}
     }
     return(
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid" alt="img not found" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={sendIt}>
                <div className="divider d-flex align-items-center my-4">
                </div>
                {/* name input */}
                <div className="form-outline mb-5">
                  <label className="form-label" htmlFor="form3Example5">Name</label>
                  <input type="text" id="form3Example3" 
                  className="form-control form-control-lg" placeholder="Enter your name" required/>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">User Name</label>
                  <input type="text" name="userMail" onChange={leaveFeild} id="form3Example3" 
                  className="form-control form-control-lg" placeholder="Enter a user Name" required/>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">Set Password</label>
                  <input type="password" name="password" onChange={leaveFeild} id="form3Example4" 
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
                  <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  <br/><br/>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="login" className="link-danger">Login</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Signup;