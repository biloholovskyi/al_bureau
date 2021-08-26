import React, {useEffect} from "react";
import {Route, Switch} from "react-router";
import Background from "react-background-noise"

import Home from './pages/home/home';
import Header from "./compoments/header/header";
import Projects from "./pages/Projects/Projects";
import Case from "./pages/case/case";

function App() {

  return (
    <>
        <Header/>

        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/projects'} exact component={Projects}/>
          <Route path={'/case'} exact component={Case}/>
        </Switch>

      {/*noise bg*/}
      <div id={'section'}> </div>
        <svg id={'svg'}>
          <filter id={'noise'}>
            <feTurbulence id={'turbulence'}>
              <animate attributeName={'baseFrequency'} dur='50s' values='0.9 0.9;0.8 0.8;0.9 0.9;' repeatCount={'indefinite'} />
            </feTurbulence>
            <feDisplacementMap in={'SourceGraphic'} scale={'30'} />
          </filter>
        </svg>
      {/*noise bg*/}
    </>
  );
}

export default App;
