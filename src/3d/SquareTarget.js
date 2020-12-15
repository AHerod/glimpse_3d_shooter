import * as THREE from 'three'
import React from 'react'

const hotpink = new THREE.Color('hotpink')
const crossMaterial = new THREE.MeshBasicMaterial({ color: hotpink, fog: false })

export default function SquareTarget() {
  return (
    <group name="squareTarget">
      <group  position={[0, 0, -300]} name="cross">
        <mesh renderOrder={1000} material={crossMaterial}>
          <boxBufferGeometry attach="geometry" args={[20, 2, 2]} />
        </mesh>
        <mesh renderOrder={1000} material={crossMaterial}>
          <boxBufferGeometry attach="geometry" args={[2, 20, 2]} />
        </mesh>
      </group>

      <group position={[0, 0, -300]} name="target">
        <mesh position={[0, 20, 0]} renderOrder={1000} material={crossMaterial}>
          <boxBufferGeometry attach="geometry" args={[40, 2, 2]} />
        </mesh>
        <mesh position={[0, -20, 0]} renderOrder={1000} material={crossMaterial}>
          <boxBufferGeometry attach="geometry" args={[40, 2, 2]} />
        </mesh>
        <mesh position={[20, 0, 0]} renderOrder={1000} material={crossMaterial}>
          <boxBufferGeometry attach="geometry" args={[2, 40, 2]} />
        </mesh>
        <mesh position={[-20, 0, 0]} renderOrder={1000} material={crossMaterial}>
          <boxBufferGeometry attach="geometry" args={[2, 40, 2]} />
        </mesh>
      </group>
    </group>

  )
}
