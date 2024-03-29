import React from 'react';

import * as Style from '../styled';

const TextCenterBlock = ({data}) => {
  return (
    <Style.TextCenterBlockWrap className={'case-main-block'}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center animText anim_no_hide">{data?.description_title}</h2>
          </div>
          <div className="col-12">
            <p>{data?.description}</p>
          </div>
        </div>
      </div>
    </Style.TextCenterBlockWrap>
  )
}

export default TextCenterBlock;