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
    <div className=" fixed flex-col justify-center h-[100%] w-[100%] bg-[#091039ff]">
      <div className="flex flex-row justify-evenly my-[10%]">
        <div className="landing_image h-[50%] w-[50%]">
          <img className="h-[50%]" src="/animation_500_lfral9jb.gif" alt="" />
        </div>
        <div className="intro">
          <h1 className="text-5xl font-bold text-[#000000]">
            Welcome to <br /> <span className="text-[#0CB1CA]">Crypto</span>
            <span className="text-[#000000]">Market</span>
          </h1>
          <p className="text-[#000000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut ultricies luctus, nisl nisl aliquet nisl, nec
            lacinia nunc nisl eget nisl. Sed condimentum, nisl ut ultricies
            luctus, nisl nisl aliquet nisl, nec lacinia nunc nisl eget nisl.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
