import React from 'react'

import * as Style from '../styled';
import image from '../../../media/image/3Images.png';
import image2 from '../../../media/image/444.png';
import image3 from '../../../media/image/image222.png';
import image4 from '../../../media/image/image333.png';

const SimpleBlocksText = () => {
  return (
    <Style.SimpleBlockWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img className={'simple_image'} src={image} alt="image"/>
          </div>
          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
            <div className="title animText anim_no_hide">Lorem ipsum dolor sit amet, consectetur</div>
            <div className="text">
              Nullam blandit cursus justo, eu accumsan purus auctor et. Duis arcu purus, varius fermentum lectus ac,
              convallis convallis ipsum. Duis ut metus at leo lacinia commodo vitae eu eros. Proin id turpis
              scelerisque, bibendum arcu quis, aliquam nunc. Fusce fringilla ultrices vehicula.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 d-flex flex-column justify-content-center">
            <div className="title ms-0 animText anim_no_hide">Lorem ipsum dolor sit amet, consectetur</div>
            <div className="text ms-0">
              Nullam blandit cursus justo, eu accumsan purus auctor et. Duis arcu purus, varius fermentum lectus ac,
              convallis convallis ipsum. Duis ut metus at leo lacinia commodo vitae eu eros. Proin id turpis
              scelerisque, bibendum arcu quis, aliquam nunc. Fusce fringilla ultrices vehicula.
            </div>
          </div>
          <div className="col-6">
            <img className={'simple_image ms-4'} src={image2} alt="image"/>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="image_container">
              <div className="image_row">
                <img src={image3} alt="image"/>
              </div>
              <div className="image_row">
                <img src={image4} alt="image"/>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
            <div className="title animText anim_no_hide">Lorem ipsum dolor sit amet, consectetur</div>
            <div className="text">
              Nullam blandit cursus justo, eu accumsan purus auctor et. Duis arcu purus, varius fermentum lectus ac,
              convallis convallis ipsum. Duis ut metus at leo lacinia commodo vitae eu eros. Proin id turpis
              scelerisque, bibendum arcu quis, aliquam nunc. Fusce fringilla ultrices vehicula.
            </div>
          </div>
        </div>
      </div>
    </Style.SimpleBlockWrap>
  )
}

export default SimpleBlocksText;