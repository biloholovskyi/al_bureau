import React from "react";

import * as Style from '../styled';
import photo from '../../../media/image/ava.svg';

const SingleQuote = () => {
  return (
    <Style.SingleQuoteWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="quoteText">
              <div className="title">
                Жизнь современного города настолько интенсивна и насыщена, что ограничить ее только светлым временем суток невозможно.
              </div>
              <div className="author">
                <img className={'photo'} src={photo} alt="image"/>
                <div className="name">Татьяна Прокофьева</div>
                <div className="position">Главный архитектор Казани</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style.SingleQuoteWrap>
  )
}

export default SingleQuote;