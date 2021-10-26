import React from 'react'

import * as Style from '../styled';


const DescBlock2 = ({data}) => {

  return (
    <Style.DeskBlockWrap id={'down'}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12"><h3 className={'small_title'}>Что мы делаем?</h3></div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <div className="name_block">
              <p className={'animText anim_no_hide'}>{data?.wot_we_do}</p>
              <p className={'blur'}>{data?.wot_we_do}</p>
            </div>
            <div className="list">
              {
                data?.wotlist?.map((item, key) => {
                  return (
                    <div className="list_item" key={item.id}>
                      <div className="number">{`0${key + 1}`}</div>
                      <div className="text">{item.text}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </Style.DeskBlockWrap>
  )
}

export default DescBlock2;