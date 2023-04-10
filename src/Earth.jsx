import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

const Earth = ({ position }) => {
  const earthRef = useRef()

  const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap] =
    useTexture([
      '/assets/earth_day.jpg',
      '/assets/earth_normal.jpg',
      '/assets/earth_specular.jpg',
      '/assets/earth_displacement.jpg',
    ])

  useFrame(() => {
    earthRef.current.rotation.y += 0.002
  })

  return (
    <mesh position={position} ref={earthRef}>
      <sphereGeometry args={[0.6, 64, 64]} />
      <meshPhongMaterial
        map={earthTexture}
        normalMap={earthNormalMap}
        specularMap={earthSpecularMap}
        displacementMap={earthDisplacementMap}
        displacementScale={0.1}
      />
    </mesh>
  )
}

export default Earth
