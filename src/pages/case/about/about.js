import React from 'react'

import * as Style from '../styled';
import ApiService from "../../../services/api";

const api = new ApiService();

const About = ({data}) => {
  return (
    <>
      {
        data && data.type === 'banner' && (
          <Style.BlockImage className={'block_image'}
                            src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data.banner}`} alt="image"/>
        )
      }

      {
        data && data.type === 'banner_text' && (
          <>
            <Style.AboutWrap>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="text text--full">{data?.banner_text}</div>
                  </div>
                </div>
              </div>
            </Style.AboutWrap>

            <Style.BlockImage className={'block_image'}
                              src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data.banner}`} alt="image"/>
          </>
        )
      }

      {
        data && data.type === 'column_text_1' && (
          <Style.AboutWrap>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="title">{data?.column_title_1}</div>
                  <div className="text text--full">{data?.column_text_1}</div>
                </div>
              </div>
            </div>
          </Style.AboutWrap>
        )
      }

      {
        data && data.type === 'column_text_2' && (
          <Style.AboutWrap>
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <div className="title">{data?.column_title_1}</div>
                  <div className="text text--full">{data?.column_text_1}</div>
                </div>

                <div className="col-6">
                  <div className="title">{data?.column_title_2}</div>
                  <div className="text text--full">{data?.column_text_2}</div>
                </div>
              </div>
            </div>
          </Style.AboutWrap>
        )
      }

      {
        data && data.type === 'column_text_3' && (
          <Style.AboutWrap>
            <div className="container-fluid">
              <div className="row">
                <div className="col-4">
                  <div className="title">{data?.column_title_1}</div>
                  <div className="text">{data?.column_text_1}</div>
                </div>

                <div className="col-4">
                  <div className="title">{data?.column_title_2}</div>
                  <div className="text">{data?.column_text_2}</div>
                </div>

                <div className="col-4">
                  <div className="title">{data?.column_title_3}</div>
                  <div className="text">{data?.column_text_3}</div>
                </div>
              </div>
            </div>
          </Style.AboutWrap>
        )
      }
      {/*<Style.AboutWrap>*/}
      {/*  <div className="container-fluid">*/}
      {/*    <div className="row">*/}
      {/*      <div className="col-12">*/}
      {/*        <h2>Lorem ipsum dolor sit amet</h2>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="row">*/}
      {/*      <div className="col-4">*/}
      {/*        <div className="title">Lorem ipsum dolor sit</div>*/}
      {/*        <div className="text">*/}
      {/*          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis lacinia neque, a luctus eros pellentesque id. Phasellus gravida orci vel enim euismod maximus.*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className="col-4">*/}
      {/*        <div className="title">Lorem ipsum dolor sit</div>*/}
      {/*        <div className="text">*/}
      {/*          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis lacinia neque, a luctus eros pellentesque id. Phasellus gravida orci vel enim euismod maximus.*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className="col-4">*/}
      {/*        <div className="title">Lorem ipsum dolor sit</div>*/}
      {/*        <div className="text">*/}
      {/*          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis lacinia neque, a luctus eros pellentesque id. Phasellus gravida orci vel enim euismod maximus.*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</Style.AboutWrap>*/}
    </>
  )
}

export default About;