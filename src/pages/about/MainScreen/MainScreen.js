import React from 'react';

import * as Style from '../styled';

const MainScreen = ({data}) => {
  return (
    <Style.MainScreenWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
           <div className="title_section">
             <div className="title" dangerouslySetInnerHTML={{__html: data?.main_title}}/>
             <div className="title title-blur" dangerouslySetInnerHTML={{__html: data?.main_title}}/>
           </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 d-lg-block"/>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="desc" dangerouslySetInnerHTML={{__html: data?.main_subtitle}}/>
          </div>
        </div>
      </div>
    </Style.MainScreenWrap>
  )
}

export default MainScreen;