import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import useStore from '../store'
import Eye from './Eye'
import { useGLTFLoader } from '@react-three/drei/loaders/useGLTFLoader'
import RingTarget from './RingTarget'
import SquareTarget from './SquareTarget'
import ShipOneGeometry from './ShipOneGeometry'
import ShipTwoGeometry from './ShipTwoGeometry'

const geometry = new THREE.BoxBufferGeometry(1, 1, 40)
const lightgreen = new THREE.Color('lightgreen')
const hotpink = new THREE.Color('hotpink')
const laserMaterial = new THREE.MeshBasicMaterial({ color: lightgreen })
const crossMaterial = new THREE.MeshBasicMaterial({ color: hotpink, fog: false })
const position = new THREE.Vector3()
const direction = new THREE.Vector3()

export default function Ship({ staticPosition, staticScale }) {
  const mutation = useStore(state => state.mutation)
  const { clock, mouse, ray } = mutation
  const lasers = useStore(state => state.lasers)
  const main = useRef()
  const laserGroup = useRef()
  const laserLight = useRef()
  const exhaust = useRef()
  const cross = useRef()
  const target = useRef()

  //TODO: don't use useFrame in garage

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
 //TODO: END don't use useFrame in garage
  return (
    <group ref={main} position={staticPosition} scale={staticScale}>
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
        <ShipOneGeometry/>
        {/*<ShipTwoGeometry/>*/}

        //model ship2

      </group>

      // fuel fire TODO: don't show in garage
      <mesh ref={exhaust} scale={[.4, .4, 5]} position={[3.5, -1, 18]}>
        <dodecahedronBufferGeometry attach="geometry" args={[1.5, 2]} />
        <meshBasicMaterial attach="material" color="teal" />
      </mesh>
      <mesh ref={exhaust} scale={[.4, .4, 5]} position={[-3.5, -1, 18]}>
        <dodecahedronBufferGeometry attach="geometry" args={[1.5, 2]} />
        <meshBasicMaterial attach="material" color="teal" />
      </mesh>

       //TODO: END don't use useFrame in garage
    </group>
  )
}
