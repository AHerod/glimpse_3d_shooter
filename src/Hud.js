import React, { useMemo, useRef, useEffect } from 'react'
import styled, { css, createGlobalStyle, keyframes } from 'styled-components'
import useStore from './store'
import { Link } from 'react-router-dom'

export default function Hud() {
  const points = useStore(state => state.points)
  const health = useStore(state => state.health)
  let [counter, setCounter] = React.useState(60)

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timer)
  }, [counter])


  let timesOut = counter === 0
  let death = health <= 0
  let endOfGame = timesOut || death
  const score = useMemo(() => (points >= 1000 ? (points / 1000).toFixed(1) + 'K' : points), [points])
  return (
    <>
      <Shadow />
      {(timesOut || death) &&
      <GameOver>
        <Link to="/garage" className={'btn btn-back'}>BACK</Link>
        <Modal className={'show'}>
          <h3> {timesOut ? 'Your ran out of time!' : 'Your ship is destroyed!'}</h3>
          <h1>Game Over</h1>
          <h2>Your Score: {score}</h2>
          <Link to="/garage" className={'btn play-again'}>Play Again</Link>
          <Link to="/start" className={'btn btn-back'}>Exit</Link>
        </Modal>
      </GameOver>
      }

      {(!endOfGame) &&
      <>
        <Middle>
          <h1>{counter}</h1>
          <h2>{score}</h2>
        </Middle>
        <Global />
        <LowerRight>
          <div style={{ width: health + '%' }} />
          <h1>{health} <span>%</span> {(health < 30) && <LowHP>LOW HP!</LowHP>}</h1>
        </LowerRight>
      </>
      }
    </>
  )
}
const pulse = keyframes`
  from {
    transform: scale(1);
    opacity: .7;
    color: rgb(110, 92, 163);
  }

  to {
    transform: scale(1.2);
    opacity: 1;
    color: #fff;
  }
`
const base = css`
  font-family: 'Teko', sans-serif;
  position: absolute;
  text-transform: uppercase;
  font-weight: 900;
  font-variant-numeric: slashed-zero tabular-nums;
  line-height: 1em;
  pointer-events: none;
  color: #be47e1;
`
const LowHP = styled.span`{
  font-size: 2rem;
  animation: ${pulse} .8s ease-in-out infinite;
}`
const GameOver = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,.7);
  flex-direction: column;
  box-shadow: inset 1px -1px 80px 0 #780a83b0;
  h1 {
  font-size: 6rem;
  animation: ${pulse} .8s ease-in-out infinite;
  text-transform: uppercase;
  color: #5d0186 !important;
  filter: drop-shadow(2px 4px 6px #000);
  }
  h2 {
  color: #ab54f5;
  font-size: 2rem;
  margin-bottom: 100px;
  padding-top: 0;
  }
  h3 {
  margin-top: 20px;
  }
  .play-again {
    font-size: 1.5em;
    padding-top: 30px;
    margin-top: 25px;
  }
  `
const Middle = styled.div`
  ${base}
    font-family: 'Teko',sans-serif;
    position: absolute;
    text-transform: uppercase;
    font-weight: 900;
    font-variant-numeric: slashed-zero tabular-nums;
    line-height: 1em;
    pointer-events: none;
    color: #be47e1;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 50vw;
    box-shadow: inset #ab54f5 1px 1px 20px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
    clip-path: polygon(0 0, 100% 0, 75% 100%, 25% 100%);

  & > h1 {
    margin: 0;
    font-size: 3em;
    line-height: 1em;
    width:50px;
    margin: 0 50px;
  }
  & > h2 {
    margin: 0;
    font-size: 4em;
    line-height: 3em;
    width:50px;
    margin: 0 10px;
  }
  @media only screen and (max-width: 900px) {
    bottom: 30px;
    & > h1 {
      font-size: 6em !important;
    }
    & > h2 {
      font-size: 3em !important;
    }
  }
`

const LowerRight = styled.div`
  ${base}
  bottom: 70px;
  right: 50px;
  height: 60px;
  width: 200px;
  background: black;
  & > div {
    height: 100%;
    background: #780a83b0;
  }

  @media only screen and (max-width: 900px) {
    bottom: 50px;
    height: 40px;
    width: 150px;
  }
`
const Shadow = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    left: 0;
    top: 0;
    box-shadow: inset #060606 1px 1px 95px 5px;
`
const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    user-select: none;
    overflow: hidden;
  }

  #root {
    overflow: auto;
    padding: 0px;
  }

  body {
    position: fixed;
    overflow: hidden;
    overscroll-behavior-y: none;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
    color: black;
    background: white;
  }
  
  .screen {
    width: 100vw;
    height: 100vh;
  }
`
const Modal = styled.div`
  ${base}
  top: 50%;
  left: 50%;
  font-size: 2em;
  pointer-events: all;
  width: 65vw;
  min-height: 60vh;
  background: rgb(19 2 22 / .7);
   box-shadow: #ab54f5 -6px -1px 20px 17px;
   padding: 25px;
       border-radius: 50px;
       text-align: center;
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
  }
  
  &.show {
  z-index: 99999;
  opacity:1;
  animation: show .25s;
  transform: translate(-50%,-50%) scale(1);
  }
  
  h1,h2 {
  line-height: normal;
  color: #be47e1;
  font-size: 3.5rem;
  margin: 0;
  }
  h2 {
   color: #5d0186;
 }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`
