import React from "react";

import * as Style from '../styled';

const ProcessCreateBlock = () => {
  return (
    <Style.ProcessCreateBlockWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3"><h3 className={'small_title'}>Процесс создания<br/>концепции</h3></div>
          <div className="col-9">
            <div className="infoLine">
              <div className="line"/>
              <div className="item">
                <div className="left">Сбор информации о проекте</div>
                <div className="dot"/>
                <div className="right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ex dui. Duis
                  semper ac ligula eget pellentesque. Donec at nulla ipsum. Quisque in risus feugiat, consectetur augue
                  nec, pretium enim.
                </div>
              </div>
              <div className="item">
                <div className="left">Разработка концепции освещения</div>
                <div className="dot"/>
                <div className="right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ex dui. Duis
                  semper ac ligula eget pellentesque. Donec at nulla ipsum. Quisque in risus feugiat, consectetur augue
                  nec, pretium enim.
                </div>
              </div>
              <div className="item">
                <div className="left">Согласование концепции</div>
                <div className="dot"/>
                <div className="right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ex dui. Duis
                  semper ac ligula eget pellentesque. Donec at nulla ipsum. Quisque in risus feugiat, consectetur augue
                  nec, pretium enim.
                </div>
              </div>
              <div className="item">
                <div className="left">Расстановка оборудования</div>
                <div className="dot"/>
                <div className="right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ex dui. Duis
                  semper ac ligula eget pellentesque. Donec at nulla ipsum. Quisque in risus feugiat, consectetur augue
                  nec, pretium enim.
                </div>
              </div>
              <div className="item">
                <div className="left">Финальная выдача концепции</div>
                <div className="dot"/>
                <div className="right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ex dui. Duis
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