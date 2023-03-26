import React from 'react';
import './LandingPage.css';
import Lnavbar from './lnavbar';
import Lbanner from './lbanner';
import Whyus from './whyus';
import Footer from './footer';
const LandingPage = () => {
  return (
    <div>
    <Lnavbar/>
    <Lbanner/>
    <Whyus/>
    <Footer/>
    </div>
  );
};

export default LandingPage;
