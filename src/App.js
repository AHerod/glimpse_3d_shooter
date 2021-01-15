import React from "react";
// React Router

//Components
import Theme from "./Theme";
import Garage from "./Garage";
import Game from "./Game";
import Start from "./Start";
import Target from "./Target";


// FS
import {FullScreen, useFullScreenHandle} from "react-full-screen";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled, { createGlobalStyle, css } from 'styled-components'
import useStore from './store'

export default function App() {
  const sound = useStore(state => state.sound)
  const toggle = useStore(state => state.actions.toggleSound)
  const handle = useFullScreenHandle();
  return (

    <Router>
      <FullScreen handle={handle}>
        <UpperLeft onClick={() => toggle()}>
           <div className={'fullscreen__btn-left'}>
             <svg width={50} height={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461.55 461.55"><defs/><path  fill="#5d0186" d="M345.525 229.5c0-45.9-25.5-84.15-63.75-102v56.1l63.75 63.75V229.5zm63.75 0c0 22.95-5.1 45.9-12.75 66.3l38.25 38.25c17.85-30.6 25.5-68.85 25.5-107.1 0-109.65-76.5-201.45-178.5-224.4V56.1c73.95 25.5 127.5 91.8 127.5 173.4zM34.425 0L1.275 33.15 121.125 153H1.275v153h102l127.5 127.5V262.65l109.65 109.65c-17.851 12.75-35.7 22.95-58.65 30.601v53.55c35.7-7.65 66.3-22.95 94.35-45.9l51 51 33.15-33.149-229.5-229.5L34.425 0zm196.35 25.5l-53.55 53.55 53.55 53.55V25.5z"/></svg>
              <svg className={'fullscreen__btn--exit'}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs/><g fill="#5d0186"><path d="M24.586 27.414L29.172 32 32 29.172l-4.586-4.586L32 20H20v12zM0 12h12V0L7.414 4.586 2.875.043.047 2.871l4.539 4.543zM0 29.172L2.828 32l4.586-4.586L12 32V20H0l4.586 4.586zM20 12h12l-4.586-4.586 4.547-4.543L29.133.043l-4.547 4.543L20 0z"/></g></svg>
            </div>
          <br />
          {sound ? 'off' : 'on'}
        </UpperLeft>
        <UpperRight onClick={handle.active ? handle.exit : handle.enter}>
          <button className={'fullscreen__btn'}>
              <svg className={'fullscreen__btn--enter'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.111 451.111"><defs/><path fill="#5d0186" d="M290 0l56.389 56.389L257.778 145l48.333 48.333 88.611-88.611 56.389 56.389V0zM145 257.778l-88.611 88.611L0 290v161.111h161.111l-56.389-56.389 88.611-88.611zM306.111 257.778l-48.333 48.333 88.611 88.611L290 451.111h161.111V290l-56.389 56.389zM161.111 0H0v161.111l56.389-56.389L145 193.333 193.333 145l-88.611-88.611z"/></svg>
              <svg className={'fullscreen__btn--exit'}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs/><g fill="#5d0186"><path d="M24.586 27.414L29.172 32 32 29.172l-4.586-4.586L32 20H20v12zM0 12h12V0L7.414 4.586 2.875.043.047 2.871l4.539 4.543zM0 29.172L2.828 32l4.586-4.586L12 32V20H0l4.586 4.586zM20 12h12l-4.586-4.586 4.547-4.543L29.133.043l-4.547 4.543L20 0z"/></g></svg>
            </button>
        </UpperRight>
        <Global />
        <Switch>
          <Route path="/theme">
            <Theme/>
          </Route>
          <Route path="/garage">
            <Garage/>
          </Route>
           <Route path="/target">
            <Target/>
          </Route>
          <Route path="/game">
            <Game/>
          </Route>
          <Route path="/">
            <Start/>
          </Route>
        </Switch>
      </FullScreen>
    </Router>
  );
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
