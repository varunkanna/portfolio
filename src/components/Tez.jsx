import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { styled } from 'styled-components'
// import { AmbientLight, DirectionalLight } from 'three'

const Container = styled.div`
   height:100vh;
   scroll-snap-align: center;
   width: 100%;
 `

function Tez() {
  return (
    <Container>
        <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]} />
            <mesh>
                <boxGeometry args={[1,1,1]} />
                <meshStandardMaterial>
                    <RenderTexture attach="map">
                        <PerspectiveCamera makeDefault position={[0,0,2]} />
                        <color attach="background" args={['pink']} />
                        <Text fontSize={1} color="#555">
                            hello
                        </Text>
                    </RenderTexture>
                </meshStandardMaterial>
            </mesh>
        </Canvas>
    </Container>
  )
}

export default Tez