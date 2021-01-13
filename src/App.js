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

const App = () => {
  const handle = useFullScreenHandle();
  return (

    <Router>
      <FullScreen handle={handle}>
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

export default App;
