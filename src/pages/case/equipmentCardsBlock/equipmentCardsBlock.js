import React from "react";

import *  as Style from '../styled';
import image from "../../../media/image/sliderimg.png";

const EquipmentCardsBlock = () => {
  return (
    <Style.EquipmentCardsBlockWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2>Оборудование</h2>
          </div>
          <div className="col-12">
            <div className="cardsBlock">
              <div className="card">
                <img className={'image'} src={image} alt="image"/>
                <div className="name2">Roof IP 65</div>
                <div className="text2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue erat,
                  a consectetur lorem placerat ac
                </div>
              </div>
              <div className="card">
                <img className={'image'} src={image} alt="image"/>
                <div className="name2">Roof IP 65</div>
                <div className="text2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue erat,
                  a consectetur lorem placerat ac
                </div>
              </div>
              <div className="card">
                <img className={'image'} src={image} alt="image"/>
                <div className="name2">Roof IP 65</div>
                <div className="text2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue erat,
                  a consectetur lorem placerat ac
                </div>
              </div>
              <div className="card">
                <img className={'image'} src={image} alt="image"/>
                <div className="name2">Roof IP 65</div>
                <div className="text2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue erat,
                  a consectetur lorem placerat ac
                </div>
              </div>
              <div className="card">
                <img className={'image'} src={image} alt="image"/>
                <div className="name2">Roof IP 65</div>
                <div className="text2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue erat,
                  a consectetur lorem placerat ac
                </div>
              </div>
              <div className="card">
                <img className={'image'} src={image} alt="image"/>
                <div className="name2">Roof IP 65</div>
                <div className="text2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue erat,
                  a consectetur lorem placerat ac
                </div>
              </div>
              <div className="card">
                <img className={'image'} src={image} alt="image"/>
                <div className="name2">Roof IP 65</div>
                <div className="text2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue erat,
                  a consectetur lorem placerat ac
                </div>
              </div>
              <div className="card">
                <img className={'image'} src={image} alt="image"/>
                <div className="name2">Roof IP 65</div>
                <div className="text2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue erat,
                  a consectetur lorem placerat ac
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style.EquipmentCardsBlockWrap>
  )
}

export default EquipmentCardsBlock;

