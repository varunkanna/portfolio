import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
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
`;
function Development() {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Atom />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc>
    </>
  );
}

export default Development;
