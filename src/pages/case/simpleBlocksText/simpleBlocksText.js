import React from 'react'

import * as Style from '../styled';
import image from '../../../media/image/3Images.png';

const SimpleBlocksText = () => {
  return (
    <Style.SimpleBlockWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img src={image} alt="image"/>
          </div>
          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
            <div className="title">Lorem ipsum dolor sit amet, consectetur</div>
            <div className="text">
              Nullam blandit cursus justo, eu accumsan purus auctor et. Duis arcu purus, varius fermentum lectus ac,
              convallis convallis ipsum. Duis ut metus at leo lacinia commodo vitae eu eros. Proin id turpis
              scelerisque, bibendum arcu quis, aliquam nunc. Fusce fringilla ultrices vehicula.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
            <div className="title">Lorem ipsum dolor sit amet, consectetur</div>
            <div className="text">
              Nullam blandit cursus justo, eu accumsan purus auctor et. Duis arcu purus, varius fermentum lectus ac,
              convallis convallis ipsum. Duis ut metus at leo lacinia commodo vitae eu eros. Proin id turpis
              scelerisque, bibendum arcu quis, aliquam nunc. Fusce fringilla ultrices vehicula.
            </div>
          </div>
          <div className="col-6">
            <img src={image} alt="image"/>
          </div>
        </div>
      </div>
    </Style.SimpleBlockWrap>
  )
}

export default SimpleBlocksText;