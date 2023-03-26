import React from "react";
import "./signup.css";
import logo from "./logo.png";
// import { useState, useEffect } from "react";

const Login = () => {
  // const [errorMessages, setErrorMessages] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // Generate JSX code for error message

  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );
  return (
    <div className=" signincont">
      <div className="  companyname">
        <div className="innerdiv">
          <h2>
            Need webdesign for your page? designspace will help you... text for
            trading app
          </h2>
          <div style={{ textAlign: "center" }}>
            <img src={logo} className="logo" alt="company name"></img>
          </div>
        </div>
      </div>

      <div className="mainsignin">
        <div className="innerdiv">
          <div style={{ paddingTop: "20vh" }}>
            <h2 style={{ textAlign: "center" }}>SIGN IN</h2>
            <div className="group">
              <div>
                <label htmlFor="email" className="label">
                  Email
                </label>
              </div>
              <div>
                <input
                  type="text"
                  size="30"
                  className="input"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="group">
              <div>
                <label htmlFor="password" className="label">
                  Password
                </label>
              </div>
              <div>
                <input
                  type="password"
                  minLength="8"
                  className="input"
                  name="password"
                  required
                />
              </div>
            </div>
            <div className="group">
              <button type="button" className="btner">
                LOGIN
              </button>
            </div>
            <div style={{ textAlign: "center" }}>
              don't have an account <a href="/signup"><strong>signup here</strong></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
