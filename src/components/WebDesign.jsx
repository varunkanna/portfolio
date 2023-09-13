import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
// import Chair from "./Chair";
import Mac from "./Mac";
import { styled } from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
`
function WebDesign() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 1]} />
        <Stage environment="city" intensity={0.6}>
          {/* <Chair /> */}
          <Mac />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and ensuring your product is a market success.
      </Desc>
    </>
  );
}

export default WebDesign;
