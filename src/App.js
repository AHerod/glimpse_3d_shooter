import React from "react";
// React Router

//Components
import Garage from "./Garage";
import Game from "./Game";
import Start from "./Start";


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
        <div className="screen">
        <Switch>
          <Route path="/garage">
            <Garage/>
          </Route>
          <Route path="/game">
            <Game/>
          </Route>
          <Route path="/">
            <Start/>
          </Route>
        </Switch>
        </div>
      </FullScreen>
    </Router>
  );
};

export default App;
