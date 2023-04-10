import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import FloatingText from './FloatingText'
import Cube from './Cube'
import Ship from './Ship'
import FarmBook from './modelComps/FarmBook'

export default function App() {
  console.log(Canvas)

  return (
    <Canvas>
      <directionalLight intensity={2} />
      <spotLight position={[0, 10, -5]} />
      <FarmBook />

      <OrbitControls />
    </Canvas>
  )
}
