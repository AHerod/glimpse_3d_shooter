import laserAudio from './laser.mp3'
import engineAudio from './engine.mp3'
import bgAudio from './bg.mp3'
import warpAudio from './warp.mp3'
import explosionAudio from './explosion.mp3'
import laser2Audio from './laser2.mp3'

const mp3 = { explosion: explosionAudio, bg: bgAudio }

const laser = new Audio(laserAudio)
const engine = new Audio(engineAudio)
const bg = new Audio(bgAudio)
const warp = new Audio(warpAudio)
const explosion = new Audio(explosionAudio)

export { laser, engine, bg, warp, explosion, mp3 }
