import React from "react";

import * as Style from '../styled';

const ProcessCreateBlock = () => {
  return (
    <Style.ProcessCreateBlockWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12"><h3 className={'small_title'}>Процесс создания<br/>концепции</h3></div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <div className="infoLine">
              <div className="line"/>
              <div className="item">
                <div className="left order-lg-1 order-md-1">Сбор информации о проекте</div>
                <div className="dot order-lg-2 order-md-2 order-sm-first order-first"/>
                <div className="right order-lg-3 order-md-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ex dui. Duis
                  semper ac ligula eget pellentesque. Donec at nulla ipsum. Quisque in risus feugiat, consectetur augue
                  nec, pretium enim.
                </div>
              </div>
              <div className="item">
                <div className="left order-lg-1 order-md-1">Разработка концепции освещения</div>
                <div className="dot order-lg-2 order-md-2 order-sm-first order-first"/>
                <div className="right order-lg-3 order-md-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ex dui. Duis
                  semper ac ligula eget pellentesque. Donec at nulla ipsum. Quisque in risus feugiat, consectetur augue
                  nec, pretium enim.
                </div>
              </div>
              <div className="item">
                <div className="left order-lg-1 order-md-1">Согласование концепции</div>
                <div className="dot order-lg-2 order-md-2 order-sm-first order-first"/>
                <div className="right order-lg-3 order-md-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ex dui. Duis
                  semper ac ligula eget pellentesque. Donec at nulla ipsum. Quisque in risus feugiat, consectetur augue
                  nec, pretium enim.
                </div>
              </div>
              <div className="item">
                <div className="left">Расстановка оборудования</div>
                <div className="dot order-lg-2 order-md-2 order-sm-first order-first"/>
                <div className="right order-lg-3 order-md-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ex dui. Duis
                  semper ac ligula eget pellentesque. Donec at nulla ipsum. Quisque in risus feugiat, consectetur augue
                  nec, pretium enim.
                </div>
              </div>
              <div className="item">
                <div className="left order-lg-1 order-md-1">Финальная выдача концепции</div>
                <div className="dot order-lg-2 order-md-2 order-sm-first order-first"/>
                <div className="right order-lg-3 order-md-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ex dui. Duis
                  semper ac ligula eget pellentesque. Donec at nulla ipsum. Quisque in risus feugiat, consectetur augue
                  nec, pretium enim.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style.ProcessCreateBlockWrap>
  )
}

export default ProcessCreateBlock;