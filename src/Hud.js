import React, { useMemo, useRef, useEffect } from 'react'
import styled, { css, createGlobalStyle } from 'styled-components'
import useStore from './store'

export default function Hud() {
  const points = useStore(state => state.points)
  const health = useStore(state => state.health)

  const seconds = useRef()
  useEffect(() => {
    const t = Date.now()
    const i = setInterval(() => (seconds.current.innerText = ((Date.now() - t) / 1000).toFixed(1)), 100)
    return () => clearInterval(i)
  }, [])

  const score = useMemo(() => (points >= 1000 ? (points / 1000).toFixed(1) + 'K' : points), [points])
  return (
    <>
      <Shadow />
      <Middle>
        <h1 ref={seconds}>0.0</h1>
        <h2>{score}</h2>
      </Middle>
      <Global />
      <LowerRight>
        <div style={{ width: health + '%' }}/>
        <h1>{health}<span>%</span></h1>
      </LowerRight>
    </>
  )
}

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
