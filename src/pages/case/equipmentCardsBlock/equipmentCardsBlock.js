import React from "react";

import *  as Style from '../styled';

import ApiService from "../../../services/api";

const api = new ApiService()

const EquipmentCardsBlock = ({data}) => {
  return (
    <Style.EquipmentCardsBlockWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2>Оборудование</h2>
          </div>
          <div className="col-12">
            <div className="cardsBlock">

              {
                data && data.map(item => {
                  return (
                    <div className="card" key={item.id}>
                      <img className={'image'} src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${item?.image}`} alt="image"/>
                      <div className="name2">{item?.name}</div>
                      <div className="text2 text-center">{item?.desc}</div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>
    </Style.EquipmentCardsBlockWrap>
  )
}

export default EquipmentCardsBlock;

