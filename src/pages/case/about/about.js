import React from 'react'

import * as Style from '../styled';
import ApiService from "../../../services/api";

const api = new ApiService();

const About = ({data}) => {
  return (
    <>
      {
        data && data.type === 'banner' && (
          <Style.WrapperBannerTextBlock>
            <Style.AboutWrap className={'banner'}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <h2 className="column-main-title">{data?.banner_title}</h2>
                  </div>
                </div>
              </div>
            </Style.AboutWrap>

            <Style.BlockImage className={'block_image'}
                              src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data.banner}`} alt="image"/>
          </Style.WrapperBannerTextBlock>
        )
      }

      {
        data && data.type === 'banner_text' && (
          <Style.WrapperBannerTextBlock>
            <Style.AboutWrap>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="wrapper-text">
                      <h2 className="column-main-title">{data?.banner_title}</h2>
                      <div className="text text--full">{data?.banner_text}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Style.AboutWrap>

            <Style.BlockImage className={'block_image'}
                              src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data.banner}`} alt="image"/>
          </Style.WrapperBannerTextBlock>
        )
      }

      {
        data && data.type === 'column_text_1' && (
          <Style.AboutWrap>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <h2 className="column-main-title">{data?.main_title}</h2>
                  <div className="title">{data?.column_title_1}</div>
                  <div className="text text--full" dangerouslySetInnerHTML={{__html: data?.column_text_1}} />
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
                <div className="col-12">
                  <h2 className="column-main-title">{data?.main_title}</h2>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="title">{data?.column_title_1}</div>
                  <div className="text text--full" dangerouslySetInnerHTML={{__html: data?.column_text_1}} />
                </div>

                <div className="col-12 col-sm-6">
                  <div className="title">{data?.column_title_2}</div>
                  <div className="text text--full" dangerouslySetInnerHTML={{__html: data?.column_text_2}} />
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
                <div className="col-12">
                  <h2 className="column-main-title">{data?.main_title}</h2>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="title">{data?.column_title_1}</div>
                  <div className="text" dangerouslySetInnerHTML={{__html: data?.column_text_1}} />
                </div>

                <div className="col-12 col-sm-4">
                  <div className="title">{data?.column_title_2}</div>
                  <div className="text" dangerouslySetInnerHTML={{__html: data?.column_text_2}} />
                </div>

                <div className="col-12 col-sm-4">
                  <div className="title">{data?.column_title_3}</div>
                  <div className="text" dangerouslySetInnerHTML={{__html: data?.column_text_3}} />
                </div>
              </div>
            </div>
          </Style.AboutWrap>
        )
      }
    </>
  )
}

export default About;