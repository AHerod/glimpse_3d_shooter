import * as THREE from 'three'
import React, { Suspense, useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'

// Components & Effects
import Particles from './3d/Particles'
import { Text, Billboard } from 'drei'
import { Link } from 'react-router-dom'
import ThemeCarousel from './ThemeCarousel'
import TextMesh from './TextMesh'

function Cells({ count, mouse }) {
  const mesh = useRef()
  const light = useRef()
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width

  const dummy = useMemo(() => new THREE.Object3D(), [])
  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.005 + Math.random() / 200
      const xFactor = -50 + Math.random() * 100
      const yFactor = -50 + Math.random() * 100
      const zFactor = -50 + Math.random() * 100
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])
  // The innards of this hook will run every frame
  useFrame(state => {
    // Makes the light follow the mouse
    light.current.position.set(mouse.current[0] / aspect, -mouse.current[1] / aspect, 0)
    // Run through the randomized data to calculate some movement
    particles.map((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      // There is no sense or reason to any of this, just messing around with trigonometric functions
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.cos(t)
      particle.mx += (mouse.current[0] - particle.mx) * 0.01
      particle.my += (mouse.current[1] * -1 - particle.my) * 0.01
      // Update the dummy object
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.set(s, s, s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()
      // And apply the matrix to the instanced item
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })
  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="lightblue">
        <mesh>
          <meshBasicMaterial attach="material" color="lightblue" />
        </mesh>
      </pointLight>
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronBufferGeometry attach="geometry" args={[.7, 0]} />
        <meshStandardMaterial attach="material" color="#5d0186" />
      </instancedMesh>
    </>
  )
}

function Start() {
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  return (
    <>
      <Link to="/garage" className={'btn'}>Next</Link>
      <Link to="/start" className={'btn btn-back'}>BACK</Link>
      <ThemeCarousel/>
      <Canvas
        pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
        camera={{ position: [0, 0, 12], fov: 80 }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#020207'))
        }} onMouseMove={onMouseMove}>

        <fog attach="fog" args={['lightblue', 15, 150]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[-10, 0, -20]} intensity={.1} />
        <pointLight position={[-20, -10, -40]} intensity={.1} />
        <group>
          <pointLight  position={[0, 5, 10]} intensity={.8} />
          <TextMesh color={'#5d0186'}  position={[0, 5, 0]} size={1.6} letter="SELECT THEME"/>
        </group>
        <Cells mouse={mouse} count={500} />
        <Particles count={isMobile ? 1000 : 2000} mouse={mouse} />
      </Canvas>
    </>
  )
}


export default Start
