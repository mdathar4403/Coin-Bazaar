import React from "react";
import "./lbanner.css";
import tradeimg from "./tradeimg.jpg";
const Lbanner = () => {
  return (
    <>
    <div className="banner">
      <div className="banner-content">
        <h3>smart investation</h3>
        <h1>
          Invest Your Money With Us <br />
          and Get Amazing Profit
        </h1>
        <p>
          Maximize your investment in the capital market world with the
          <br />
          convenience and various features provided by Tradiant.
        </p>

        <button className="banner-b1">get started</button>
        <button className="banner-b2">see how it works</button>
        <p>registered and supervised by</p>
        <span className="bannerspan">logo1</span>
        <span className="bannerspan">logo2</span>
      </div>
      <div className="banner-image">
        <img className="main-image" src={tradeimg}></img>
      </div>
    </div>
    <div className="inverstors">
      <h3 style={{textAlign:"center" ,margin:"3vh"}}>Invest in their stock and be part of the business</h3>
      <span className="investor-logo">logo1</span>
      <span className="investor-logo">logo2</span>
      <span className="investor-logo">logo3</span>
      <span className="investor-logo">logo4</span>
      <span className="investor-logo">logo5</span>
      <span className="investor-logo">logo6</span>
      <span className="investor-logo">logo7</span>
    </div>
    </>
  );
};

export default Lbanner;
