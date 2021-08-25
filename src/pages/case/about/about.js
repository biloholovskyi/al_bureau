import React from 'react'

import * as Style from '../styled';
import image from '../../../media/image/caseImage.png';

const About = () => {
  return (
    <>
      <Style.AboutWrap>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h2>Lorem ipsum dolor sit amet</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="title">Lorem ipsum dolor sit</div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis lacinia neque, a luctus eros pellentesque id. Phasellus gravida orci vel enim euismod maximus.
              </div>
            </div>
            <div className="col-4">
              <div className="title">Lorem ipsum dolor sit</div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis lacinia neque, a luctus eros pellentesque id. Phasellus gravida orci vel enim euismod maximus.
              </div>
            </div>
            <div className="col-4">
              <div className="title">Lorem ipsum dolor sit</div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis lacinia neque, a luctus eros pellentesque id. Phasellus gravida orci vel enim euismod maximus.
              </div>
            </div>
          </div>
        </div>
      </Style.AboutWrap>
      <Style.BlockImage className={'block_image'} src={image} alt="image"/>
    </>
  )
}

export default About;