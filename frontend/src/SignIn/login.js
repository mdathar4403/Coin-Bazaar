
import "./signup.css";


import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

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
      <div className="a3d-model w-[50%]">
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
          <div style={{ textAlign: "center" ,color:"white"}}>
            dont have an account{" "}
            <a href="/signup">
              <strong style={{color:"#0CB1CA"}}>Sign up here</strong>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
