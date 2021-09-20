import React, {useState} from 'react';

import * as Style from './styled'
import Slider from "./Slider/slider";

const Projects = () => {

  return (
    <>
      <Style.ProjectsWrap>
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
    </>
  )
}

export default Projects;