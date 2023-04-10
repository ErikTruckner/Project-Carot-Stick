import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Sun = (props) => {
  const sunRef = useRef()

  const textureLoader = new TextureLoader()
  const sunTexture = textureLoader.load('/assets/sun.jpg')

  useFrame(() => {
    sunRef.current.rotation.y += 0.002
  })

  return (
    <mesh {...props} ref={sunRef}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshBasicMaterial map={sunTexture} />
      <pointLight
        color='#ffffff'
        intensity={1.5}
        distance={20}
        position={[0, 0, 0]}
      />
    </mesh>
  )
}

export default Sun
