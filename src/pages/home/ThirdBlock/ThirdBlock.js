import React, {useState} from "react";

import * as Style from '../styled';

const ThirdBlock = () => {
  const [block, setBlock] = useState([
    {number: '01' , name: 'Идеи архитектора'},
    {number: '02' , name: 'История объекта'},
    {number: '03' , name: 'Архитектурный баланс'},
    {number: '04' , name: 'Идеи архитектора'},
    {number: '05' , name: 'История объекта'},
    {number: '06' , name: 'Архитектурный баланс'},
  ])
  return (
    <Style.ThirdBlockWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12"><h3 className={'small_title'}>Что мы учитываем при<br/>создании концепции:</h3></div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <div className="blocks">
              {
                block.map((item, key) => {
                  return (
                    <div key={key} className="item">
                      <div className="number">{item.number}</div>
                      <div className="name">{item.name}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </Style.ThirdBlockWrap>
  )
}

export default ThirdBlock;