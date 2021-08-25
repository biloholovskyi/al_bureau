import React, {useState} from 'react'
import { Link } from "react-scroll";

import * as Style from '../styled';
import arrow from './../../../media/icon/btn_arrow.svg';

const MainScreen = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onMouseMove = (e) => {
    setX( e.nativeEvent.offsetX );
    setY( e.nativeEvent.offsetY );
  }

  return (
    <Style.MainScreenWrap onMouseMove={onMouseMove}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <h1 className={'title text-uppercase'}>Architecture & Light Bureau</h1>
          </div>
          <div className="col-6"/>
        </div>
        <div className="row">
          <div className="col-6"/>
          <div className="col-6">
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
      <Link className="scrollIndicator" to='down'   offset={100} duration={1000} activeClass={'active'}>Листай вниз</Link>
      {/*<p style={{position: "absolute",top: 0, left: 0, fontSize: 12 }}>mouse coordinates: { x } { y }</p>*/}
    </Style.MainScreenWrap>
  )
}

export default MainScreen;