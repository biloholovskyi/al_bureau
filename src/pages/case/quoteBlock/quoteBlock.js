import React from 'react'

import * as Style from '../styled';
import ApiService from "../../../services/api";

const api = new ApiService();

const QuoteBlock = ({data}) => {
  return (
    <Style.QuoteBlockWrap id={'down'}>
      <div className="bg" />
      <div className="container-fluid" style={{zIndex: 10}}>
        <div className="row">
          <div className="col-8">
            <h2>{data && data.quote}</h2>

            {
              data && data.quote_name && data.quote_post && data.quote_photo && (
                <div className="author">
                  <img className="photo" alt={'photo'} src={data && data.quote_photo && `${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data.quote_photo}`} />
                  <div className="info">
                    <div className="nam">{data && data.quote_name && data.quote_name}</div>
                    <div className="position">{data && data.quote_post && data.quote_post}</div>
                  </div>
                </div>
              )
            }

          </div>
          <div className="col-4">
            <div className="quote_list">
              <div className="quote_list--item d-flex align-items-center">
                <div className="number">01</div>
                <div className="text">Phasellus gravida orci</div>
              </div>
              <div className="quote_list--item d-flex align-items-center">
                <div className="number">02</div>
                <div className="text">Nulla accumsan ligula pulvinar</div>
              </div>
              <div className="quote_list--item d-flex align-items-center">
                <div className="number">03</div>
                <div className="text">Nam eget erat turpis</div>
              </div>
              <div className="quote_list--item d-flex align-items-center">
                <div className="number">04</div>
                <div className="text">Fusce eu consequat mi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style.QuoteBlockWrap>
  )
}

export default QuoteBlock;