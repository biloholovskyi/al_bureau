import React from 'react'

import * as Style from '../styled';


const DescBlock2 = () => {

  return (
    <Style.DeskBlockWrap id={'down'}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12"><h3 className={'small_title'}>Что мы делаем?</h3></div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <div className="name_block">
              <p className={'animText anim_no_hide'}>мы специализируемся на предоставлении современных
                и индивидуальных решений в сфере освещения.</p>
              <p className={'blur'}>мы специализируемся на предоставлении современных
                и индивидуальных решений в сфере освещения.</p>
            </div>
            <div className="list">
              <div className="list_item">
                <div className="number">01</div>
                <div className="text">Разработка концепции освещения</div>
              </div>
              <div className="list_item">
                <div className="number">02</div>
                <div className="text">Проектирования</div>
              </div>
              <div className="list_item">
                <div className="number">03</div>
                <div className="text">Поставка светового оборудования</div>
              </div>
              <div className="list_item">
                <div className="number">04</div>
                <div className="text">Логистика</div>
              </div>
              <div className="list_item">
                <div className="number">05</div>
                <div className="text">Строительно монтажные работы</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style.DeskBlockWrap>
  )
}

export default DescBlock2;