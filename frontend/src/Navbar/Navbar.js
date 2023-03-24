import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="container">
            <aside>
                <div className="top">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h2>Hack<span class="danger">Elite</span></h2>
                    </div>
                    <div className="close" id="close-btn">
                        <span className="material-icons-sharp">close</span>
                    </div>
                </div>


                <div className="sidebar">
                    <a href="#" className="active" alt="logo">
                        <span class="material-icons-sharp">person_outline</span>
                        <h3>Home</h3>
                    </a>
                    <a href="#" alt="logo">
                        <span class="material-icons-sharp">grid_view</span>
                        <h3>DashBoard</h3>
                    </a>

                    <a href="#" alt="logo">
                        <span className="material-icons-sharp">receipt_long</span>
                        <h3>Orders</h3>
                    </a>
                    <a href="#" alt="logo">
                        <span className="material-icons-sharp">insights</span>
                        <h3>Analytics</h3>
                    </a>
                    <a href="#" alt="logo">
                        <span className="material-icons-sharp">mail_outline</span>
                        <h3>Wallets</h3>
                        <span className="message-count">26</span>
                    </a>
                    <a href="#" alt="logo">
                        <span className="material-icons-sharp">settings</span>
                        <h3>Settings</h3>
                    </a>
                    <a href="#" alt="logo">
                        <span className="material-icons-sharp">add</span>
                        <h3>Add Products</h3>
                    </a>
                    <a href="#" alt="logo">
                        <span className="material-icons-sharp">logout</span>
                        <h3>logout</h3>
                    </a>
                </div>
            </aside>
        </div>
    )
}

export default Navbar
