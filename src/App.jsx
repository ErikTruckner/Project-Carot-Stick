import { Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CameraPositionLogger from './hooks/CameraPositionLogger'
import Box from './Box'

export default function App() {
  return (
    <Canvas>
      <CameraPositionLogger />
      <OrbitControls />
      <ambientLight />

      <Box position={[-3.2, 0, 0]} />
      <Box position={[3.2, 0, 0]} />
    </Canvas>
  )
}
