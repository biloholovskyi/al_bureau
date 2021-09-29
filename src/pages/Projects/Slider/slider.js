import React, {useRef, useEffect} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"
import {NavLink} from "react-router-dom";


import './style.css'
import image from '../../../media/image/slide.png';
import image2 from '../../../media/image/slide1.png';
import image3 from '../../../media/image/slide2.png';
import image4 from '../../../media/image/slide3.png';

import SwiperCore, {Mousewheel} from 'swiper';

// install Swiper modules
SwiperCore.use([Mousewheel]);

const test = [
  {name: 'МЕДИЦИНСКИЙ ЦЕНТР', city: 'г. Казань ул. Подлужная', date: 2020, img: image},
  {name: 'Сургутнефтегаз', city: 'г. Казань ул. Подлужная', date: 2020, img: image2},
  {name: 'Клубный Дом «Шаляпин»', city: 'г. Казань ул. Подлужная', date: 2020, img: image3},
  {name: 'офисный комплекс «urban»', city: 'г. Казань ул. Подлужная', date: 2020, img: image4},
  {name: 'МЕДИЦИНСКИЙ ЦЕНТР', city: 'г. Казань ул. Подлужная', date: 2020, img: image2},
  {name: 'Сургутнефтегаз', city: 'г. Казань ул. Подлужная', date: 2020, img: image3},
  {name: 'Клубный Дом «Шаляпин»', city: 'г. Казань ул. Подлужная', date: 2020, img: image},
  {name: 'офисный комплекс «urban»', city: 'г. Казань ул. Подлужная', date: 2020, img: image2},
]

const Slider = () => {
  let ref = useRef();

  // useEffect(()=> {
  //   const el = ref.current;
  //   if(el){
  //     const onWheel = e => {
  //       console.log('whel')
  //       e.preventDefault();
  //       el.scrollTo({
  //         left: el.scrollLeft + e.deltaY * 4,
  //         behavior: 'smooth'
  //       })
  //     }
  //     el.addEventListener('wheel', onWheel)
  //
  //     return ()=> el.removeEventListener('wheel', onWheel)
  //   }
  // }, [])

  return (
    <>
      <div
        ref={ref}
       style={{display: 'flex'}}
        className={'projects-container'}
        >
        <div className="projects-wrapper">
          {
            test.map((item, key)=> {
              return(
                <div
                className={'project-slide'}>
                  <NavLink to="/case">
                    <img src={item.img} alt="image"/>
                    <div className="info">
                      <div className="name">{item.name}</div>
                      <div className="desc d-flex align-items-center">{item.city}/{item.date}
                      </div>
                    </div>
                  </NavLink>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Slider;