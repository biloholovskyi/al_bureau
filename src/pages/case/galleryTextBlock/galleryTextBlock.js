import React from 'react'

import * as Style from '../styled';
import image from '../../../media/image/smallImg.png';
import image2 from '../../../media/image/smallImg2.png';
import image3 from '../../../media/image/smallImg3.png';
import image4 from '../../../media/image/smallImg4.png';
const GalleryTextBlock = () => {
  return (
    <Style.GalleryTextBlockWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-5">
            <h2 className={'title'}>Lorem ipsum dolor sit amet, consecte</h2>
            <p className={'text'}>Nullam blandit cursus justo, eu accumsan purus auctor et. Duis arcu purus, varius fermentum lectus ac,
              convallis convallis ipsum. Duis ut metus at leo lacinia commodo vitae eu eros. Proin id turpis
              scelerisque, bibendum arcu quis, aliquam nunc. Fusce fringilla ultrices vehicula.</p>
          </div>
          <div className="col-7">
            <div className="image_container">
              <div className="image_row">
                <img src={image} alt="image"/>
                <img src={image2} alt="image"/>
                <img src={image3} alt="image"/>
                <img src={image3} alt="image"/>
                <img src={image4} alt="image"/>
              </div>
            </div>
          </div>
        </div>
        <div className="row row2">
          <div className="col-7">
            <div className="image_container">
              <div className="image_row">
                <img src={image} alt="image"/>
                <img src={image3} alt="image"/>
                <img src={image2} alt="image"/>
                <img src={image4} alt="image"/>
                <img src={image3} alt="image"/>
              </div>
            </div>
          </div>
          <div className="col-5">
            <h2 className={'title'}>Lorem ipsum dolor sit amet, consecte</h2>
            <p className={'text'}>Nullam blandit cursus justo, eu accumsan purus auctor et. Duis arcu purus, varius fermentum lectus ac,
              convallis convallis ipsum. Duis ut metus at leo lacinia commodo vitae eu eros. Proin id turpis
              scelerisque, bibendum arcu quis, aliquam nunc. Fusce fringilla ultrices vehicula.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <h2 className={'title'}>Lorem ipsum dolor sit amet, consecte</h2>
          <div className="list">
            <div className={'list_item active'}>Item 2 Lorem ipsum</div>
            <div className={'list_item'}>Item 2 Lorem ipsum</div>
            <div className={'list_item'}>Item 2 Lorem ipsum</div>
            <div className={'list_item'}>Item 2 Lorem ipsum</div>
            <div className={'list_item'}>Item 2 Lorem ipsum</div>
            <div className={'list_item'}>Item 2 Lorem ipsum</div>
          </div>
          </div>
          <div className="col-7">
            <div className="image_container">
              <div className="image_row">
                <img src={image} alt="image"/>
                <img src={image2} alt="image"/>
                <img src={image3} alt="image"/>
                <img src={image3} alt="image"/>
                <img src={image4} alt="image"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style.GalleryTextBlockWrap>
  )
}

export default GalleryTextBlock;