import * as THREE from 'three'
import React, { Suspense, useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import { Text, Billboard, OrbitControls, RoundedBox, Stars } from 'drei'
// Components & Effects
// import Effects from './Effects'
import Particles from './3d/Particles'
import { Link } from 'react-router-dom'
import RingTarget from './3d/RingTarget'
import SquareTarget from './3d/SquareTarget'
import { Icosahedron } from '@react-three/drei'

function Garage() {
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 3, y - window.innerHeight / 3]), [])
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  const laserMaterial = new THREE.MeshStandardMaterial({ color: '#5d0186', emissive: '#5d0186', roughness: '1' })
  const [hiddenShipTwo, setHiddenTargetTwo] = useState(true)


  return (
    <>
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
          <Text
            color={'#5d0186'}
            position={[0, 8, -5]}
            fontSize={4}
            depthOffset={10}
          >
            SELECT TARGET TYPE
          </Text>
        </group>
        <Suspense fallback={null}>
          <mesh onClick={() => setHiddenTargetTwo(true)} onPointerOver={(event) => setHiddenTargetTwo(true)}  position={[-80, 0, 200]}>
            <RingTarget />
          </mesh>
          <mesh onClick={() => setHiddenTargetTwo(false)} onPointerOver={(event) => setHiddenTargetTwo(false)} position={[80, 0, 200]}>
            <SquareTarget />
          </mesh>
          <mesh position={hiddenShipTwo ? [-16, -10, -10] :  [16, -10, -10]}  scale={[2,2,2]}>
            <meshStandardMaterial attach="material" color="#5d0186" />
            <Icosahedron material={laserMaterial} />
          </mesh>
        </Suspense>
        {/*<mesh receiveShadow rotation={[5, 0, 0]} position={[0, -70, 0]}>*/}
        {/*  <planeBufferGeometry attach="geometry" args={[10000, 10000]} />*/}
        {/*  <meshStandardMaterial attach="material" color="#5d0186" />*/}
        {/*</mesh>*/}
        <Particles count={isMobile ? 300 : 5000} mouse={mouse} color={'#5d0186'} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </>
  )
}


export default Garage
