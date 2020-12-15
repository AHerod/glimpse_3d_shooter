import * as THREE from 'three'
import React, { Suspense, useCallback, useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import Stars from './3d/Stars'
import Planets from './3d/Planets'
import Effects from './3d/Effects'
import Particles from './3d/Particles'
import Enemies from './3d/Enemies'
import Rocks from './3d/Rocks'
import Explosions from './3d/Explosions'
import Rings from './3d/Rings'
import Track from './3d/Track'
import Ship from './3d/Ship'
import Rig from './3d/Rig'
import Eye from './3d/Eye'
import Bubble from './3d/Bubble'
import Hud from './Hud'
import useStore from './store'
import EyeModel from './3d/Eye'
import SkyBox from './3d/SkyBox'
function Eyes() {
  const rocks = useStore(state => state.rocks)
  return rocks.map(data => console.log(data))
}
export default function App() {
  const { fov } = useStore(state => state.mutation)
   const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({clientX: x, clientY: y}) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
  const actions = useStore(state => state.actions)
  return (
    <>
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
        {/*<Stars />*/}
        {/*<Explosions />*/}
        {/*<Track />*/}
         <group className={'swarmScreen'} style={{width: '100%', height: '100%'}} onMouseMove={onMouseMove}>
            <Bubble mouse={mouse} count={300} />
          </group>
        {/*<Particles />*/}
        <Rings />
        <Suspense fallback={null}>
          <Eyes/>
          <Rocks />
          <SkyBox/>
          {/*<Planets />*/}
          {/*<Enemies />*/}
          <Rig>
            <Ship />
          </Rig>
          {/*<Eye scale={[.8, .8, .8]} position={[35, -5, -35]}/>*/}
        </Suspense>
        <Effects />
      </Canvas>
      <Hud />
    </>
  )
}
