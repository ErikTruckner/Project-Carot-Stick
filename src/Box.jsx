import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'

function Box({ position, color }) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  const { camera } = useThree()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  const [cameraPosition, setCameraPosition] = useState(
    new THREE.Vector3(0, 0, 9)
  )

  const [cameraTarget, setCameraTarget] = useState(new THREE.Vector3(0, 0, 0))
  //
  const [cameraMoved, setCameraMoved] = useState(false)

  const toggleCameraMoved = () => {
    setCameraMoved((prevCameraMoved) => !prevCameraMoved)
  }

  //

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta
    //
    TWEEN.update()

    const cameraTargetPosition = mesh.current.position
    const cameraTargetPositionOffset = new THREE.Vector3(
      cameraTargetPosition.x + 10,
      cameraTargetPosition.y + 2,
      cameraTargetPosition.z + 5
    )

    if (cameraMoved) {
      new TWEEN.Tween(cameraPosition)
        .to(cameraTargetPositionOffset, 1000)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(() => {
          setCameraPosition(cameraPosition)
        })
        .start()
      //
      // Create a new tween for cameraTarget lookAt
      new TWEEN.Tween(cameraTarget)
        .to(cameraTargetPosition, 1000)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(() => {
          setCameraTarget(cameraTarget)
        })
        .start()
    } else {
      const originalCameraLookAt = new THREE.Vector3(0, 0, 0)
      const originalCameraPosition = new THREE.Vector3(0, 0, 9)

      new TWEEN.Tween(cameraPosition)
        .to(originalCameraPosition, 1000)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(() => {
          setCameraPosition(cameraPosition)
        })
        .start()

      // Create a new tween for cameraTarget
      new TWEEN.Tween(cameraTarget)
        .to(originalCameraLookAt, 1000)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(() => {
          setCameraTarget(cameraTarget)
        })
        .start()
    }
    camera.position.copy(cameraPosition)
    camera.lookAt(cameraTarget)
    camera.updateProjectionMatrix()
  })

  // console.log(mesh)

  //left - orange box : uuid: 'a571f32c-f7b0-4089-a694-2696b20729c6'

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      // Add the uuid property
      position={position}
      ref={mesh}
      onClick={toggleCameraMoved}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={color} />
    </mesh>
  )
}

export default Box
