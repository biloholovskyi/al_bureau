import React from 'react'

import * as Style from '../styled';

import ApiService from "../../../services/api";

const api = new ApiService();

const SimpleBlocksText = ({data}) => {
  return (
    <Style.SimpleBlockWrap>
      <div className="container-fluid">

        {
          data && data.type === 'image_text' && (
            <div className="row">
              <div className="col-6">
                <img className={'simple_image'} src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data?.image_1}`} alt="image"/>
              </div>
              <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                <div className="title">{data?.image_text_title}</div>
                <div className="text">{data?.image_text_text}</div>
              </div>
            </div>
          )
        }

        {
          data && data.type === 'text_image' && (
            <div className="row">
              <div className="col-6 d-flex flex-column justify-content-center">
                <div className="title ms-0">{data?.image_text_title}</div>
                <div className="text ms-0">{data?.image_text_text}</div>
              </div>
              <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                <img className={'simple_image ms-4'} src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data?.image_1}`} alt="image"/>
              </div>
            </div>
          )
        }

        {
          data && data.type === 'text_image_2' && (
            <div className="row">
              <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                <div className="title ms-0">{data?.image_text_title}</div>
                <div className="text ms-0">{data?.image_text_text}</div>
              </div>
              <div className="col-6">
                <div className="image_container">
                  <div className="image_row">
                    <img src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data?.image_1}`} alt="image"/>
                  </div>
                  <div className="image_row">
                    <img src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data?.image_2}`} alt="image"/>
                  </div>
                </div>
              </div>
            </div>
          )
        }

        {
          data && data.type === 'image_2_text' && (
            <div className="row">
              <div className="col-6">
                <div className="image_container">
                  <div className="image_row">
                    <img src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data?.image_1}`} alt="image"/>
                  </div>
                  <div className="image_row">
                    <img src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data?.image_2}`} alt="image"/>
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                <div className="title">{data?.image_text_title}</div>
                <div className="text">{data?.image_text_text}</div>
              </div>
            </div>
          )
        }

      </div>
    </Style.SimpleBlockWrap>
  )
}

export default SimpleBlocksText;