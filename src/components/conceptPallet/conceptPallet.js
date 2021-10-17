import React, {useState} from "react";

import * as Style from '../styled';

const ConceptPallet = () => {
  const [block, setBlock] = useState([
    {number: '01' , name: 'Электротехнический проект'},
    {number: '02' , name: 'Поставка оборудования'},
    {number: '03' , name: 'Монтаж, шеф – монтаж'},
    {number: '04' , name: 'Программирование систем динамического освещения'},
    {number: '05' , name: 'Пусконаладка ввод в эксплуатацию'},
    {number: '06' , name: 'Сервисное обслуживание'},
  ])
  return (
    <Style.Pallet>
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
    </Style.Pallet>
  )
}

export default ConceptPallet;