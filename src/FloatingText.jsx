import React, { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Center, Text3D } from '@react-three/drei'

const FloatingText = () => {
  const meshRef = useRef()
  const [text, setText] = useState('HELLO R3F')

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    meshRef.current.position.y = Math.sin(t) * 0.2
    meshRef.current.position.x = Math.sin(t) * 0.5
    meshRef.current.position.z = Math.sin(t) * 0.5
  })

  const handleClick = () => {
    setText((prevText) =>
      prevText === 'HELLO R3F' ? 'HELLO WORLD' : 'HELLO R3F'
    )
  }

  return (
    <>
      {/* ... */}
      <Center>
        <Text3D
          ref={meshRef}
          font='\fonts\Merriweather_Regular.json'
          onClick={handleClick}>
          {text}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  )
}

export default FloatingText
