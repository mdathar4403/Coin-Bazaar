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
import React, { useState, useEffect } from 'react'
import Aboutus from "./aboutus/aboutus";
// import Cart from "./Cart/Cart";

function App() {
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])



  return (
    <div className="App">
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
