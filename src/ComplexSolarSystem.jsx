import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Sun from './Sun'
import Earth from './Earth'

const ComplexSolarSystem = () => {
  const sunRef = useRef()
  const planetsRef = useRef([])

  const speeds = [0.47, 0.35, 0.29, 0.24, 0.13, 0.09, 0.07, 0.06]
  const distances = [2.5, 4, 6, 8, 12, 16, 20, 24]

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()

    planetsRef.current.forEach((planetRef, index) => {
      planetRef.rotation.y = elapsedTime * speeds[index]

      // Use the same equation for all planets
      const angle = elapsedTime * speeds[index]
      planetRef.position.x = Math.cos(angle) * distances[index]
      planetRef.position.z = Math.sin(angle) * distances[index]
    })
  })

  return (
    <>
      {/* Sun */}
      {/* <Sun /> */}

      {/* Mercury */}

      <mesh ref={(ref) => (planetsRef.current[0] = ref)}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial emissive={'#ff9f00'} />
      </mesh>

      {/* Venus */}
      <mesh ref={(ref) => (planetsRef.current[1] = ref)}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial emissive={'#ffdab9'} />
      </mesh>

      {/* Earth */}
      <Earth
        position={[0, 0, 8]}
        ref={(ref) => (planetsRef.current[2] = ref)}
      />

      {/* Mars */}
      <mesh ref={(ref) => (planetsRef.current[3] = ref)}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial emissive={'#ff2400'} />
      </mesh>

      {/* Jupiter */}
      <mesh ref={(ref) => (planetsRef.current[4] = ref)}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial emissive={'#bcaea6'} />
      </mesh>

      {/* Saturn */}
      <mesh ref={(ref) => (planetsRef.current[5] = ref)}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial emissive={'#b5a642'} />
      </mesh>

      {/* Uranus */}
      <mesh ref={(ref) => (planetsRef.current[6] = ref)}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial emissive={'#4ae0e4'} />
      </mesh>

      {/* Neptune */}
      <mesh ref={(ref) => (planetsRef.current[7] = ref)}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial emissive={'#375be3'} />
      </mesh>
    </>
  )
}

export default ComplexSolarSystem
