import React, {useState} from 'react'
import { Link } from "react-scroll";

import * as Style from '../styled';

import ApiService from "../../../services/api";
const api = new ApiService();

const MainScreen = ({data}) => {

  return (
    <Style.MainScreenWrap bg={data && `${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data.banner}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12"><p className={'small_desc text-center year'}>{data && data.year}</p></div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className={'title text-uppercase text-center'}>{data && data.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className={'small_desc text-center'}>{data && data.sub_title}</p>
          </div>
        </div>
      </div>
      <Link className="scrollIndicator" to='down'   offset={100} duration={1000} activeClass={'active'}>Листай<br/>вниз</Link>
    </Style.MainScreenWrap>
  )
}

export default MainScreen;