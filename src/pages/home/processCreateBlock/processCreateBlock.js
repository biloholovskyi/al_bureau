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
                <div className="right order-lg-3 order-md-3">Пожелания заказчика, получение рабочих чертежей и документации, 3D-моделей, эскизного проекта. Изучение особенностей проекта, исторического облика и архитектурного соседства</div>
              </div>
              <div className="item">
                <div className="left order-lg-1 order-md-1">Разработка концепции освещения</div>
                <div className="dot order-lg-2 order-md-2 order-sm-first order-first"/>
                <div className="right order-lg-3 order-md-3">Разработка визуализации ночных видов, подбор оборудования, светотехнический расчёт</div>
              </div>
              <div className="item">
                <div className="left order-lg-1 order-md-1">Согласование концепции</div>
                <div className="dot order-lg-2 order-md-2 order-sm-first order-first"/>
                <div className="right order-lg-3 order-md-3">Выбор и утверждение окончательного варианта освещения)
                  Расстановка оборудования (расстановка светотехнического оборудования на рабочих чертежах (фасады, планы
                </div>
              </div>
              <div className="item">
                <div className="left order-lg-1 order-md-1">Финальная выдача концепции</div>
                <div className="dot order-lg-2 order-md-2 order-sm-first order-first"/>
                <div className="right order-lg-3 order-md-3">Готовый электротехнический проект с полным комплектом чертежей, на основе утвержденной концепции</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style.ProcessCreateBlockWrap>
  )
}

export default ProcessCreateBlock;