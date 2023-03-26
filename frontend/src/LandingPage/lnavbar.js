import React from "react";
import "./lnavbar.css";
import logo from '../SignIn/logo.png'
import { BiMenu } from 'react-icons/bi';

const Lnavbar = () => {
  return (
    <>
    <div className="nav-wrapper">
    <div className="logo-container">
        <img className="nav-logo" src={logo} alt="Logo"/><strong>hackelites</strong>
    </div>
    <nav>
        <input className="hidden" type="checkbox" id="menuToggle"/>
           <div className="nav-tab abs abs1"><button  className="navbutton with"><a href="/login">sign in </a></button></div>
                <div className="nav-tab abs abs2"><button className="navbutton with "><a href="/signup">sign up</a></button></div>
        <label className="menu-btn" for="menuToggle">

           <div className="menu menu1 "> 
           <BiMenu  />
           </div>

           {/* <div className="menu 2menu"> <BiMenu /></div> */}
          
        </label>
        <div className="nav-container">
            <ul className="nav-tabs">
                <li className="nav-tab">Home</li>
                <li className="nav-tab">About Us</li>
                <li className="nav-tab">Services</li>
                <li className="nav-tab">FAQ</li>
                <li className="nav-tab"><button className="navbutton navsign"><a href="/login">sign in </a></button></li>
                <li className="nav-tab"><button className="navbutton navsign"><a href="/signup">sign up</a></button></li>
            </ul>
        </div>
    </nav>
  </div>
</>
  );
};

export default Lnavbar;
