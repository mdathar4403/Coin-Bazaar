import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./SignIn/login";
import Signup from "./SignIn/signup";
// import Market from "./Market/Market";
import Coin from "./routes/Coin";
import Coins from "./Market/Coins";
import axios from "axios";
import Aboutus from "./aboutus/aboutus";
import React, { useState, useEffect } from 'react'
import Coin_sell from "./routes/Coin_sell";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
function App() {
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.log(error);
      toast.error("Something Went Wrong");
    })
  }, [])

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Signup />
              </>
            }
          />
          <Route
            path="/aboutus"
            element={
              <>
                <Aboutus />
              </>
            }
          />
          <Route
            path="/dashboard/sell"
            element={
              <>
                <Coin_sell />
              </>
            }
          />
         
          <Route path='/market' element={<Coins coins={coins} />} />
          <Route path='/coin' element={<Coin />}>
            <Route path=':coinId' element={<Coin />} />
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
