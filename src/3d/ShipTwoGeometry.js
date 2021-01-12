import * as THREE from 'three'
import React from 'react'
import { useGLTFLoader } from '@react-three/drei/loaders/useGLTFLoader'


export default function ShipTwoGeometry() {
  const { nodes, materials } = useGLTFLoader('/newship.gltf')

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group position={[0, 0.06, -0.92]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.014']} geometry={nodes.mesh_0.geometry} />
        </group>
        <group position={[3.36, -0.02, 0.55]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.018']} geometry={nodes.mesh_1.geometry} />
        </group>
        <group position={[-3.36, -0.02, 0.55]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.019']} geometry={nodes.mesh_2.geometry} />
        </group>
        <group position={[3.36, -0.4, 0.55]} rotation={[-3.14, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.025']} geometry={nodes.mesh_3.geometry} />
        </group>
        <group position={[-3.36, -0.4, 0.55]} rotation={[-3.14, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.026']} geometry={nodes.mesh_4.geometry} />
        </group>
        <group position={[0, 0.06, 1.44]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.008']} geometry={nodes.mesh_5.geometry} />
        </group>
        <group position={[3.38, -0.04, 2.48]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.015']} geometry={nodes.mesh_6.geometry} />
        </group>
        <group position={[-3.38, -0.04, 2.48]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.017']} geometry={nodes.mesh_7.geometry} />
        </group>
        <group position={[3.38, -0.39, 2.48]} rotation={[-3.14, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.023']} geometry={nodes.mesh_8.geometry} />
        </group>
        <group position={[-3.38, -0.39, 2.48]} rotation={[-3.14, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.024']} geometry={nodes.mesh_9.geometry} />
        </group>
        <group position={[0, -0.62, 0.67]} rotation={[3.14, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.027']} geometry={nodes.mesh_10.geometry} />
        </group>
        <group position={[0, -0.31, -2.42]} rotation={[-0.23, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.006']} geometry={nodes.mesh_11.geometry} />
        </group>
        <group position={[-1.53, -0.3, -0.94]} rotation={[0, 0, 0.26]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.012']} geometry={nodes.mesh_12.geometry} />
        </group>
        <group position={[1.53, -0.3, -0.94]} rotation={[0, 0, -0.22]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.013']} geometry={nodes.mesh_13.geometry} />
        </group>
        <group position={[0, -0.46, -2.33]} rotation={[3.14, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.020']} geometry={nodes.mesh_14.geometry} />
        </group>
        <group position={[1.4, -0.46, -1.25]} rotation={[3.14, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.021']} geometry={nodes.mesh_15.geometry} />
        </group>
        <group position={[-1.4, -0.46, -1.25]} rotation={[3.14, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <mesh material={materials['Material.022']} geometry={nodes.mesh_16.geometry} />
        </group>
        <group position={[-1.25, -0.26, -1.25]} rotation={[0, 0, 0.4]} scale={[0.03, 0.03, 0.03]}>
          <mesh material={materials['Material.004']} geometry={nodes.mesh_17.geometry} />
        </group>
        <group position={[1.27, -0.46, -1.25]} rotation={[0, 0, -2.77]} scale={[0.03, 0.03, 0.03]}>
          <mesh material={materials.disrball} geometry={nodes.mesh_18.geometry} />
        </group>
        <group position={[0, -0.26, -2.17]} rotation={[-0.63, 0, 0]} scale={[0.03, 0.03, 0.03]}>
          <mesh material={materials['Material.002']} geometry={nodes.mesh_19.geometry} />
        </group>
        <group position={[1.25, -0.26, -1.25]} rotation={[0, 0, -0.4]} scale={[0.03, 0.03, 0.03]}>
          <mesh material={materials.disrball} geometry={nodes.mesh_20.geometry} />
        </group>
        <group position={[0, -0.46, -2.18]} rotation={[-2.19, 0, 0]} scale={[0.03, 0.03, 0.03]}>
          <mesh material={materials.disrball} geometry={nodes.mesh_21.geometry} />
        </group>
        <group position={[-1.27, -0.46, -1.25]} rotation={[0, 0, 2.41]} scale={[0.03, 0.03, 0.03]}>
          <mesh material={materials['disrball.001']} geometry={nodes.mesh_22.geometry} />
        </group>
        <group position={[0, -0.28, -0.87]} scale={[1.61, 0.55, 1.61]}>
          <mesh material={materials['Material.001']} geometry={nodes.mesh_23.geometry}/>
        </group>
        <group position={[0, -0.18, -0.85]} rotation={[Math.PI / 2, 0, 0]} scale={[0.18, 1.57, 0.18]}>
          <mesh material={materials['Material.003']} geometry={nodes.mesh_24.geometry}>
            <meshBasicMaterial attach="material" color="teal" />
          </mesh>
        </group>
        <group position={[0, -0.46, 1.57]} scale={[1.61, 0.55, 1.61]}>
          <mesh material={materials['Material.007']} geometry={nodes.mesh_25.geometry} />
        </group>
      </group>
    </group>
  )
}
