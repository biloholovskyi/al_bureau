import React from 'react';

import * as Style from '../styled'
import image from '../../../media/image/bigImg.png';

const SingleTitleAndImage = () => {
  return (
    <Style.SingleTitleAndImageWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12"><h2>Lorem ipsum dolor sit amet</h2></div>
        </div>
        <div className="row">
          <div className="col-12">
            <img src={image} className="img-container" />
          </div>
        </div>
      </div>
    </Style.SingleTitleAndImageWrap>
  )
}

export default SingleTitleAndImage;