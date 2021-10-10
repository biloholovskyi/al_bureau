import React from 'react'

import * as Style from "../styled";

import ApiService from "../../../services/api";

const api = new ApiService();

const SimpleBlockWithFewPhoto = ({data}) => {
  return (
    <Style.SimpleBlockWrap className={'case-main-block'}>
      <div className="container-fluid">
        {
          data && data.type === 'text_image_3' && (
            <div className="row">
              <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                <div className="title ms-0 animText anim_no_hide">{data?.image_text_title}</div>
                <div className="text ms-0" dangerouslySetInnerHTML={{__html: data?.image_text_text}} />
              </div>
              <div className="col-12 col-md-6">
                <div className="image_container ms-auto text_image_3">
                  <div className="image_row">
                    <img src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data?.image_1}`} alt="image"/>
                  </div>
                  <div className="image_row">
                    <img src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data?.image_2}`} alt="image"/>
                    <img src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data?.image_3}`} alt="image"/>
                  </div>
                </div>
              </div>
            </div>
          )
        }

        {
          data && data.type === 'image_4_text' && (
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="image_container text_image_2 image_2_text image_4_text">
                  <div className="image_row">
                    <img src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data?.image_1}`} alt="image"/>
                    <img src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data?.image_2}`} alt="image"/>
                  </div>
                  <div className="image_row">
                    <img src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data?.image_3}`} alt="image"/>
                    <img src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data?.image_4}`} alt="image"/>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex flex-column image_4_text">
                <div className="title animText anim_no_hide">{data?.image_text_title}</div>
                <div className="text" dangerouslySetInnerHTML={{__html: data?.image_text_text}} />
              </div>
            </div>
          )
        }
      </div>
    </Style.SimpleBlockWrap>
  )
}

export default SimpleBlockWithFewPhoto;