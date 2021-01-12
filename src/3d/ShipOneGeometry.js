import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function ShipOneGeometry() {
  const gltf = useLoader(GLTFLoader, '/ship.gltf')

  return (
    <group rotation={[Math.PI / 2, Math.PI, 0]}>
      <mesh name="Renault_(S,_T1)_0">
        <bufferGeometry attach="geometry" {...gltf.__$[5].geometry} />
        <meshStandardMaterial attach="material" color="#070707" />
      </mesh>
      <mesh name="Renault_(S,_T1)_1">
        <bufferGeometry attach="geometry" {...gltf.__$[6].geometry} />
        <meshLambertMaterial attach="material" emissive={'#C0C0C0'} emissiveIntensity={'.1'} />
      </mesh>
      <mesh name="Renault_(S,_T1)_2">
        <bufferGeometry attach="geometry" {...gltf.__$[7].geometry} />
        <meshStandardMaterial attach="material" color="#070707" />
      </mesh>
      <mesh name="Renault_(S,_T1)_3">
        <bufferGeometry attach="geometry" {...gltf.__$[8].geometry} />
        <meshBasicMaterial attach="material" color="lightblue" />
      </mesh>
      <mesh name="Renault_(S,_T1)_4">
        <bufferGeometry attach="geometry" {...gltf.__$[9].geometry} />
        <meshBasicMaterial attach="material" color="white" />
      </mesh>
      <mesh name="Renault_(S,_T1)_5">
        <bufferGeometry attach="geometry" {...gltf.__$[10].geometry} />
        <meshBasicMaterial attach="material" color="teal" />
      </mesh>
    </group>
  )
}
