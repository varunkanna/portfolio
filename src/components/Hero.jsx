import React, { Suspense } from "react";
import { styled } from "styled-components";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 74px;
  margin: 0px !important;
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
  margin: 0px;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  margin: 0px;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  // background-color: yellow;
`;
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  margin-top:60px;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>
            we enjoy creating delightfull, human-centerd digital experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left>

        <Right>
          {/* 3D Moon */}
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.5}>
              <MeshDistortMaterial
                color="#61278e"
                attach={"material"}
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src='./img/moon.png' />
        </Right>
      </Container>
    </Section>
  );
}

export default Hero;
