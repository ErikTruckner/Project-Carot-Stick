import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

const Earth = (props) => {
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
    <mesh {...props} ref={earthRef}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshPhongMaterial
        map={earthTexture}
        normalMap={earthNormalMap}
        specularMap={earthSpecularMap}
      />
      <pointLight
        color='#ffffff'
        intensity={1.5}
        distance={20}
        position={[0, 0, 0]}
      />
    </mesh>
  )
}

export default Earth
