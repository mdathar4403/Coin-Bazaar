// import React from 'react';
// import './LandingPage.css';
// import Lnavbar from './lnavbar';
// import Lbanner from './lbanner';
// import Whyus from './whyus';
// import Footer from './footer';
// const LandingPage = () => {
//   return (
//     <div>
//     <Lnavbar/>
//     <Lbanner/>
//     <Whyus/>
//     <Footer/>
//     </div>
//   );
// };

// export default LandingPage;
import React from 'react';


const LandingPage = () => {
  return (
    <div className="fixed flex-col justify-center h-[100%] w-[100%] bg-[#01084f]">
      <div className="endsignupButton flex flex-row justify-between mx-[12%] my-8">
        <div className="heading">
          <h1 className="text-[#ffffff] text-[4rem] font-bold">
            Crypto
            <span className="text-[#ff0000]">Trade</span>
          </h1>
        </div>
        
        <button className="bg-[#ff0000] text-[#ffffff] font-bold text-[1.5rem] p-5 h-[7%] rounded-full">
          Sign Up
        </button>
      </div>
      <div className="flex flex-row justify-evenly my-[10%]">
        <div className="landing_image h-[50%] w-[50%]">
          {/* <iframe src="https://embed.lottiefiles.com/animation/79966"></iframe> */}
          <img
            className="h-[50%] m-5 fixed left-[15%] bottom-[25%]"
            src="/animation_500_lfrdll3f.gif"
            alt=""
          />
        </div>
        <div className="intro flex flex-col justify-center">
          <div className="blur_background backdrop-blur-sm bg-[#41404044] m-[10%] rounded-full">
            <h1 className="text-[#ffffff] text-[3rem] font-bold p-10">
              Welcome to World's Best
              <span className="text-[#ff0000]"> Cryptocurrency </span>
              Trading App
            </h1>
          </div>
          <div className="getStartedButton text-end px-8 relative right-[18%]">
            <button className="bg-[#ff0000] text-[#ffffff] font-bold text-[1.5rem] p-5 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
