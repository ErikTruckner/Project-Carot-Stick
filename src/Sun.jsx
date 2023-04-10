import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

const Sun = (props) => {
  const sunRef = useRef()

  const sunTexture = useTexture('/public/sun.jpg')

  useFrame(() => {
    sunRef.current.rotation.y += 0.002
  })

  return (
    <mesh {...props} ref={sunRef}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshBasicMaterial map={sunTexture} />
    </mesh>
  )
}

export default Sun
