import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from 'three'
import * as THREE from 'three'

const CamAni = () => {
  const { camera } = useThree()

  const gltf = useGLTF('./camAni/cameraAniglb.gltf')

  useEffect(() => {
    const gltfCamera = gltf.cameras[0]

    camera.position.copy(gltfCamera?.position ?? camera.position)
    camera.rotation.copy(gltfCamera?.rotation ?? camera.rotation)
    camera.updateProjectionMatrix()

    gltf.animations.forEach((animation) => {
      const mixer = new THREE.AnimationMixer(camera)
      const action = mixer.clipAction(animation)
      action.play()
    })
  }, [camera, gltf])

  useFrame(() => {
    camera.updateMatrixWorld() // Ensure the camera's world matrix is updated
  })

  return <primitive object={gltf.scene} scale={0.5} />
}

export default CamAni
