import React, {useState} from "react";
import {Route, Switch} from "react-router";

import Home from './pages/home/home';
import Header from "./components/header/header";
import Projects from "./pages/Projects/Projects";
import Case from "./pages/case/case";
import Noise from "./components/noise/noise";
import BgGradient from "./components/bgGradient/bgGradient";
import About from "./pages/about/about";

function App() {
  const [x, setX] = useState(20);
  const [y, setY] = useState(20);

  const onMouseMove = (e) => {
    const gradient = document.getElementById('mask')
    setX(e.clientX);
    setY(e.clientY);

    const scaleItems = [1.4635176356, 0.99999]
    const scaleItems2 = [0.99999, 1.4635176356]

    gradient.style.webkitMaskImage = `radial-gradient(380px 410px at ${x + 'px'} ${y + 'px'}, #000000 0%, rgba(0, 0, 0, 0) 100%)`;
    gradient.style.transform = `scale(${scaleItems[Math.floor(Math.random()*scaleItems.length)]}, ${scaleItems2[Math.floor(Math.random()*scaleItems2.length)]})`;
  }

  return (
    <div onMouseMove={(e) => onMouseMove(e)}>
      <Header/>

      <Switch >
        <Route path={'/'} exact component={Home}/>
        <Route path={'/projects'} exact component={Projects}/>
        <Route path={'/case'} exact component={Case}/>
        <Route path={'/projects/:id'} exact render={({match}) => {
          const {id} = match.params
          return <Case id={id}/>
        }}/>
        <Route path={'/about'} exact component={About}/>
      </Switch>
      <BgGradient/>
      <Noise/>
    </div>
  );
}

export default App;
