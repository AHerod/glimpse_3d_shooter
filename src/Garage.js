import * as THREE from 'three'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Garage() {
  return (
    <div className="screen">
      <h1>Garage</h1>
      <ul>
        <li>
          <Link to="/game">Game</Link>
        </li>
      </ul>
    </div>
  )
}
