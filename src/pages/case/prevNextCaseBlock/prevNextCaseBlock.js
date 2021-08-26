import React from "react";

import * as Style from '../styled';
import case1 from '../../../media/image/slide2.png';
import case2 from '../../../media/image/slide1.png';

const PrevNextCaseBlock = () => {
  return (
    <Style.PrevNextCaseBlockWrap>
      <div className="caseItem">
        <div className="blur" />
        <img src={case1} alt="image"/>
        <div className="text">
          <div className="title">Предыдущий кейс</div>
          <div className="name">Набережная Кабан</div>
        </div>
      </div>
      <div className="caseItem">
        <div className="blur" />
        <img src={case2} alt="image"/>
        <div className="text">
          <div className="title">Следуюющий кейс</div>
          <div className="name">ЖК Шаляпина</div>
        </div>
      </div>
    </Style.PrevNextCaseBlockWrap>
  )
}

export default PrevNextCaseBlock;