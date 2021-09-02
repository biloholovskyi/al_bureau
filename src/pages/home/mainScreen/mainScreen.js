import React, {useState} from 'react'
import { Link } from "react-scroll";

import * as Style from '../styled';
import arrow from './../../../media/icon/btn_arrow.svg';
import bgg from '../../../media/image/gradient.svg';

const MainScreen = () => {


  return (
    <Style.MainScreenWrap >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h1 className={'title text-uppercase'}>Architecture & Light Bureau</h1>
          </div>
          <div className="col-lg-6 d-none d-lg-block"/>
        </div>
        <div className="row">
          <div className="col-lg-6 d-lg-block"/>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <p className={'small_desc'}>Создаем проекты любой сложности и решаем самые смелые задачи в области
              архитектурно-художественного, ландшафтного и интерьерного освещения.</p>
            <button type="button"
                    className="btn btn-light rounded-pill border-0 text-white text-uppercase d-flex align-items-center justify-content-center main_btn">
              Связаться с нами
              <img src={arrow} alt="icon"/>
            </button>
          </div>
        </div>
      </div>
      <Link className="scrollIndicator" to='down'   offset={200} duration={1000} activeClass={'active'}>Листай<br/>вниз</Link>
    </Style.MainScreenWrap>
  )
}

export default MainScreen;