import { useState } from 'react'
import { Sphere, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import CameraPositionLogger from './hooks/CameraPositionLogger'
import Box from './Box'
import Ball from './Ball'

import { useRef } from 'react'

export default function App({ event }) {
  //

  //
  return (
    <Canvas
      camera={{
        fov: 75,
        near: 1,
        far: 1000,
        position: [0, 0, 9],
      }}>
      <color attach='background' args={['black']} />
      {/* <OrbitControls /> */}
      <CameraPositionLogger event='mousedown' />
      <Stars />
      <spotLight intensity={1} position={(0, 0, 9)} />
      <ambientLight intensity={0.1} />
      <Box position={[9, 0, 0]} color='green' />
    </Canvas>
  )
}
