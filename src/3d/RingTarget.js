import * as THREE from 'three'
import React from 'react'

const ringGeometry = new THREE.RingBufferGeometry(6, 6.5, 64)
const hotpink = new THREE.Color('hotpink')
const crossMaterial = new THREE.MeshBasicMaterial({ color: hotpink, fog: false })

export default function RingTarget() {

  return (
    <group name="ringTarget">
      <mesh renderOrder={1000} position={[20, 0, -300]} material={crossMaterial}>
        <boxBufferGeometry attach="geometry" args={[20, 2, 2]} />
      </mesh>
      <mesh renderOrder={1000} position={[-20, 0, -300]} material={crossMaterial}>
        <boxBufferGeometry attach="geometry" args={[20, 2, 2]} />
      </mesh>
      <mesh renderOrder={1000} position={[0, 20, -300]} material={crossMaterial}>
        <boxBufferGeometry attach="geometry" args={[2, 20, 2]} />
      </mesh>
      <mesh renderOrder={1000} position={[0, -20, -300]} material={crossMaterial}>
        <boxBufferGeometry attach="geometry" args={[2, 20, 2]} />
      </mesh>
      <mesh position={[0, 0, -300]} scale={[3.5, 3.5, 1]} geometry={ringGeometry} renderOrder={1000}
            material={crossMaterial} />
      <mesh position={[0, 0, -300]} scale={[2.4, 2.4, 1]} geometry={ringGeometry} renderOrder={1000}
            material={crossMaterial} />
      <mesh position={[0, 0, -300]} scale={[.5, .5, 2]} geometry={ringGeometry} renderOrder={1000}
            material={crossMaterial} />
    </group>
  )
}
