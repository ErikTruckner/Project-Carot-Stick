import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

import FloatingText from './FloatingText'
import Cube from './Cube'
import Ship from './Ship'
// import FarmBook from './modelComps/FarmBook'
import ComplexSolarSystem from './ComplexSolarSystem'

export default function App() {
  console.log(Canvas)

  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 25] }}>
      <color attach='background' args={['black']} />
      <Stars />
      <directionalLight intensity={2} position={[0, 10, 10]} />
      <ComplexSolarSystem />

      <OrbitControls />
    </Canvas>
  )
}
