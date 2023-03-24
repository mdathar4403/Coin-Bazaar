import React from 'react'
import './Rightbar.css'
import profile1 from '../assets/profile-1.jpg'
import profile2 from '../assets/profile-2.jpg'
import profile3 from '../assets/profile-3.jpg'
import profile4 from '../assets/profile-4.jpg'

const Rightbar = () => {
    return (
        <div>
            <div class="right">
                <div class="top">
                    <button id="menu-btn">
                        <span class="material-icons-sharp">menu</span>
                    </button>
                    <div class="theme-toggler">
                        <span class="material-icons-sharp" id="light">light_mode</span>
                        <span class="material-icons-sharp">dark_mode</span>
                    </div>
                    <div class="profile">
                        <div class="info">
                            <p>Hey, <b>Athar</b></p>
                            <small class="text-muted">Admin</small>
                        </div>
                        <div class="profile-photo">
                            <img src={profile1} alt="hero" />
                        </div>
                    </div>
                </div>
                {/* <!----------- END OF TOP -----------> */}
                <div class="recent-updates">
                    <h2>Recent Updates</h2>
                    <div class="updates">
                        <div class="update">
                            <div class="profile-photo">
                                <img src={profile2} alt="hero" />
                            </div>
                            <div class="message">
                                <p><b>Mike <b>received his order of Night lion tech GPS drone</b></b></p>
                                <small class="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>
                        <div class="update">
                            <div class="profile-photo">
                                <img src={profile3} alt="hero" />
                            </div>
                            <div class="message">
                                <p><b>Mike <b>received his order of Night lion tech GPS drone</b></b></p>
                                <small class="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>
                        <div class="update">
                            <div class="profile-photo">
                                <img src={profile4} alt="hero" />
                            </div>
                            <div class="message">
                                <p><b>Mike <b>received his order of Night lion tech GPS drone</b></b></p>
                                <small class="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>
                    </div>
                    {/* <!----------- END OF RECENT UPDATES -------> */}
                    <div class="sales-analytics">
                        <h2>Sales Analytics</h2>

                        <div class="item online">
                            <div class="icon">
                                <span class="material-icons-sharp">shopping_cart</span>
                            </div>
                            <div class="right">
                                <div class="info">
                                    <h3>ONLINE ORDERS</h3>
                                    <small class="text-muted">Last 24 Hours</small>
                                </div>
                                <div>
                                    <h5 class="success">55%</h5>
                                    <h3>2432</h3>
                                </div>
                            </div>
                        </div>
                        <div class="item offline">
                            <div class="icon">
                                <span class="material-icons-sharp">local_mall</span>
                            </div>
                            <div class="right">
                                <div class="info">
                                    <h3>OFFLINE ORDERS</h3>
                                    <small class="text-muted">Last 24 Hours</small>
                                </div>
                                <div>
                                    <h5 class="danger">-15%</h5>
                                    <h3>781</h3>
                                </div>
                            </div>
                        </div>
                        <div class="item customers">
                            <div class="icon">
                                <span class="material-icons-sharp">person</span>
                            </div>
                            <div class="right">
                                <div class="info">
                                    <h3>NEW CUSTOMERS</h3>
                                    <small class="text-muted">Last 24 Hours</small>
                                </div>
                                <div>
                                    <h5 class="success">+25%</h5>
                                    <h3>1822</h3>
                                </div>
                            </div>
                        </div>


                        <div class="item" id="add_product">
                            <div>
                                <span class="material-icons-sharp">add</span>
                                <h3>Add Product</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rightbar
