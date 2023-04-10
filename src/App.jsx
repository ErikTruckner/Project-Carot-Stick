import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

import FloatingText from './FloatingText'
import Cube from './Cube'
import Ship from './Ship'
// import FarmBook from './modelComps/FarmBook'
import ComplexSolarSystem from './ComplexSolarSystem'
import Earth from './Earth'

export default function App() {
  console.log(Canvas)

  return (
    <Canvas>
      <color attach='background' args={['black']} />
      <Stars />
      <ComplexSolarSystem />

      <OrbitControls />
    </Canvas>
  )
}
