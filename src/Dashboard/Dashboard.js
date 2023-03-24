import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Dashboard.css'
import MainPage from '../MainPage/MainPage'
import Rightbar from '../Rightbar/Rightbar'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Navbar className="navbar" />
            <MainPage className="mainPage" />
            <Rightbar className="rightbar" />
        </div>
    )
}

export default Dashboard
