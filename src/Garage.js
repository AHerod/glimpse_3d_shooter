import * as THREE from 'three'
import React, { Suspense, useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import { Text, Billboard, OrbitControls, RoundedBox, Stars } from 'drei'
// Components & Effects
// import Effects from './Effects'
import Particles from './3d/Particles'
import { Link } from 'react-router-dom'
import ShipOne from './3d/ShipOneGeometry'
import ShipTwo from './3d/ShipTwoGeometry'
import SkyBox from './3d/SkyBox'
import Rig from './3d/Rig'
import { Icosahedron } from '@react-three/drei'

function Garage() {
  const [hovered] = useState(false)
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  const laserMaterial = new THREE.MeshStandardMaterial({ color: '#5d0186', emissive: '#5d0186', roughness: '1' })

  useEffect(() => {
    document.body.style.cursor = hovered
      ? 'pointer'
      : 'url(\'https://raw.githubusercontent.com/chenglou/react-motion/master/demos/demo8-draggable-list/cursor.png\') 39 39, auto'
  }, [hovered])


  return (
    <>
      <Link to="/game" className={'btn-next'}>PLAY</Link>
      <Canvas
        pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
        camera={{ position: [0, 0, 12], fov: 80 }}
        gl={{ antialias: false }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#000'))
        }} onMouseMove={onMouseMove}>
        <fog attach="fog" args={['#070710', 100, 700]} />
        <pointLight position={[0, 5, 10]} />

        <group>
          <Text
            color={'#5d0186'}
            position={[0, 7, -5]}
            fontSize={4}
            depthOffset={10}
          >
            SELECT YOUR SHIP
          </Text>
        </group>
        <Suspense fallback={null}>
          <mesh onClick={e => console.log('click')} rotation={[0, -140, 0]} position={[-8, 0, 0]} scale={[0.6,0.6,0.6]}>
            <ShipOne />
          </mesh>
          <mesh onClick={e => console.log('click')} rotation={[0, 140, 0]} position={[8, 0, 0]} scale={[0.6,0.6,0.6]}>
            <ShipTwo />
          </mesh>
          <mesh position={[-8, -4, 0]}>
            <meshStandardMaterial attach="material" color="#5d0186" />
            <Icosahedron material={laserMaterial} />
          </mesh>
        </Suspense>
        <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -12, 0]}>
          <planeBufferGeometry attach="geometry" args={[500, 500]} />
          <meshStandardMaterial attach="material" color="#5d0186" />
        </mesh>
        <Particles count={isMobile ? 300 : 5000} mouse={mouse} color={'#5d0186'}/>
        <OrbitControls />
      </Canvas>
    </>
  )
}


export default Garage
