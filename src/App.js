import React, { useState } from 'react'
// React Router

//Components
import Theme from './Theme'
import Garage from './Garage'
import Game from './Game'
import Start from './Start'
import Target from './Target'
import Timer from './Timer'

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
  const [isOpen, showModal] = useState(false)

  return (

    <Router>
      <FullScreen handle={handle}>
        <ModalTrigger className={'modal-trigger'} onClick={() => showModal(true)}>i</ModalTrigger>
        <Backdrop className={isOpen ? 'backdrop' : 'elo'}> </Backdrop>
        {isOpen && <Modal className={isOpen ? 'show' : 'hide'}>
          <div onClick={() => showModal(false)}>
            <svg fill={'#5d0186'} width={45}
                 height={45} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97">
              <defs />
              <path
                d="M192.485 0C86.173 0 0 86.173 0 192.485c0 106.3 86.173 192.485 192.485 192.485 106.3 0 192.485-86.173 192.485-192.485S298.785 0 192.485 0zm0 360.909c-93.018 0-168.424-75.406-168.424-168.424S99.467 24.061 192.485 24.061s168.424 75.406 168.424 168.424-75.406 168.424-168.424 168.424z" />
              <path
                d="M273.437 255.897l-63.376-63.388 63.015-62.497a11.931 11.931 0 000-17.011c-4.74-4.692-12.439-4.692-17.179 0l-62.931 62.413-63.869-63.881c-4.74-4.764-12.439-4.764-17.179 0-4.74 4.752-4.74 12.475 0 17.227l63.773 63.785-64.134 63.604c-4.74 4.704-4.74 12.319 0 17.011 4.74 4.704 12.439 4.704 17.191 0l64.049-63.52 63.472 63.472c4.74 4.764 12.439 4.764 17.179 0 4.729-4.74 4.729-12.451-.011-17.215z" />
            </svg>
          </div>
          <div>
            <h1>SOUND {sound ? <span>ON</span> : <span>OFF</span>}</h1>
            <button className={'sound-switcher'} onClick={() => toggle()}>
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
            </button>
            <h1>FULLSCREEN {handle.active ? <span>ON</span> : <span>OFF</span>}</h1>
            <button className={'fullscreen__btn'} onClick={handle.active ? handle.exit : handle.enter}>
              <svg className={'fullscreen__btn--enter'} xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 451.111 451.111">
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
          </div>
          <Navigation>
            <h2>Navigation</h2>
            <div>
              <div>
                <p>Click and drag to look around</p>
                <img src={require('./images/mouse_drag_left.png')} alt="" />
              </div>
              <div><p>Click to select</p>
                <img src={require('./images/mouse_click.png')} alt="" /></div>
              <div>
                <p>Use the scroll wheel to zoom in and out</p>
                <img src={require('./images/mouse_zoom.png')} alt="" />
              </div>
            </div>
          </Navigation>
        </Modal>}
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
          <Route path="/timer">
            <Timer />
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
  color: #be47e1;
  z-index: 999;
`

const Navigation = styled.div`{
display: flex; 
flex-direction: column;
  > div {
    display: flex;
    justify-content: space-evenly;
    align-items:center;
  
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1;
    }
  }
  
  p {
  padding: 15px 30px;
  }
img {
  vertical-align: middle;
  height: 120px;
}
}`
const Backdrop = styled.div`
&.backdrop{
  ${base}
  width: 100vw;
  height: 100vh;
  opacity: .7;
  z-index:99999;
  background: #000;
}
  `
const ModalTrigger = styled.button`
  ${base}
  top: 20px;
  left: 20px;
  background: no-repeat;
  width: 60px;
  border-radius: 50%;
  height: 60px;
  font-size: 2em;
  pointer-events: all;
  text-transform: initial;
  z-index:999999;
   box-shadow: inset #ab54f5 0px 0px 20px 0px;
   padding: 20px;
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
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
  background: rgb(19 2 22 / .8);
   box-shadow: #ab54f5 -6px -1px 20px 17px;
   padding: 25px;
       border-radius: 50px;
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
  }
  
  &.hide {
  z-index: -1;
  opacity:0;
  animation: hide .25s;
  transform: translate(-50%,-50%) scale(0);
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
  margin: 20px 0;
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
  
  @keyframes hide {
  from {
  z-index:99999;
  transform: translate(-50%,-50%) scale(1);
  opacity: 1;
  }
  to {
  z-index: -1;
  transform: translate(-50%,-50%) scale(0);
  opacity: 0;
  }
  }
  
  @keyframes show {
  from {
  z-index: -1;
  transform: translate(-50%,-50%) scale(0);
  opacity:0;
  }
  to {
  z-index: 99999;
  transform: translate(-50%,-50%) scale(1);
  opacity: 1;
  }
  }
`
