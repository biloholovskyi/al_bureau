import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router";

import Home from './pages/home/home';
import Header from "./components/header/header";
import Projects from "./pages/Projects/Projects";
import Case from "./pages/case/case";
import Noise from "./components/noise/noise";
import BgGradient from "./components/bgGradient/bgGradient";
import About from "./pages/about/about";
import Contacts from "./pages/contacts/contacts";

function App() {
  const [mobileDevice, setMobileDevice] = useState(false)
  const [casePage, setCasePage] = useState(false)


  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
      e.preventDefault();
    e.returnValue = false;
  }

  useEffect(() => {
    if (window.location.pathname.split('/')[2] && typeof parseInt(window.location.pathname.split('/')[2]) === 'number') {
      setCasePage(true);
    } else {
      setCasePage(false)
    }
  }, []);

  useEffect(() => {
    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    //   setMobileDevice(true)
    // } else {
    //
    // }

    if (window.addEventListener) // older FF
      window.addEventListener('mousemove', preventDefault, {passive: false});
    window.onmousemove = preventDefault; // modern standard
    window.onmousemove = document.onmousewheel = preventDefault; // older browsers, IE
  }, [])

  const onMouseMove = (e) => {
    e.preventDefault();
    if(mobileDevice) {
      return
    }

    const scaleItems = [0.99999, 1.12317381, 1.238273872]
    const scaleItems2 = [0.99999, 1.12317381, 1.238273872]

    const x = `${e.clientX / 2 + window.innerHeight}px`;
    const y = `${e.clientY /2 + window.innerHeight}px`;


    const circle = document.getElementById('circle-light');
    circle.style.top = e.clientY - circle.clientWidth / 2 + 'px';
    circle.style.left = e.clientX - circle.clientWidth / 2 + 'px';
    circle.style.transform = `scale(${scaleItems[Math.floor(Math.random()*scaleItems.length)]}, ${scaleItems2[Math.floor(Math.random()*scaleItems2.length)]})`;
    circle.style.backgroundPositionX = x;
    circle.style.backgroundPositionY = y;
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
          <Route path={'/contacts'} exact component={Contacts}/>
        </Switch>
        <BgGradient casePage={casePage}/>

        {
          !casePage && <Noise/>
        }
      </div>
    </>
  );
}

export default App;
