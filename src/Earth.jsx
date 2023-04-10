import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Earth = () => {
  const mesh = useRef()
  const textureLoader = new THREE.TextureLoader()
  const normalMap = textureLoader.load(
    'https://raw.githubusercontent.com/jeremyvaught/planet-earth/master/src/assets/textures/normalmap.jpg'
  )
  const earthMap = textureLoader.load(
    'https://raw.githubusercontent.com/jeremyvaught/planet-earth/master/src/assets/textures/earth.jpg'
  )
  const specularMap = textureLoader.load(
    'https://raw.githubusercontent.com/jeremyvaught/planet-earth/master/src/assets/textures/specularmap.jpg'
  )

  const loader = new GLTFLoader()
  loader.load(
    'https://raw.githubusercontent.com/jeremyvaught/planet-earth/master/src/assets/models/earth/scene.gltf',
    (gltf) => {
      mesh.current.geometry = gltf.scene.children[0].geometry
    }
  )

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.001
    }
  })

  return (
    <mesh ref={mesh}>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        map={earthMap}
        normalMap={normalMap}
        normalScale={new THREE.Vector2(0.7, 0.7)}
        specularMap={specularMap}
        metalness={0.1}
        roughness={0.5}
      />
    </mesh>
  )
}

export default Earth
