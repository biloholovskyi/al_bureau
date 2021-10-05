import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router";

import Home from './pages/home/home';
import Header from "./components/header/header";
import Projects from "./pages/Projects/Projects";
import Case from "./pages/case/case";
import Noise from "./components/noise/noise";
import BgGradient from "./components/bgGradient/bgGradient";
import About from "./pages/about/about";

function App() {
  const [mobileDevice, setMobileDevice] = useState(false)
  const [positionCursor, setPositionCursor] = useState([0, 0]);


  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
      e.preventDefault();
    e.returnValue = false;
  }

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      setMobileDevice(true)
    } else {
      if (window.addEventListener) // older FF
        window.addEventListener('mousemove', preventDefault, {passive: false});
      window.onmousemove = preventDefault; // modern standard
      window.onmousemove = document.onmousewheel = preventDefault; // older browsers, IE
    }
  }, [])

  const onMouseMove = (e) => {
    e.preventDefault();
    if(mobileDevice) {
      return
    }

    const scaleItems = [1.4635176356, 0.99999, 1.12317381, 1.238273872, 1.3097598743, 1.5049587439, 1.6437947, 1.7293847, 0.88394757, 0.7439875, 0.693485749]
    const scaleItems2 = [0.99999, 1.4635176356, 1.12317381, 1.238273872, 1.3097598743, 1.5049587439, 1.6437947, 1.7293847, 0.88394757, 0.7439875, 0.693485749]

    const circle = document.getElementById('circle-light');
    circle.style.top = e.clientY - 180 + 'px';
    circle.style.left = e.clientX - 180 + 'px';
    circle.style.transform = `scale(${scaleItems[Math.floor(Math.random()*scaleItems.length)]}, ${scaleItems2[Math.floor(Math.random()*scaleItems2.length)]}) rotate(${Math.floor(Math.random() * (180 - 1 + 1) + 1)}deg)`;
    // setPositionCursor([e.clientX, e.clientY]);

    // console.log(positionCursor);

    // const gradient = document.getElementById('mask')
    // // setX(e.clientX);
    // // setY(e.clientY);
    // //
    // const scaleItems = [1.4635176356, 0.99999]
    // const scaleItems2 = [0.99999, 1.4635176356]
    // //
    // gradient.style.webkitMaskImage = `radial-gradient(380px 410px at ${e.clientX + 'px'} ${e.clientY + 'px'}, #000000 0%, rgba(0, 0, 0, 0) 100%)`;
    // // gradient.style.maskSize = Math.floor(Math.random() * 101) + 1;
    // gradient.style.transform = `scale(${scaleItems[Math.floor(Math.random()*scaleItems.length)]}, ${scaleItems2[Math.floor(Math.random()*scaleItems2.length)]})`;
  }

  return (
    <>
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

        {!mobileDevice && <BgGradient data={positionCursor}/>}
        {!mobileDevice && <Noise/>}
      </div>
    </>
  );
}

export default App;
