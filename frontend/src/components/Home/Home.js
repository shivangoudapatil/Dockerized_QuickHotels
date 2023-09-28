import './Home.css'
const Home = (props) => { 
     let vals = {rooms:1,city:"null",checkIn:"null",checkOut:"null"};
     const sendIt = (event) => {
          event.preventDefault();
          let pr = props.quer;
          pr.find.name = "null";
          pr.find.city = vals.city;
          if (pr.find.city !== "null") pr.find.city = pr.find.city.toUpperCase();
          props.addnsearch(vals,pr);
     }


     const leaveFeild = (e) => {
          vals = {...vals,[e.target.name]:e.target.value}
     }

    return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
        <title>Booking Form HTML Template</title>
        {/* Google font */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
        <div id="booking" className="section">
          <div className="section-center">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-md-push-5">
                  <div className="booking-cta">
                    <h1>Make your reservation</h1>
                  </div>
                </div>
                <div className="col-md-4 col-md-pull-7">
                  <div className="booking-form">
                    <form onSubmit={sendIt}>
                      <div className="form-group">
                        <span className="form-label">Your Destination</span>
                        <input onChange={leaveFeild} name = "city" className="form-control" type="text" placeholder="Enter the city name" required/>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <span className="form-label">Check In</span>
                            <input onChange={leaveFeild} name="checkIn" className="form-control" type="date" required />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <span className="form-label">Check out</span>
                            <input onChange={leaveFeild} name="checkOut" className="form-control" type="date" required />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="form-group">
                            <span className="form-label">Rooms</span>
                            <input onChange={leaveFeild} name="rooms" className="form-control" type="number" required />
                            <span className="select-arrow" />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <span className="form-label">Adults</span>
                            <select className="form-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                            </select>
                            <span className="select-arrow" />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <span className="form-label">Children</span>
                            <select className="form-control">
                              <option>0</option>
                              <option>1</option>
                              <option>2</option>
                            </select>
                            <span className="select-arrow" />
                          </div>
                        </div>
                      </div>
                      <div className="form-btn">
                        <button className = "submit-btn" type="submit" >Check availability</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;
