import React from 'react';

import * as Style from '../styled';

const MainScreen = () => {
  return (
    <Style.MainScreenWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
           <div className="title_section">
             <div className="title">
               Создаем и реализуем концепции освещения
             </div>
             <div className="title title-blur">
               Создаем и реализуем концепции освещения
             </div>
           </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6"/>
          <div className="col-12 col-md-6">
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