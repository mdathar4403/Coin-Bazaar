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
    <>
      <div className="fixed flex-col justify-center h-[100%] w-[100%] bg-[#ffffff]">
        <div className="endsignupButton flex flex-row justify-between mx-[12%] my-8">
          <div className="heading">
            <div className="text-[#000000] text-[4rem] font-bold m-0">
              Crypto
              <span className="text-[#ff0000]">Trade</span>
            </div>
          </div>
          <div className="signup_button my-auto">
            <button className="bg-[#0ce9da] text-[#ffffff] font-bold text-[1.5rem] p-5 rounded-full">
              <a href='/signup'>Sign Up</a>
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-evenly my-[10%]">
          <div className="landing_image h-[50%] w-[50%]">
            {/* <iframe src="https://embed.lottiefiles.com/animation/79966"></iframe> */}
            <img
              className="h-[50%] m-5 fixed left-[15%] bottom-[25%]"
              src="/119081-cryptocurrency-lottie-animation.gif"
              alt=""
            />
          </div>
          <div className="fixed w-[50%]  right-0 bottom-[25%] intro flex flex-col justify-center">
            <div className="blur_background backdrop-blur-sm bg-[#615f8752] m-[10%] rounded-full">
              <h1 className="text-[#000000] text-[3rem] font-bold p-10">
               The Easiest Way to Buy and sell 
                <span className="text-[#ff0000]"> Cryptocurrency </span>
              </h1>
            </div>
            <div className="getStartedButton text-end px-8 relative right-[18%]">
              <button className="bg-[#0ce9da] text-[#ffffff] font-bold text-[1.5rem] p-5 rounded-full">
              <a href='/login'>Get Started</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
