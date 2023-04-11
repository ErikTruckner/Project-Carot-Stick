import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

import FloatingText from './FloatingText'
import Cube from './Cube'
import Ship from './Ship'
// import FarmBook from './modelComps/FarmBook'
// import ComplexSolarSystem from './ComplexSolarSystem'
import Earth from './Earth'
import { Perf } from 'r3f-perf'

export default function App() {
  console.log(Canvas)

  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 3, 3] }}>
      <Perf />
      <color attach='background' args={['black']} />
      <Stars />
      <directionalLight intensity={2} position={[5, 10, 10]} />
      <directionalLight intensity={2} position={[-5, -10, -10]} />
      <directionalLight intensity={2} position={[10, 0, 0]} />
      <directionalLight intensity={2} position={[-10, 0, 0]} />
      <Earth position={[0, 0, 0]} displacementScale={0.1} />
      <OrbitControls />
    </Canvas>
  )
}
