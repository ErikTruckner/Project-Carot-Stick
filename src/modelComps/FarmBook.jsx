import { useGLTF, useAnimations, useCamera } from '@react-three/drei'

const FarmBook = () => {
  const model = useGLTF('./farmBook/farmBook.gltf')
  return (
    <mesh>
      {' '}
      <primitive object={model.scene} scale={0.5} />{' '}
    </mesh>
  )
}

export default FarmBook
