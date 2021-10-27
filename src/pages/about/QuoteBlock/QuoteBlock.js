import React from 'react';

import photo from '../../../media/image/author.png';
import * as Style from '../styled';

const QuoteBlock = ({data}) => {
  return (
    <Style.QuoteBlockWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12"><h3 className={'small_title'}>{data?.name_person}<br/>{data?.place}
          </h3></div>
          <div className={'col-lg-9 col-md-9 col-12'}>
            <div className="quoteBlock">
              <img src={data?.image_director} alt="image" className={'photo'}/>
              <div className="text">{data?.quote}</div>
            </div>
          </div>
        </div>
      </div>
    </Style.QuoteBlockWrap>
  )
}

export default QuoteBlock;