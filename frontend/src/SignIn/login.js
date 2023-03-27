// import React from "react";
// import "./signup.css";
// import logo from "./logo.png";
// // import { useState, useEffect } from "react";

// const Login = () => {
//   // const [errorMessages, setErrorMessages] = useState({});
//   // const [isSubmitted, setIsSubmitted] = useState(false);
//   // Generate JSX code for error message

//   // const renderErrorMessage = (name) =>
//   //   name === errorMessages.name && (
//   //     <div className="error">{errorMessages.message}</div>
//   //   );
//   return (
//     <div className=" signincont">
//       <div className="  companyname">
//         <div className="innerdiv">
//           <h2>
//             Need webdesign for your page? designspace will help you... text for
//             trading app
//           </h2>
//           <div style={{ textAlign: "center" }}>
//             <img src={logo} className="logo" alt="company name"></img>
//           </div>
//         </div>
//       </div>

//       <div className="mainsignin">
//         <div className="innerdiv">
//           <div style={{ paddingTop: "20vh" }}>
//             <h2 style={{ textAlign: "center" }}>SIGN IN</h2>
//             <div className="group">
//               <div>
//                 <label htmlFor="email" className="label">
//                   Email
//                 </label>
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   size="30"
//                   className="input"
//                   name="email"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="group">
//               <div>
//                 <label htmlFor="password" className="label">
//                   Password
//                 </label>
//               </div>
//               <div>
//                 <input
//                   type="password"
//                   minLength="8"
//                   className="input"
//                   name="password"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="group">
//               <button type="button" className="btner">
//                 LOGIN
//               </button>
//             </div>
//             <div style={{ textAlign: "center" }}>
//               don't have an account <a href="/signup"><strong>signup here</strong></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// function Box() {
//   return (
//     <mesh>
//       <boxBufferGeometry attach="geometry" />
//       <meshLambertMaterial attach="material" color="hotpink" />
//     </mesh>
//   );
// }
// export default function App() {
// return (
// <div className="App">
// <div className="App-header">
// <Canvas>
// <OrbitControls />
// <ambientLight intensity ={0.5} />
// <spotLight position={[10, 15,10]} angle={0.3} />
// <Box />
// </Canvas>
// </div>
// </div>
// );
// }

function Model(props) {
  const { scene } = useGLTF("/ethereum/scene.gltf");

  // Add a rotation animation to the model using useFrame hook
  useFrame(({ clock }) => {
    scene.rotation.y = Math.sin(clock.getElapsedTime() * 1) * 0.3;
  });

  return <primitive object={scene} {...props} />;
}
const Login = () => {
  return (
    // <div className="flex flex-row bg-[#2f2f2f] h-[100%]">
    <div className="Login_PAGE flex flex-row bg-[#2f2f2f] h-[100%]">
      <div className="3d-model w-[50%]">
        {/* rotate the 3d model */}
        <Canvas
          dpr={[1, 2]}
          camera={{ fav: 45 }}
          style={{
            position: "relative",
            backgroundColor: "black",
            height: "100vh",
          }}
        >
          <PresentationControls
            speed={1.5}
            global
            zoom={0.2}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment={null}>
              <Model scale={0.005} />
            </Stage>
          
          </PresentationControls>
          
        </Canvas>
      </div>
      <div className="form-container w-[50%] flex flex-col justify-center">
        <div className="form-body w-[80%] md:w-[80%] lg:w-[60%] m-auto">
          <div className="form-header">
            <h1 className="text-5xl p-5 font-bold text-white">Sign In</h1>
          </div>
          <div className="form-input">
            <input
              type="text"
              className="email m-5 "
              placeholder="Email"
              required
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "10px",
                border: "none",
                outline: "none",
                paddingLeft: "20px",
                fontSize: "20px",
                color: "white",
                backgroundColor: "#454343",
              }}
            />
            <input
              type="password"
              className="password m-5"
              placeholder="Password"
              required
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "10px",
                border: "none",
                outline: "none",
                paddingLeft: "20px",
                fontSize: "20px",
                color: "white",
                backgroundColor: "#454343",
              }}
            />
            
          </div>
          <div className="form-button">
            <button
              className="login-button m-5"
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "10px",
                border: "none",
                outline: "none",
                fontSize: "20px",
                color: "white",
                backgroundColor: "#0CB1CA",
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
