import "./Dashboard.css";

import React, { useState, useEffect } from "react";

function Single(props) {
  return (
    <div className="sales">
      <img src={props.imagesmall}></img>
      {/* <span className="material-icons-sharp">analytics</span> */}
      <div className="middle">
        <div className="left">
          <h3>{props.stockId}</h3>
          <h1>Rs {props.total_amount}</h1>
          <h1>Rs {props.current_market_price}</h1>
        </div>
        <div className="progress">
          {/* <img src={props.imagesmall}></img> */}
          <div className="number">
            <p>81%</p>
          </div>
        </div>
      </div>
      <small className="text-muted">Last 24 Hours</small>
    </div>
  );
}

export default Single;
