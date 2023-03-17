import React, { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const Cube = (props) => {
  const meshRef = useRef()
  const [arrowKeyState, setArrowKeyState] = useState({
    moveRight: false,
    moveLeft: false,
    moveForward: false,
    moveBackward: false,
  })

  const speed = 5

  const onKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowRight':
        setArrowKeyState({ ...arrowKeyState, moveRight: true })
        break
      case 'ArrowLeft':
        setArrowKeyState({ ...arrowKeyState, moveLeft: true })
        break
      case 'ArrowUp':
        setArrowKeyState({ ...arrowKeyState, moveForward: true })
        break
      case 'ArrowDown':
        setArrowKeyState({ ...arrowKeyState, moveBackward: true })
        break
      default:
        break
    }
  }

  const onKeyUp = (e) => {
    switch (e.key) {
      case 'ArrowRight':
        setArrowKeyState({ ...arrowKeyState, moveRight: false })
        break
      case 'ArrowLeft':
        setArrowKeyState({ ...arrowKeyState, moveLeft: false })
        break
      case 'ArrowUp':
        setArrowKeyState({ ...arrowKeyState, moveForward: false })
        break
      case 'ArrowDown':
        setArrowKeyState({ ...arrowKeyState, moveBackward: false })
        break
      default:
        break
    }
  }

  useFrame(() => {
    const direction = new THREE.Vector3()
    const rotation = new THREE.Euler(0, 0, 0, 'XYZ')

    if (arrowKeyState.moveRight) {
      direction.x += 1
    }
    if (arrowKeyState.moveLeft) {
      direction.x -= 1
    }
    if (arrowKeyState.moveForward) {
      direction.z -= 1
    }
    if (arrowKeyState.moveBackward) {
      direction.z += 1
    }

    direction.normalize()
    rotation.setFromQuaternion(meshRef.current.quaternion)
    direction.applyEuler(rotation)
    meshRef.current.position.addScaledVector(direction, speed * 0.01)
  })

  return (
    <mesh
      {...props}
      ref={meshRef}
      onKeyDown={(e) => onKeyDown(e)}
      onKeyUp={(e) => onKeyUp(e)}
      tabIndex={0}>
      <boxGeometry />
      <meshStandardMaterial color={'#f3f3f3'} />
    </mesh>
  )
}

export default Cube
