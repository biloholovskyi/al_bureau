import React, {useState} from 'react';

import * as Style from './styled'
import Slider from "./Slider/slider";
import BgGradient from "../../components/bgGradient/bgGradient";

const Projects = () => {
  const [x, setX] = useState(20);
  const [y, setY] = useState(20);

  const onMouseMove = (e) => {
    const gradient = document.getElementById('mask')
    setX(e.clientX);
    setY(e.clientY);

    gradient.style.webkitMaskImage = `radial-gradient(${280 + (x / 5) + 'px'} ${310 + (y / 5) + 'px'} at ${x + 'px'} ${y + 'px'}, #000000 2%, rgba(0, 0, 0, 0) 100%)`
  }

  return (
    <>
      <Style.ProjectsWrap onMouseMove={onMouseMove}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12"><h1>Наши проекты</h1></div>
          </div>
          <div className="row">
            <div className="col-12"><p>Скрольте для навигации</p></div>
          </div>
          <div className="row">
            <div className="col-12">
              <Slider/>
            </div>
          </div>
        </div>
      </Style.ProjectsWrap>
      <BgGradient/>
    </>
  )
}

export default Projects;