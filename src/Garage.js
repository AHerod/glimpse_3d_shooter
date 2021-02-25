import * as THREE from 'three'
import React, { Suspense, useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { Canvas } from 'react-three-fiber'
import { Text, OrbitControls } from 'drei'
// Components & Effects
import Particles from './3d/Particles'
import { Link } from 'react-router-dom'
import ShipOne from './3d/ShipOneGeometry'
import ShipTwo from './3d/ShipTwoGeometry'
import { Icosahedron } from '@react-three/drei'
import ViewIcon from './ViewIcon'
import TextMesh from './TextMesh'
import useStore from './store'

function Garage() {
  const [hovered] = useState(false)
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 3, y - window.innerHeight / 3]), [])
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  const laserMaterial = new THREE.MeshStandardMaterial({ color: '#5d0186', emissive: '#5d0186', roughness: '1' })
  const [hiddenShipTwo, setHiddenShipTwo] = useState(true)
  let shipOne = useStore(state => state.shipOne)
  const actions = useStore(state => state.actions)

  return (
    <>
      <ViewIcon />
      <Link to="/target" className={'btn'}>NEXT</Link>
      <Link to="/theme" className={'btn btn-back'}>BACK</Link>
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
          <pointLight position={[0, 5, 10]} intensity={.2} />
          <TextMesh color={'#5d0186'} position={[0, 5, 0]} size={1.6} letter="SELECT YOUR SHIP" />
        </group>
        <group>
        </group>
        <Suspense fallback={null}>
          <mesh onClick={() => setHiddenShipTwo(true)} onPointerOver={() => {
            actions.useShipOne(); setHiddenShipTwo(true)
          }}
                rotation={[0, -140, 0]} position={[-6, 0, 0]}
                scale={hiddenShipTwo ? [0.8, 0.8, 0.8] : [0.6, 0.6, 0.6]}>
            <ShipOne scale={[0.7,0.7,0.7]} />
          </mesh>
          <mesh onClick={() => setHiddenShipTwo(false)} onPointerOver={() => {
            actions.useShipTwo(); setHiddenShipTwo(false)
          }}
                rotation={[0, 140, 0]} position={[8, 0, 0]}
                scale={hiddenShipTwo ? [0.6, 0.6, 0.6] : [0.8, 0.8, 0.8]}>
            <ShipTwo />
          </mesh>
          <mesh position={hiddenShipTwo ? [-8, -4, 0] : [8, -4, 0]}>
            <meshStandardMaterial attach="material" color="#5d0186" />
            <Icosahedron material={laserMaterial} />
          </mesh>
        </Suspense>
        <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -12, 0]}>
          <planeBufferGeometry attach="geometry" args={[500, 500]} />
          <meshStandardMaterial attach="material" color="#5d0186" />
        </mesh>
        <Particles count={isMobile ? 300 : 5000} mouse={mouse} color={'#5d0186'} />
        <OrbitControls />
      </Canvas>
    </>
  )
}


export default Garage
