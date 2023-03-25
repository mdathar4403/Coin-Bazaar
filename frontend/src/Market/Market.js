import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Market.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import profile1 from '../assets/profile-1.jpg'
import Coin from './Coin';

const Market = () => {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data)
                console.log(res.data)
            }).catch(error => console.log(error))
    }, [])
    const handleChange = e => {
        setSearch(e.target.value)
    }
    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )
    console.log(filteredCoins)

    return (
        <div className='container2'>
            <div className="navbar-market">
                <Navbar />
            </div>


            <div className="coin-app">
                <div className="coin-search">
                    {/* <h1 className="coin-text">Search your desired coin</h1> */}
                    <form action="">
                        <input type="text" className="coin-input" placeholder="Search for stocks" onChange={handleChange} />
                    </form>

                </div>
                {filteredCoins.map(coin => {
                    return (
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            marketcap={coin.market_cap}
                            price={coin.current_price}
                            pricechange={coin.price_change_percentage_24h}
                        // volume={coin.total_volume}
                        />
                    );
                })}

            </div>

            <div className="sales-analytics">
                <div className="right1">
                    <div className="top">
                        <button id="menu-btn">
                            <span className="material-icons-sharp">menu</span>
                        </button>
                        <div className="theme-toggler">
                            <span className="material-icons-sharp" id="light">light_mode</span>
                            <span className="material-icons-sharp">dark_mode</span>
                        </div>
                        <div className="profile">
                            <div className="info">
                                <p>Hey, <b>Athar</b></p>
                                <small className="text-muted">Admin</small>
                            </div>
                            <div className="profile-photo">
                                <img src={profile1} alt="hero" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-coins">
                    <h2>Top Coins</h2>

                    <div className="item online">
                        <div className="icon">
                            <span className="material-icons-sharp">shopping_cart</span>
                            {/* <img src={filteredCoins[0].image} alt="" /> */}
                        </div>
                        <div className="right">
                            <div className="info">
                                <h3>ONLINE ORDERS</h3>
                                <small className="text-muted">Last 24 Hours</small>
                            </div>
                            <div>
                                <h5 className="success">55%</h5>
                                <h3>2432</h3>
                            </div>
                        </div>
                    </div>
                    <div className="item offline">
                        <div className="icon">
                            <span className="material-icons-sharp">local_mall</span>
                        </div>
                        <div className="right">
                            <div className="info">
                                <h3>OFFLINE ORDERS</h3>
                                <small className="text-muted">Last 24 Hours</small>
                            </div>
                            <div>
                                <h5 className="danger">-15%</h5>
                                <h3>781</h3>
                            </div>
                        </div>
                    </div>
                    <div className="item customers">
                        <div className="icon">
                            <span className="material-icons-sharp">person</span>
                        </div>
                        <div className="right">
                            <div className="info">
                                <h3>NEW CUSTOMERS</h3>
                                <small className="text-muted">Last 24 Hours</small>
                            </div>
                            <div>
                                <h5 className="success">+25%</h5>
                                <h3>1822</h3>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Market
