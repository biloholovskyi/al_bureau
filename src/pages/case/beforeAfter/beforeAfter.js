import React, {useState, useEffect, useRef} from 'react'

import * as Style from './styled'

import ApiService from "../../../services/api";
const api = new ApiService();

const BeforeAfter = ({data}) => {
  const [fullWidth, setFullWidth] = useState(0)
  const [currentWidth, setCurrentWidth] = useState(0);
  const [statusMove, setStatusMove] = useState(false)

  const wrapperRef = useRef(null)

  useEffect(() => {
    //  получаем ширину врапера
    const wrapperWidth = wrapperRef.current.clientWidth;
    setCurrentWidth(wrapperWidth / 2)
    setFullWidth(wrapperWidth);
  }, [])


  const move = (e) => {
    let change = currentWidth + (e.clientX - currentWidth) - 140;

    if(e.type === 'touchmove') {
      change = currentWidth + (e.touches[0].clientX - currentWidth)
    }

    if(statusMove) {
      setCurrentWidth(change)
    }
  }

  const down = (e) => {
    setStatusMove(true);
  }

  const up = (e) => {
    setTimeout(() => {
      if (statusMove) {
        setStatusMove(false)
      }
    }, 100)
  }

  return (
    <Style.Wrapper
      className={'case-main-block'}
      onMouseMove={(e) => move(e)}
      onTouchMove={(e) => move(e)}
      onClick={(e) => up(e)}
      onTouchCancel={(e) => up(e)}
      onMouseDown={(e) => e.preventDefault()}
      onTouchStart={(e) => e.preventDefault()}
    >
      <div className="container-fluid" onTouchStart={(e) => down(e)}>
        <div className="row">
          <div className="col-12">
            <h2 className="beforeAfter__title">{data.image_slider_title}</h2>
            <Style.ImageWrapper full={fullWidth} current={currentWidth} ref={wrapperRef}>
              <div className="image-item">
                <img src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data?.before}`} alt="image"/>
              </div>

              <div className="image-item">
                <img src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${data?.after}`} alt="image"/>
                <div
                  draggable={false}
                  className="delimiter"
                  onMouseDown={(e) => down(e)}
                  onTouchStart={(e) => down(e)}
                />
              </div>
            </Style.ImageWrapper>
          </div>
        </div>
      </div>
    </Style.Wrapper>
  )
}

export default BeforeAfter;