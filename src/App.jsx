import { useState } from 'react'
import { Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CameraPositionLogger from './hooks/CameraPositionLogger'
import Box from './Box'
import Ball from './Ball'

import { useRef } from 'react'

export default function App({ event }) {
  //
  const [cameraMoved, setCameraMoved] = useState(false)

  const toggleCameraMoved = () => {
    setCameraMoved((prevCameraMoved) => !prevCameraMoved)
  }
  //
  // Create separate refs for each box
  const orangeBoxRef = useRef()
  const greenBoxRef = useRef()
  //
  return (
    <Canvas
      camera={{
        fov: 75,
        near: 1,
        far: 1000,
        position: [0, 0, 9],
      }}>
      {/* <OrbitControls /> */}
      <CameraPositionLogger event='mousedown' />
      <ambientLight />
      <Box
        position={[-4, 0, 0]}
        color={'orange'}
        cameraMoved={cameraMoved}
        onToggleCameraMoved={toggleCameraMoved}
        boxRef={orangeBoxRef}
      />
      <Box
        position={[9, 0, 0]}
        color={'green'}
        cameraMoved={cameraMoved}
        onToggleCameraMoved={toggleCameraMoved}
        boxRef={greenBoxRef} // Pass the greenBoxRef as a prop
      />
    </Canvas>
  )
}
