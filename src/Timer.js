import * as THREE from 'three'
import React, { useCallback, useRef } from 'react'
import { Canvas } from 'react-three-fiber'

// Components & Effects
import Particles from './3d/Particles'
import { Link } from 'react-router-dom'
import TextMesh from './TextMesh'
import { useHistory } from 'react-router-dom'
import useStore from './store'

function Timer() {
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  let [counter, setCounter] = React.useState(5)
  const actions = useStore(state => state.actions)
  let history = useHistory()

  function runGame() {
    history.push('/game')
  }

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    if(counter === 0) {
      runGame()
      actions.resetData()
    }
    return () => clearInterval(timer)
  }, [counter])
  return (
    <>
      <Link to="/target" className={'btn-next btn-back'}>BACK</Link>
      <Canvas
        pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
        camera={{ position: [0, 0, 12], fov: 80 }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#020207'))
        }} onMouseMove={onMouseMove}>

        <fog attach="fog" args={['lightblue', 15, 150]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 10]} intensity={1} />
        <pointLight position={[-20, -10, -40]} intensity={.1} />
        <TextMesh color={'#5d0186'} position={[0, 0, 0]} size={6} letter={counter.toString()} />
        <Particles count={isMobile ? 300 : 5000} mouse={mouse} color={'#5d0186'} />
      </Canvas>
    </>
  )
}


export default Timer
