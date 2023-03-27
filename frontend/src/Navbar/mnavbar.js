import React from "react";
import "./mnavbar.css";
import logo from '../SignIn/logo.png'
import { BiMenu } from 'react-icons/bi';

const Mnavbar = () => {
  return (
    <>
      {/* <div className="nav-wrapper">  */}
      
        <nav>
          <input className="hidden" type="checkbox" id="menuToggle" />
          <label className="menu-btn" for="menuToggle">

            <div className="menu menu123 ">
              <BiMenu />
            </div>

            {/* <div className="menu 2menu"> <BiMenu /></div> */}

          </label>
          <div className="nav-container123">
            <ul className="nav-tabs">
              <li className="nav-tab"><a href="/">Home </a></li>
              <li className="nav-tab"><a href="/">About US</a></li>
              <li className="nav-tab"><a href="/#why-us">Why US</a></li>
              <li className="nav-tab"><a href="/market">Market</a></li>
              <li className="nav-tab"><button className="navbutton navsign"><a href="/login">sign in </a></button></li>
              <li className="nav-tab"><button className="navbutton navsign"><a href="/signup">sign up</a></button></li>
            </ul>
          </div>
        </nav>
      {/* </div> */}
    </>
  );
};

export default Mnavbar;