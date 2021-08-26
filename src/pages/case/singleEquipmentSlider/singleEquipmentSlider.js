import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"

import * as Style from '../styled';

import './swiper.min.css'
import './navigation.min.css';
import './style.css'

import SwiperCore, {Navigation, Pagination} from 'swiper';
import image from "../../../media/image/sliderimg.png";
// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const SingleEquipmentSlider = () => {
  return (
    <Style.SingleEquipmentSliderWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              navigation={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              className={'swiper-container3'}
              // pagination={{
              //   type: 'fraction',
              // }}
            >
              <SwiperSlide className={'swipeSlide3'}>
                <div className="title_block">
                  <img src={image} alt="image"/>
                  <div className="nameEquip">Roof IP 65</div>
                </div>
                <div className="textBlock">
                  <div className="block">
                    <div className="block_item">
                      <div className="block_title">Корпус</div>
                      <div className="block_text">
                        Литой алюминиевый корпус. Внутренний рассеиватель из закалённого стекла с матовой поверхностью,
                        задний отсек из пластмассы, винты из нержавеющей стали.
                      </div>
                    </div>
                    <div className="block_item">
                      <div className="block_title">Источники света</div>
                      <div className="block_text">
                        Компактные люминесцентные лампы TC-D мощностью 18W и 26W.
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="block_item">
                      <div className="block_title">Питание</div>
                      <div className="block_text">
                        Электромагнитный балласт, размещённый в корпусе светильника.
                      </div>
                    </div>
                    <div className="block_item">
                      <div className="block_title">Светораспределение</div>
                      <div className="block_text">
                        Асимметричное.
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="block_item">
                      <div className="block_title">Аксессуары</div>
                      <div className="block_text">
                        Обязательная для применения монтажная
                        коробка из металла для бетона.
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={'swipeSlide3'}>
                <div className="title_block">
                  <img src={image} alt="image"/>
                  <div className="nameEquip">Roof IP 75</div>
                </div>
                <div className="textBlock">
                  <div className="block">
                    <div className="block_item">
                      <div className="block_title">Корпус</div>
                      <div className="block_text">
                        Литой алюминиевый корпус. Внутренний рассеиватель из закалённого стекла с матовой поверхностью,
                        задний отсек из пластмассы, винты из нержавеющей стали.
                      </div>
                    </div>
                    <div className="block_item">
                      <div className="block_title">Источники света</div>
                      <div className="block_text">
                        Компактные люминесцентные лампы TC-D мощностью 18W и 26W.
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="block_item">
                      <div className="block_title">Питание</div>
                      <div className="block_text">
                        Электромагнитный балласт, размещённый в корпусе светильника.
                      </div>
                    </div>
                    <div className="block_item">
                      <div className="block_title">Светораспределение</div>
                      <div className="block_text">
                        Асимметричное.
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="block_item">
                      <div className="block_title">Аксессуары</div>
                      <div className="block_text">
                        Обязательная для применения монтажная
                        коробка из металла для бетона.
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={'swipeSlide3'}>
                <div className="title_block">
                  <img src={image} alt="image"/>
                  <div className="nameEquip">Roof IP 85</div>
                </div>
                <div className="textBlock">
                  <div className="block">
                    <div className="block_item">
                      <div className="block_title">Корпус</div>
                      <div className="block_text">
                        Литой алюминиевый корпус. Внутренний рассеиватель из закалённого стекла с матовой поверхностью,
                        задний отсек из пластмассы, винты из нержавеющей стали.
                      </div>
                    </div>
                    <div className="block_item">
                      <div className="block_title">Источники света</div>
                      <div className="block_text">
                        Компактные люминесцентные лампы TC-D мощностью 18W и 26W.
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="block_item">
                      <div className="block_title">Питание</div>
                      <div className="block_text">
                        Электромагнитный балласт, размещённый в корпусе светильника.
                      </div>
                    </div>
                    <div className="block_item">
                      <div className="block_title">Светораспределение</div>
                      <div className="block_text">
                        Асимметричное.
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="block_item">
                      <div className="block_title">Аксессуары</div>
                      <div className="block_text">
                        Обязательная для применения монтажная
                        коробка из металла для бетона.
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </Style.SingleEquipmentSliderWrap>
  )
}

export default SingleEquipmentSlider;