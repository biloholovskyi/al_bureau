import React, {useState} from 'react'
import { Link } from "react-scroll";

import * as Style from '../styled';

const MainScreen = () => {

  return (
    <Style.MainScreenWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12"><p className={'small_desc text-center'}>г. Казань / 2019</p></div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className={'title text-uppercase text-center'}>Lorem ipsum dolor</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className={'small_desc text-center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <Link className="scrollIndicator" to='down'   offset={100} duration={1000} activeClass={'active'}>Листай<br/>вниз</Link>
    </Style.MainScreenWrap>
  )
}

export default MainScreen;