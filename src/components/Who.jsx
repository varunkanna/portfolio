import React,{ Suspense } from 'react'
import { styled } from 'styled-components';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
   height:100vh;
   scroll-snap-align: center;
   display:flex;
   justify-content: center;
   align-items:center;
 `
 const Container = styled.div`
   height:100vh;
   scroll-snap-align: center;
   width: 1400px;
   display:flex;
   justify-content: space-between;
 `
 const Left = styled.div`
    flex:1;
 `
 const Right = styled.div`
    flex:1;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-direction: column; 
    // background-color: yellow;
 `
 const Title = styled.h1`
    font-size: 74px;
    margin:0px !important;
  `
 const WhatWeDo = styled.div`
    display:flex;
    align-items: center;
    gap: 10px; 
 `
 const Line = styled.img`
    height: 5px;
 `
 const Subtitle = styled.h2`
    color: #da4ea2;
    margin:0px;
  `
 const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
    margin:0px;
  `
 const Button = styled.button`
    width: 120px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
  `

function Who() {
  return (
    <Section>
      <Container>
        <Left>
          {/* 3D Moon */}
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>

        <Right>
          <Title>Think Outside the square space</Title>
          <WhatWeDo>
            <Line src='./img/line.png' />
            <Subtitle>What We Are</Subtitle>
          </WhatWeDo>
          <Desc>a creative group of desingers and developers with a passion for the arts</Desc>
          <Button>see our works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who