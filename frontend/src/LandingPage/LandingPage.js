import React from 'react';
import './LandingPage.css';
import Lnavbar from './lnavbar';
import Lbanner from './lbanner';
import Whyus from './whyus';
import Footer from './footer';
import AChart from '../chart/chart';

const LandingPage = () => {
  return (
    <div>
    <Lnavbar/>
    <AChart/>
    <Lbanner/>
    <Whyus/>
    <Footer/>
    </div>
  );
};

export default LandingPage;
