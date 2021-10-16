import React, {useState, useEffect} from 'react'

import PopupImage from "../../../components/popupImage/popupImage";

import * as Style from './styled'

import ApiService from "../../../services/api";

const api = new ApiService()

const PalletImage = ({data, title}) => {
  const [popup, setPopup] = useState(null);
  const [counter, setCounter] = useState(0);

  const showPopup = (url) => {
    setPopup(url);
  }

  const closePopup = () => {
    setPopup(false);
  }

  let rows = [];

  let count = 0;
  const index = Math.ceil(data?.length / 4);
  data?.forEach(image => {
    if (count < index) {
      if (rows.length > 0) {
        rows[rows.length - 1].push(image);
      } else {
        rows.push([image])
      }
    } else {
      count = 0;
      rows.push([image])
    }

    count++;
  })

  return (
    <Style.PalletWrapper className={'case-main-block'}>

      {popup && <PopupImage image={popup} close={closePopup}/>}

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="pallet-title">{title}</h1>

            <Style.Pallet>
              {
                rows?.map(block => {

                  return (
                    <div className="pallet-col">
                      {
                        block.map(image => {
                          return <img onClick={() => showPopup(`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${image?.image}`)} src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${image?.image}`} alt="image"/>
                        })
                      }
                    </div>
                  )

              })
              }
            </Style.Pallet>
          </div>
        </div>
      </div>
    </Style.PalletWrapper>
  )
}

export default PalletImage