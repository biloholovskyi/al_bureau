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
  data?.forEach(image => {
    if (count < 2) {
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
    <Style.PalletWrapper>

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

              {/*<div className="pallet-col">*/}
              {/*  <img onClick={() => showPopup('https://images.wallpaperscraft.com/image/single/small_green_flower_yellow_4560_225x300.jpg')} src="https://images.wallpaperscraft.com/image/single/small_green_flower_yellow_4560_225x300.jpg" alt="image"/>*/}
              {/*  <img src="data:image/jpeg;base64,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" alt="image"/>*/}
              {/*</div>*/}

              {/*<div className="pallet-col">*/}
              {/*  <img src="https://images.wallpaperscraft.com/image/single/small_green_flower_yellow_4560_225x300.jpg" alt="image"/>*/}
              {/*  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUIBwgVFQkWGRwaFxgYFxodHhgZIB0iHB0pHxofHzQjHyAnJxsfIjEiJSs3Mi4xGCAzODUvNzQtLjcBCgoKDQwNGg8PGjcdHSU0KzMrNzE3Nys4NzU3LSswKy03Ny4vNzU3NzcrKysrLCsrKzArKzU3Kzc3MSs3Kzc1N//AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUCBAYBB//EADYQAQABAwIDBgMFCAMAAAAAAAABAgMRBCESMUEFEyJRYZEGgbEjcaHB8BQyQnLR0uHxJDOy/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAMC/8QAGhEBAAIDAQAAAAAAAAAAAAAAAAIRAQMxEv/aAAwDAQACEQMRAD8A+GgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABG7Lgq8gYiTuqvJhwznGAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJNPbi7fpt1VYpmYiZRvYmYnMTuC373SXNDVTFimKtpomI35xnM852nr1e2OzdVqbc16TTTNFPOcxH1nf5NTiiqzx0U+Kc7dI/X9FrpqNff0VE2r/Dp+WP4d8RMzPPnvv6glsdiXKNJVF6iYvRyxv7xMfm0L3Z+oooqq4aZoo/exMTNP3xnMey/iz2je082rmqzE5jMR09MTzjqo+0NHRopm7YvYufrb0z5SCG1qbFjTfZ6Sib2fFVXHFHpERPLbqr9XFEX5m3TimcTjyzGcfLOE8TTTpc4zjGY82pXVNdc11c5BiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADc01vvNPtVjE7t3sfV1UXos6i9/x94xOeuOvSFZp9RVZnaNpXPZ9VmrVRM0xw17b9J58vPyB01OhvcExRrK4tzO9OImqM84irynbf0c78V1TOqiLdMxGMTzxmI+u2M+jpab+qmjht0046VTOPen/Kj12q0Woqiz2nTVF+neqqjfEflG+cY+YKG5TFOjmKp/3+tmi3e0q7VNzudNdiqxG8TjHv8A4aQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACfTXKIrim/wD9fnjOI+78UNNM1VYjm6X4V0+lv6qbeqs01THipiennt12mnn5z6grqtVdpq7mnX1VafrVHFiPeM/J5rO04/ZZ0Wioimx/FVjxXP5p/HDu7untft9NXdRyxynlifLb3cr8W0aa1qYsaXT007cVUxHOeUe0RIOaFpo7UU6PvK4jGZjMx5dMzz91ff4O9nuv3M7M4leaW2afEIyvqMBpEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNpd7nD5/r6ZXPYeoiz2pbuVR4ZnE/OPyzTHyUVucVt63dqo+1onxR4o9MTxf2g+muG+JblNztiuIiOGmIj74iIz/6qj5O1tVResRXE7TETt6x0fOtXeoq1VdyJzTNUzH8uc/Sr8Aa+qrpp08WKZ+04pmr1jEcP0n3abKuriryxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATWbvDPi5f6/ohAd52f2pRR8K97NUd5Rbmnn1jw0/l7uFmuZjHRlTfuU2ZsxV9nO8wjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=" alt="image"/>*/}
              {/*</div>*/}

              {/*<div className="pallet-col">*/}
              {/*  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjROMoVomsDvRFoaOztctELAH_LJNdK8OOyQ&usqp=CAU" alt="image"/>*/}
              {/*  <img src="https://images.wallpaperscraft.com/image/single/small_green_flower_yellow_4560_225x300.jpg" alt="image"/>*/}
              {/*</div>*/}

              {/*<div className="pallet-col">*/}
              {/*  <img src="https://images.wallpaperscraft.com/image/single/small_green_flower_yellow_4560_225x300.jpg" alt="image"/>*/}
              {/*  <img src="https://images.wallpaperscraft.com/image/single/small_green_flower_yellow_4560_225x300.jpg" alt="image"/>*/}
              {/*</div>*/}
            </Style.Pallet>
          </div>
        </div>
      </div>
    </Style.PalletWrapper>
  )
}

export default PalletImage