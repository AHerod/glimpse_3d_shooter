import * as THREE from 'three'
import React, { Suspense, useCallback, useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import Stars from './3d/Stars'
import Effects from './3d/Effects'
import CosmicDust from './3d/CosmicDust'
import Enemies from './3d/Enemies'
import Rocks from './3d/Rocks'
import Explosions from './3d/Explosions'
import Rings from './3d/Rings'
import Track from './3d/Track'
import Ship from './3d/Ship'
import Rig from './3d/Rig'
import Bubble from './3d/Bubble'
import Hud from './Hud'
import useStore from './store'
import SkyBox from './3d/SkyBox'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

export default function Game() {
  const { fov } = useStore(state => state.mutation)
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
  const actions = useStore(state => state.actions)
  const health = useStore(state => state.health)
  let gameOver = health <= 0
  return (
    <div className={'screen game'}>
      <Canvas
        concurrent
        gl={{ antialias: false }}
        onPointerMove={actions.updateMouse}
        onClick={actions.shoot}
        camera={{ position: [0, 0, 2000], near: 0.01, far: 10000, fov }}
        onCreated={({ gl, camera }) => {
          actions.init(camera)
          gl.gammaInput = true
          gl.toneMapping = THREE.Uncharted2ToneMapping
          gl.setClearColor(new THREE.Color('#020209'))
        }} onMouseMove={onMouseMove}>
        <fog attach="fog" args={['#070710', 100, 700]} />
        <ambientLight intensity={0.1} />
        <Stars />
        <Explosions />
        <Track />
        <group className={'swarmScreen'} style={{ width: '100%', height: '100%' }} onMouseMove={onMouseMove}>
          <Bubble mouse={mouse} count={300} />
        </group>
        <CosmicDust />
        <Rings />
        <Suspense fallback={null}>
          <Rocks />
          <SkyBox />
          <Enemies />
          {!gameOver &&
          <Rig>
            <Ship />
          </Rig>
          }
        </Suspense>
        <Effects />
      </Canvas>
      <Hud />
    </div>
  )
}
