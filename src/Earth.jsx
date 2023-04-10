import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

const Earth = ({ position }) => {
  const earthRef = useRef()

  const [earthTexture, earthNormalMap, earthSpecularMap] = useTexture([
    '/assets/earth_day.jpg',
    '/assets/earth_normal.jpg',
    '/assets/earth_specular.jpg',
  ])

  useFrame(() => {
    earthRef.current.rotation.y += 0.002
  })

  return (
    <mesh position={position} ref={earthRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshPhongMaterial
        map={earthTexture}
        normalMap={earthNormalMap}
        specularMap={earthSpecularMap}
      />
    </mesh>
  )
}

export default Earth
