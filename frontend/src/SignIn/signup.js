import React from "react";
import "./signup.css";
import logo from "./logo.png";
import { useState, useEffect } from "react";

const Signup = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Generate JSX code for error message

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  return (
    <div className="sign">
      {/* <h1> sign in</h1> */}
      <div class=" signincont">
          <div class="  companyname">
            <h2>
              Need webdesign for your page? designspace will help you... text
              for trading app
            </h2>
            <div style={{ textAlign: "center" }}>
              <img src={logo} className="logo" alt="company name"></img>
            </div>
          </div>

          <div className="mainsignin">
            <div style={{ paddingTop: "20vh" }}>
              <h2 style={{ textAlign: "center" }}>SIGN UP</h2>
              <div className="group">
                <div>
                  <label htmlFor="firstname" className="label">
                    First Name
                  </label>
                </div>
                <div>
                  <input
                    placeholder="first name"
                    type="text"
                    size="30"
                    className="input"
                    name="firstname"
                    required
                  />
                </div>
              </div>
              <div className="group">
                <div>
                  <label htmlFor="lastname" className="label">
                    Last Name
                  </label>
                </div>
                <div>
                  <input
                    placeholder="last name"
                    type="text"
                    size="30"
                    className="input"
                    name="lastname"
                    required
                  />
                </div>
              </div>
              <div className="group">
                <div>
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                </div>
                <div>
                  <input
                    placeholder="abc@gmail.com"
                    type="email"
                    size="30"
                    className="input"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="group">
                <div>
                  <label htmlFor="phone" className="label">
                    Phone
                  </label>
                </div>
                <div>
                  <input
                    placeholder="1234567890"
                    type="tel"
                    pattern="[0-9]{10}"
                    className="input"
                    name="phone"
                    required
                  />
                </div>
              </div>
              <div className="group">
                <div>
                  <label htmlFor="lastname" className="label">
                    address
                  </label>
                </div>
                <div>
                  <input
                    placeholder="address"
                    type="text"
                    size="50"
                    className="input"
                    name="address"
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
                    placeholder="********"
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
                  Sign-Up
                </button>
              </div>
              <div style={{textAlign:"center"}}>already have an account <a href="/login">login here</a></div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Signup;
