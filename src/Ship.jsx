import React from 'react'

const Ship = (props) => {
  return (
    <group {...props}>
      {/* main body */}
      <mesh position={[0, 0, 0]}>
        <coneBufferGeometry args={[2, 6, 8]} />
        <meshStandardMaterial color={'#c4c4c4'} />
      </mesh>

      {/* cockpit */}
      <mesh position={[0, 1, 1.5]}>
        <sphereBufferGeometry args={[1, 8, 8]} />
        <meshStandardMaterial color={'#1d1d1d'} />
      </mesh>

      {/* wings */}
      <mesh position={[3, 0, 0]}>
        <boxBufferGeometry args={[6, 0.2, 2]} />
        <meshStandardMaterial color={'#c4c4c4'} />
      </mesh>
      <mesh position={[-3, 0, 0]}>
        <boxBufferGeometry args={[6, 0.2, 2]} />
        <meshStandardMaterial color={'#c4c4c4'} />
      </mesh>

      {/* engines */}
      <mesh position={[0, -3, 0]}>
        <cylinderBufferGeometry args={[1, 1, 2, 8]} />
        <meshStandardMaterial color={'#d8d8d8'} />
      </mesh>
      <mesh position={[0, -3, -2.5]}>
        <sphereBufferGeometry args={[1, 8, 8]} />
        <meshStandardMaterial color={'#d8d8d8'} />
      </mesh>
      <mesh position={[0, -3, 2.5]}>
        <sphereBufferGeometry args={[1, 8, 8]} />
        <meshStandardMaterial color={'#d8d8d8'} />
      </mesh>
    </group>
  )
}

export default Ship
