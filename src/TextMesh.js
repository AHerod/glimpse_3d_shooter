import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import defaultFont from './fonts/audiowide.json'
import { useFrame } from 'react-three-fiber'

function TextMesh({ color, props, position, letter, size, font }) {
  const [hovered, setHover] = useState(false)
  const mesh = useRef()

  useFrame(() => {
    mesh.current.geometry.center()
  })

  const jsonFont = font ? new THREE.FontLoader().parse(font) : new THREE.FontLoader().parse(defaultFont)

  const textOptions = {
    font: jsonFont,
    size: size,
    height: 1
  }

  return (
    <mesh
      {...props}
      ref={mesh}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      position={position}
    >
      <textGeometry attach="geometry" args={[letter, textOptions]} />
      <meshPhongMaterial attach="material" color={color} />
    </mesh>
  )
}


export default TextMesh
