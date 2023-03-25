import React from 'react';
import './LandingPage.css';
import Lnavbar from './lnavbar';
import Lbanner from './lbanner';
import Whyus from './whyus';
const LandingPage = () => {
  return (
    <div>
    <Lnavbar/>
    <Lbanner/>
    <Whyus/>
    </div>
  );
};

export default LandingPage;
