import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shoe from "./Shoe";
import { styled } from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  bottom: 100px;
  right: 100px;
`;
function ProductDesign() {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Shoe />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc>
    </>
  );
}

export default ProductDesign;
