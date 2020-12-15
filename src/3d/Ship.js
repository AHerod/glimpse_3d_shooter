import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import useStore from '../store'
import Eye from './Eye'
import { useGLTF } from '@react-three/drei/useGLTF'
import RingTarget from './RingTarget'
import SquareTarget from './SquareTarget'

const geometry = new THREE.BoxBufferGeometry(1, 1, 40)
const lightgreen = new THREE.Color('lightgreen')
const hotpink = new THREE.Color('hotpink')
const laserMaterial = new THREE.MeshBasicMaterial({ color: lightgreen })
const crossMaterial = new THREE.MeshBasicMaterial({ color: hotpink, fog: false })
const position = new THREE.Vector3()
const direction = new THREE.Vector3()

export default function Ship() {
  const gltf = useLoader(GLTFLoader, '/ship.gltf')
  const mutation = useStore(state => state.mutation)
  const { clock, mouse, ray } = mutation
  const lasers = useStore(state => state.lasers)
  const main = useRef()
  const laserGroup = useRef()
  const laserLight = useRef()
  const { nodes, materials } = useGLTF('/newship.gltf')
  const exhaust = useRef()
  const cross = useRef()
  const target = useRef()

  useFrame(() => {
    main.current.position.z = Math.sin(clock.getElapsedTime() * 40) * Math.PI * 0.1
    main.current.rotation.z += (mouse.x / 500 - main.current.rotation.z) * 0.1
    main.current.rotation.x += (-mouse.y / 1200 - main.current.rotation.x) * 0.1
    main.current.rotation.y += (-mouse.x / 1200 - main.current.rotation.y) * 0.1
    main.current.position.x += (mouse.x / 10 - main.current.position.x) * 0.1
    main.current.position.y += (25 + -mouse.y / 10 - main.current.position.y) * 0.1
    // exhaust.current.scale.x = 1 + Math.sin(clock.getElapsedTime() * 200)
    // exhaust.current.scale.y = 1 + Math.sin(clock.getElapsedTime() * 200)
    for (let i = 0; i < lasers.length; i++) {
      const group = laserGroup.current.children[i]
      group.position.z -= 20
    }
    laserLight.current.intensity += ((lasers.length && Date.now() - lasers[lasers.length - 1] < 100 ? 20 : 0) - laserLight.current.intensity) * 0.3

    // Get ships orientation and save it to the stores ray
    main.current.getWorldPosition(position)
    main.current.getWorldDirection(direction)
    ray.origin.copy(position)
    ray.direction.copy(direction.negate())

    // ...
    // crossMaterial.color = mutation.hits ? lightgreen : hotpink
    // cross.current.visible = !mutation.hits
    // target.current.visible = !!mutation.hits
  })

  return (
    <group ref={main}>
      <group scale={[3.5, 3.5, 3.5]}>

        // target
<SquareTarget />
{/*        <RingTarget/>*/}

        // shooting laser
        <pointLight ref={laserLight} position={[0, 0, -20]} distance={100} intensity={0} color="lightgreen" />
        <group ref={laserGroup}>
          {lasers.map((t, i) => (
            <group key={i}>
              <mesh position={[-2.8, 0, -0.8]} geometry={geometry} material={laserMaterial} />
              <mesh position={[2.8, 0, -0.8]} geometry={geometry} material={laserMaterial} />
            </group>
          ))}
        </group>

        // model ship1
        {/*<group rotation={[Math.PI / 2, Math.PI, 0]}>*/}
        {/*  <mesh name="Renault_(S,_T1)_0">*/}
        {/*    <bufferGeometry attach="geometry" {...gltf.__$[5].geometry} />*/}
        {/*    <meshStandardMaterial attach="material" color="#070707" />*/}
        {/*  </mesh>*/}
        {/*  <mesh name="Renault_(S,_T1)_1">*/}
        {/*    <bufferGeometry attach="geometry" {...gltf.__$[6].geometry} />*/}
        {/*    <meshStandardMaterial attach="material" color="black" />*/}
        {/*  </mesh>*/}
        {/*  <mesh name="Renault_(S,_T1)_2">*/}
        {/*    <bufferGeometry attach="geometry" {...gltf.__$[7].geometry} />*/}
        {/*    <meshStandardMaterial attach="material" color="#070707" />*/}
        {/*  </mesh>*/}
        {/*  <mesh name="Renault_(S,_T1)_3">*/}
        {/*    <bufferGeometry attach="geometry" {...gltf.__$[8].geometry} />*/}
        {/*    <meshBasicMaterial attach="material" color="lightblue" />*/}
        {/*  </mesh>*/}
        {/*  <mesh name="Renault_(S,_T1)_4">*/}
        {/*    <bufferGeometry attach="geometry" {...gltf.__$[9].geometry} />*/}
        {/*    <meshBasicMaterial attach="material" color="white" />*/}
        {/*  </mesh>*/}
        {/*  <mesh name="Renault_(S,_T1)_5">*/}
        {/*    <bufferGeometry attach="geometry" {...gltf.__$[10].geometry} />*/}
        {/*    <meshBasicMaterial attach="material" color="teal" />*/}
        {/*  </mesh>*/}
        {/*</group>*/}

        //model ship2
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
              <mesh material={materials['Material.001']} geometry={nodes.mesh_23.geometry} />
            </group>
            <group position={[0, -0.18, -0.85]} rotation={[Math.PI / 2, 0, 0]} scale={[0.18, 1.57, 0.18]}>
              <mesh material={materials['Material.003']} geometry={nodes.mesh_24.geometry} />
            </group>
            <group position={[0, -0.46, 1.57]} scale={[1.61, 0.55, 1.61]}>
              <mesh material={materials['Material.007']} geometry={nodes.mesh_25.geometry} />
            </group>
          </group>
        </group>

      </group>

      // fuel fire
      <mesh ref={exhaust} scale={[.4, .4, 5]} position={[3.5, -1, 18]}>
        <dodecahedronBufferGeometry attach="geometry" args={[1.5, 2]} />
        <meshBasicMaterial attach="material" color="teal" />
      </mesh>
      <mesh ref={exhaust} scale={[.4, .4, 5]} position={[-3.5, -1, 18]}>
        <dodecahedronBufferGeometry attach="geometry" args={[1.5, 2]} />
        <meshBasicMaterial attach="material" color="teal" />
      </mesh>
    </group>
  )
}
