import React from 'react';

import * as Style from '../styled';

const MainScreen = ({data}) => {
  return (
    <Style.MainScreenWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
           <div className="title_section">
             <div className="title">
               {data?.main_title}
             </div>
             <div className="title title-blur">
               {data?.main_title}
             </div>
           </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block"/>
        </div>

        <div className="row">
          <div className="col-lg-6 d-lg-block"/>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="desc">{data?.main_subtitle}</div>
          </div>
        </div>
      </div>
    </Style.MainScreenWrap>
  )
}

export default MainScreen;