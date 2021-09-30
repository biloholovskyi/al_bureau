import React, {useState, useEffect} from 'react'

import * as Style from '../styled';
import ApiService from "../../../services/api";

const api = new ApiService();

const QuoteBlock = ({data}) => {
  const [sections, setSections] = useState([])

  useEffect(() => {
    const needSections = data?.section.filter(section => section.type === 'section');
    setSections(needSections)
  }, [data])


  return (
    <Style.QuoteBlockWrap id={'down'}>
      <div className="bg" />
      <div className="container-fluid" style={{zIndex: 10}}>
        <div className="row">
          <div className="col-8">
            <h2>{data && data.quote}</h2>

            {
              data && data.quote_name && data.quote_post && data.quote_photo && (
                <div className="author">
                  <img className="photo" alt={'photo'} src={data && data.quote_photo && `${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data.quote_photo}`} />
                  <div className="info">
                    <div className="nam">{data && data.quote_name && data.quote_name}</div>
                    <div className="position">{data && data.quote_post && data.quote_post}</div>
                  </div>
                </div>
              )
            }

          </div>
          <div className="col-4">
            <div className="quote_list">

              {
                sections?.map((section, key) => {
                  const number = '0' + (key + 1);

                  return (
                    <a href={'#section_' + section.id} key={key} className="quote_list--item d-flex align-items-center">
                      <div className="number">{number}</div>
                      <div className="text">{section.name_section}</div>
                    </a>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </Style.QuoteBlockWrap>
  )
}

export default QuoteBlock;