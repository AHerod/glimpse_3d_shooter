import * as THREE from 'three'
import React, { Suspense, useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { Canvas } from 'react-three-fiber'
import { Text, OrbitControls } from 'drei'
// Components & Effects
import Particles from './3d/Particles'
import { Link } from 'react-router-dom'
import RingTarget from './3d/RingTarget'
import SquareTarget from './3d/SquareTarget'
import { Icosahedron } from '@react-three/drei'
import ViewIcon from './ViewIcon'
import TextMesh from './TextMesh'
import useStore from './store'

function Garage() {
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 3, y - window.innerHeight / 3]), [])
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  const laserMaterial = new THREE.MeshStandardMaterial({ color: '#5d0186', emissive: '#5d0186', roughness: '1' })
  const [hiddenShipTwo, setHiddenTargetTwo] = useState(true)
  const actions = useStore(state => state.actions)

  return (
    <>
      <ViewIcon/>
      <Link to="/game" className={'btn-next'}>NEXT</Link>
      <Link to="/garage" className={'btn-next btn-back'}>BACK</Link>
        <Canvas
        pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
        camera={{ position: [0, 0, 12], fov: 80 }}
        gl={{ antialias: false }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#000'))
        }} onMouseMove={onMouseMove}>
        <fog attach="fog" args={['#070710', 100, 700]} />
        <pointLight position={[0, 5, 2]} />

        <group>
          <pointLight position={[0, 5, 10]} intensity={.8} />
          <TextMesh color={'#5d0186'} position={[0, 6, 0]} size={1.6} letter="SELECT TARGET TYPE"/>
        </group>
        <Suspense fallback={null}>
          <mesh onClick={() => setHiddenTargetTwo(true)} onPointerOver={(event) => {
            actions.useTargetOne(); setHiddenTargetTwo(true)
          }}  position={[-80, 0, 200]}>
            <RingTarget />
          </mesh>
          <mesh onClick={() => setHiddenTargetTwo(false)} onPointerOver={(event) => {
            actions.useTargetTwo(); setHiddenTargetTwo(false)
          }} position={[80, 0, 200]}>
            <SquareTarget />
          </mesh>
          <mesh position={hiddenShipTwo ? [-16, -10, -10] :  [16, -10, -10]}  scale={[2,2,2]}>
            <meshStandardMaterial attach="material" color="#5d0186" />
            <Icosahedron material={laserMaterial} />
          </mesh>
        </Suspense>
        <Particles count={isMobile ? 300 : 5000} mouse={mouse} color={'#5d0186'} />
        <OrbitControls />
      </Canvas>
    </>
  )
}


export default Garage
