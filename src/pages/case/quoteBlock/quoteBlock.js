import React from 'react'

import * as Style from '../styled';
import ava from '../../../media/image/ava.svg';

const QuoteBlock = () => {
  return (
    <Style.QuoteBlockWrap id={'down'}>
      <div className="bg" />
      <div className="container-fluid" style={{zIndex: 10}}>
        <div className="row">
          <div className="col-8">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis lacinia neque, a luctus eros pellentesque id.</h2>
            <div className="author">
              <img className="photo" src={ava} />
              <div className="info">
                <div className="nam">Jane Doe</div>
                <div className="position">Position</div>
              </div>
            </div>
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