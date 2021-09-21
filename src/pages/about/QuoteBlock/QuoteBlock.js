import React from 'react';

import photo from '../../../media/image/author.png';
import * as Style from '../styled';

const QuoteBlock = () => {
  return (
    <Style.QuoteBlockWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12"><h3 className={'small_title'}>Заголовок Lorem ipsum<br/> dolor
            sit amet</h3></div>
          <div className={'col-lg-9 col-md-9 col-sm-12 col-12'}>
            <div className="quoteBlock">
              <img src={photo} alt="image" className={'photo'}/>
              <div className="text">Мы хотим, чтобы каждый наш проект был уникальным. Мы щепетильны в работе и
                требовательны к себе. Именно поэтому мы стремимся работать и развиваться в кругу профессионалов и
                специалистов, наполненных креативом и смелыми идеями.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style.QuoteBlockWrap>
  )
}

export default QuoteBlock;