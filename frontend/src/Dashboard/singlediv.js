import "./Dashboard.css";

import React, { useState, useEffect } from "react";

function Single(props) {
  return (
    <>
     {props.current_cost >= props.total_amount && (
      <div className="flex items-center p-4 bg-white rounded">
        <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
          <svg
            className={
              props.current_cost >= props.total_amount
                ? "w-6 h-6 fill-current  text-green-700"
                : "w-6 h-6 fill-current  text-red-700"
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="flex-grow flex flex-col ml-4">
          <span className="text-xl font-bold">
            Rs {Math.round(props.total_amount)}
          </span>
          <span className="text-xl font-bold">
            Rs {Math.round(props.current_cost)}
          </span>
          <div className="flex items-center justify-between">
            <img src={props.imagesmall}></img>{" "}
            <span class="text-gray-500">{props.stockId}</span>
            <span className="text-green-500 text-sm font-semibold ml-2">
             +{(
                ((props.current_cost - props.total_amount) /
                  props.total_amount) *
                100
              ).toFixed(2)}
              %
            </span>
          </div>
        </div>
      </div>
     )}
      {props.current_cost < props.total_amount && (
        <div class="flex items-center p-4 bg-white rounded">
          <div class="flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded">
            <svg
              class="w-6 h-6 fill-current text-red-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="flex-grow flex flex-col ml-4">
            <span className="text-xl font-bold">
              Rs {Math.round(props.total_amount)}
            </span>
            <span className="text-xl font-bold">
              Rs {Math.round(props.current_cost)}
            </span>{" "}
            <div class="flex items-center justify-between">
              <img src={props.imagesmall}></img>{" "}
              <span class="text-gray-500">{props.stockId}</span>
              <span className="text-green-500 text-sm font-semibold ml-2">
                {(
                  ((props.current_cost - props.total_amount) /
                    props.total_amount) *
                  100
                ).toFixed(2)}
                %
              </span>
            </div>
          </div>
        </div>
      )}

      {/* <div className="sales">
      <img src={props.imagesmall}></img>
  
      <div className="middle">
        <div className="left">
          <h3>{props.stockId}</h3>
          <h1>Rs {props.total_amount}</h1>
          <h1>Rs {props.current_market_price}</h1>
        </div>
        <div className="progress">

          <div className="number">
            <p>81%</p>
          </div>
        </div>
      </div>
      <small className="text-muted">Last 24 Hours</small>
    </div> */}
    </>
  );
}

export default Single;
