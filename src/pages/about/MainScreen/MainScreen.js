import React from 'react';

import * as Style from '../styled';

const MainScreen = () => {
  return (
    <Style.MainScreenWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
           <div className="title_section">
             <div className="title">
               Создаем&nbsp;и реализуем концепции освещения
             </div>
             <div className="title title-blur">
               Создаем&nbsp;и реализуем концепции освещения
             </div>
           </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block"/>
        </div>

        <div className="row">
          <div className="col-lg-6 d-lg-block"/>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="desc">Знаем как воплотить любые идеи в жизнь.<br/>
              И делаем это лучше всех!
            </div>
          </div>
        </div>
      </div>
    </Style.MainScreenWrap>
  )
}

export default MainScreen;