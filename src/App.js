import React from 'react'
// React Router

//Components
import Theme from './Theme'
import Garage from './Garage'
import Game from './Game'
import Start from './Start'
import Target from './Target'


// FS
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import styled, { createGlobalStyle, css } from 'styled-components'
import useStore from './store'

export default function App() {
  const sound = useStore(state => state.sound)
  const toggle = useStore(state => state.actions.toggleSound)
  const handle = useFullScreenHandle()

  return (

    <Router>
      <FullScreen handle={handle}>
        <UpperLeft onClick={() => toggle()}>
          <div className={'sound-switcher'}>
            {sound ?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.448 511.448" fill={'#5d0186'} width={65}
                   height={65}>
                <defs />
                <path
                  d="M398.573 208.875c-8.201-8.201-21.498-8.201-29.699 0l-17.15 17.15-17.15-17.15c-8.201-8.201-21.498-8.201-29.699 0-8.2 8.201-8.2 21.498 0 29.698l17.151 17.151-17.151 17.151c-8.2 8.201-8.2 21.498 0 29.698 8.201 8.201 21.498 8.201 29.699 0l17.15-17.15 17.15 17.15c8.201 8.201 21.498 8.201 29.699 0 8.2-8.201 8.2-21.498 0-29.698l-17.151-17.151 17.151-17.151c8.201-8.2 8.201-21.497 0-29.698zM232.851 131.969l-69.19 49.421h-35.937c-11.598 0-21 9.402-21 21v106.667c0 11.598 9.402 21 21 21h35.937l69.19 49.421c13.871 9.908 33.207-.027 33.207-17.088V149.058c0-17.046-19.323-27.007-33.207-17.089zm-8.794 189.615l-41.461-29.615c-7.085-5.061-11.718-3.912-33.873-3.912V223.39c21.661 0 26.742 1.182 33.873-3.912l41.461-29.615z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.449 511.449" fill={'#5d0186'} width={65}
                   height={65}>
                <defs />
                <path
                  d="M232.851 131.97l-69.189 49.421h-35.938c-11.598 0-21 9.402-21 21v106.667c0 11.598 9.402 21 21 21h35.938l69.189 49.421c13.872 9.908 33.206-.027 33.206-17.088V149.058c0-17.046-19.322-27.006-33.206-17.088zm-8.794 189.614l-41.46-29.614c-7.085-5.061-11.719-3.912-33.873-3.912v-64.667c21.664 0 26.743 1.181 33.873-3.912l41.46-29.614zM365.502 135.281c-8.201-8.201-21.498-8.201-29.699 0-8.2 8.201-8.2 21.498 0 29.698 50.037 50.038 50.037 131.454 0 181.491-8.2 8.201-8.2 21.498 0 29.698 8.201 8.201 21.498 8.201 29.699 0 66.413-66.413 66.413-174.474 0-240.887z" />
                <path
                  d="M320.247 180.535c-8.201-8.201-21.498-8.201-29.699 0s-8.2 21.498.001 29.699c25.142 25.143 25.144 65.836 0 90.98-13.27 13.27-3.691 35.85 14.849 35.85a20.94 20.94 0 0014.85-6.151c41.554-41.553 41.56-108.817-.001-150.378z" />
              </svg>
            }
          </div>
        </UpperLeft>
        <UpperRight onClick={handle.active ? handle.exit : handle.enter}>
          <button className={'fullscreen__btn'}>
            <svg className={'fullscreen__btn--enter'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.111 451.111">
              <defs />
              <path fill="#5d0186"
                    d="M290 0l56.389 56.389L257.778 145l48.333 48.333 88.611-88.611 56.389 56.389V0zM145 257.778l-88.611 88.611L0 290v161.111h161.111l-56.389-56.389 88.611-88.611zM306.111 257.778l-48.333 48.333 88.611 88.611L290 451.111h161.111V290l-56.389 56.389zM161.111 0H0v161.111l56.389-56.389L145 193.333 193.333 145l-88.611-88.611z" />
            </svg>
            <svg className={'fullscreen__btn--exit'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <defs />
              <g fill="#5d0186">
                <path
                  d="M24.586 27.414L29.172 32 32 29.172l-4.586-4.586L32 20H20v12zM0 12h12V0L7.414 4.586 2.875.043.047 2.871l4.539 4.543zM0 29.172L2.828 32l4.586-4.586L12 32V20H0l4.586 4.586zM20 12h12l-4.586-4.586 4.547-4.543L29.133.043l-4.547 4.543L20 0z" />
              </g>
            </svg>
          </button>
        </UpperRight>
        <Global />
        <Switch>
          <Route path="/theme">
            <Theme />
          </Route>
          <Route path="/garage">
            <Garage />
          </Route>
          <Route path="/target">
            <Target />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <Start />
          </Route>
        </Switch>
      </FullScreen>
    </Router>
  )
};


const base = css`
  font-family: 'Teko', sans-serif;
  position: fixed;
  text-transform: uppercase;
  font-weight: 900;
  font-variant-numeric: slashed-zero tabular-nums;
  line-height: 1em;
  pointer-events: none;
  color: #be47e1;
  z-index: 999;
`

const UpperLeft = styled.div`
  ${base}
  top: 0;
  left: 0;
  font-size: 2em;
  pointer-events: all;
  cursor: pointer;
  clip-path: polygon(0 0, 100% 0, 50% 50%, 0% 100%);
  width: 230px;
  height: 155px;
   box-shadow: inset #ab54f5 -20px -20px 35px 10px;
   padding: 20px;
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
  }
`

const UpperRight = styled.div`
  ${base}
  text-align: right;
  top: 0;
  right: 0;
  font-size: 2em;
  pointer-events: all;
  cursor: pointer;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 50%);
  width: 230px;
  height: 155px;
  box-shadow: inset #ab54f5 20px -16px 35px 10px;
   padding: 20px;
  & > a {
    color: indianred;
    text-decoration: none;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
  }
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
