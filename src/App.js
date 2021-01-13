import React from "react";
// React Router

//Components
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
          sound
          <br />
          {sound ? 'off' : 'on'}
        </UpperLeft>
        <UpperRight onClick={handle.active ? handle.exit : handle.enter}>
          screen
        </UpperRight>
        <Global />
        <Switch>
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
