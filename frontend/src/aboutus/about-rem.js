import React from 'react';
import './about-rem.css';
import i1 from "./i1.png"
import im1 from "./im1.png"
import i2 from "./i2.png"
import im2 from "./im2.png"
const Aboutrem = () => {
  return (
    <div className='aboutrem'>
    <div className='about-content'>
    <h1 style={{textAlign:"center",fontSize:"3vw" }}>A trading partner you can trust</h1>
    <p style={{textAlign:"center",fontSize:"150%"}}>At Tradiant, we rigorously focus on quality and transparency. Our order execution quality is independently monitored. Order execution with high quality means: you save money with every investment you make with Tradiant.</p>
    
    </div>
    <div className="batman-boxabout">
      <div className="carderabout">
        <div className="card__imageabout">
          <img src={i1} />
        </div>
        <div className="card__copy">
          <h1>Quality execution on every trade</h1>
          <p>
          Backed by multiple analyzes and precise algorithms providing quality execution decisions on every trade. Guarantee your comfort and perfection in making decisions.          </p>
        </div>
      </div>
        <div className="carderabout">
          <div className="card__imageabout">
            <img src={i2} />
          </div>
          <div className="card__copyabout">
            <h1>Transparent & competitive pricing</h1>
            <p>
            Provides transparency Pricing Emphasizes Value, not Price. As price becomes clearer to everyone in the market, each competitor's value also comes into sharper focus.            </p>
          </div>
        </div>
      </div>





    <div className="batman-boxabout">
      <div className="carderabout">
        <div className="card__imageabout">
          <img src={im1} />
        </div>
      </div>
        <div className="carderabout">
=          <div className="card__copyabout">
            <h1 style={{padding:"30px"}}>Our Vision</h1>
            <p style={{padding:"30px"}}>
            Our vision is to become a trusted advisor, intermediary, and partner to assist customers in determining financial strategies in the capital market and Become a professional reinsurance broker with a global reputation </p>
          </div>
        </div>
      </div>



    <div className="batman-boxabout">
      <div className="carderabout">
        <div className="card__copy">
          <h1 style={{padding:"30px"}}>Our Mission</h1>
          <p style={{padding:"30px"}}>
          Providing excellent service from risk placement to settlement of compensation in the interest of obtaining the best capital market results. Maintain the profitability of each user with the aim of meeting the expectations of each user</p>
        </div>
      </div>
        <div className="carderabout">
          <div className="card__imageabout">
            <img src={im2} />
          </div>
        </div>
      </div>
      <div style={{textAlign:'center'}}>
      <h1 style={{textAlign:"center",fontSize:"3vw" }}>All of this and much more dedicated from <strong style={{color:" #7380ec"}}>HackElites</strong> to your success</h1>
      <button className="banner-b1234">Trade with us</button>
</div>
    </div>

  );
};

export default Aboutrem;
