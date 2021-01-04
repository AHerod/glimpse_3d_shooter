import * as THREE from 'three'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Start() {
  return (
    <div className="screen">
      <h1>Start</h1>
      <ul>
        <li>
          <Link to="/garage">Garage</Link>
        </li>
      </ul>
    </div>
  )
}
