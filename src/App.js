import React from "react";
import {Route, Switch} from "react-router";

import Home from './pages/home/home';
import Header from "./compoments/header/header";
import Projects from "./pages/Projects/Projects";
import Case from "./pages/case/case";

function App() {
  return (
    <>
      <Header/>

      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/projects'} exact component={Projects} />
        <Route path={'/case'} exact component={Case} />
      </Switch>
    </>
  );
}

export default App;
