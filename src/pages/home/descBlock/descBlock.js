import React, {useState} from 'react'

import * as Style from '../styled';
import photo from './../../../media/image/photo.png';
import photo2 from './../../../media/image/photo2.png';

const DescBlock = ({home, data}) => {

  return (
    <Style.DeskBlockWrap id={'down'}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12"><h3 className={'small_title'}>Кто мы?</h3></div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <p className={'animText anim_no_hide'}>{data?.who_are_we}</p>
           <div className="photo_block">
             <img src={data?.who_are_img_1} alt="image"/>
             <img src={data?.who_are_img_2} alt="image"/>
           </div>
          </div>
        </div>

        {home && (
          <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12"><h3 className={'small_title'}>наш подход</h3></div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <p className={'animText anim_no_hide'}>Наделить концепцию смыслом, изменить пространство, подчеркнуть важное, внести характер и идею, придать чувство безопасности и комфорта.</p>
          </div>
        </div>
        )}

      </div>
    </Style.DeskBlockWrap>
  )
}

export default DescBlock;