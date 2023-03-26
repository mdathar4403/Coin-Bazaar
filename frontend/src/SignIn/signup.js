import React from "react";
import "./signup.css";
import logo from "./logo.png";
import axios from "axios";
import { useState, useEffect } from "react";

const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  // const [errorMessages, setErrorMessages] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // Generate JSX code for error message

  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(phone);
    // Using Fetch API
    axios.post("http://localhost:3000/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        // Add parameters here
        firstname,
        lastname,
        email,
        password,
         phone,
        address,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle data
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
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
          <h2 style={{ textAlign: "center" }}>SIGN UP</h2>

          <form action="http://localhost:3000/api/auth/signup" method="POST" onSubmit={onSubmitHandler}>
          <div className="group">
            <div>
              <label htmlFor="first_name" className="label">
                First Name
              </label>
            </div>
            <div>
              <input
                placeholder="first name"
                type="text"
                size="30"
                className="input"
                name="first_name"
                onChange={(e) => setfirstname(e.target.value)}
                value={firstname}
                required
              />
            </div>
          </div>
          <div className="group">
            <div>
              <label htmlFor="last_name" className="label">
                Last Name
              </label>
            </div>
            <div>
              <input
                placeholder="last name"
                type="text"
                size="30"
                className="input"
                name="last_name"
                onChange={(e) => setlastname(e.target.value)}
                value={lastname}
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
                onChange={(e) => setemail(e.target.value)}
                value={email}
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
                onChange={(e) => setphone(e.target.value)}
                value={phone}
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
                size="30"
                className="input"
                name="address"
                onChange={(e) => setaddress(e.target.value)}
                value={address}
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
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                required
              />
            </div>
          </div>
          <div className="group">
            <button type="submit" className="btner">
              Sign-Up
            </button>
          </div>
          </form>
          <div style={{ textAlign: "center" }}>
            already have an account{" "}
            <a href="/login">
              <strong>login here</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
