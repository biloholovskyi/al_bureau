import React from 'react'

import * as Style from "../styled";

import ApiService from "../../../services/api";

const api = new ApiService();

const SimpleBlockWithFewPhoto = ({data}) => {
  return (
    <Style.SimpleBlockWrap>
      <div className="container-fluid">
        {
          data && data.type === 'text_image_3' && (
            <div className="row">
              <div className="col-6 d-flex flex-column justify-content-center">
                <div className="title ms-0">{data?.image_text_title}</div>
                <div className="text ms-0">{data?.image_text_text}</div>
              </div>
              <div className="col-6">
                <div className="image_container ms-auto">
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
              <div className="col-6">
                <div className="image_container">
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
              <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                <div className="title">{data?.image_text_title}</div>
                <div className="text">{data?.image_text_text}</div>
              </div>
            </div>
          )
        }
      </div>
    </Style.SimpleBlockWrap>


  // <div className="row">
  //   <div className="col-6 d-flex flex-column justify-content-center">
  //     <div className="title ms-0">Lorem ipsum dolor sit amet, consectetur</div>
  //     <div className="text ms-0">
  //       Nullam blandit cursus justo, eu accumsan purus auctor et. Duis arcu purus, varius fermentum lectus ac,
  //       convallis convallis ipsum. Duis ut metus at leo lacinia commodo vitae eu eros. Proin id turpis
  //       scelerisque, bibendum arcu quis, aliquam nunc. Fusce fringilla ultrices vehicula.
  //     </div>
  //   </div>
  //   <div className="col-6">
  //     <div className="image_container ms-auto">
  //       <div className="image_row">
  //         <img src={image} alt="image"/>
  //       </div>
  //       <div className="image_row">
  //         <img src={image} alt="image"/>
  //         <img src={image} alt="image"/>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //
  //
  // <div className="row">
  //   <div className="col-6">
  //     <div className="image_container">
  //       <div className="image_row">
  //         <img src={image} alt="image"/>
  //         <img src={image} alt="image"/>
  //       </div>
  //       <div className="image_row">
  //         <img src={image} alt="image"/>
  //         <img src={image} alt="image"/>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="col-6 d-flex flex-column align-items-center justify-content-center">
  //     <div className="title">Lorem ipsum dolor sit amet, consectetur</div>
  //     <div className="text">
  //       Nullam blandit cursus justo, eu accumsan purus auctor et. Duis arcu purus, varius fermentum lectus ac,
  //       convallis convallis ipsum. Duis ut metus at leo lacinia commodo vitae eu eros. Proin id turpis
  //       scelerisque, bibendum arcu quis, aliquam nunc. Fusce fringilla ultrices vehicula.
  //     </div>
  //   </div>
  // </div>
  )
}

export default SimpleBlockWithFewPhoto;