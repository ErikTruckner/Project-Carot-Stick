import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Ball({ position, color }) {
  // This reference will give us direct access to the mesh
  const meshOB = useRef()

  const { camera } = useThree()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  const [cameraPosition, setCameraPosition] = useState(
    new THREE.Vector3(0, 0, 9)
  )

  const [cameraTarget, setCameraTarget] = useState(new THREE.Vector3(0, 0, 0))

  const [cameraMoved, setCameraMoved] = useState(false)

  const toggleCameraMoved = () => {
    setCameraMoved((prevCameraMoved) => !prevCameraMoved)
  }

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    meshOB.current.rotation.x += delta

    const originalCameraLookAt = new THREE.Vector3(0, 0, 0)

    if (cameraMoved) {
      camera.lookAt(meshOB.current.position)
    } else {
      camera.lookAt(originalCameraLookAt)
    }
  })

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      position={position}
      ref={meshOB}
      scale={active ? 1.5 : 1}
      onClick={toggleCameraMoved}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <sphereGeometry args={[1, 5, 1]} />
      <meshPhongMaterial color={color} />
    </mesh>
  )
}

export default Ball
