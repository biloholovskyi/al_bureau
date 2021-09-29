import React, {useRef, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

import ApiService from "../../../services/api";

import './style.css'
import image from '../../../media/image/slide.png';
import image2 from '../../../media/image/slide1.png';
import image3 from '../../../media/image/slide2.png';
import image4 from '../../../media/image/slide3.png';

const api = new ApiService();

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
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const getCases = async () => {
      await axios.get(`${api.getApi()}case/`)
        .then(res => {
          console.log(res.data[0])
          setCases(res.data);
        }).catch(error => console.error(error));
    }

    getCases().catch(error => console.error(error))
  }, [])

  return (
    <>
      <div
        style={{display: 'flex'}}
        className={'projects-container'}
      >
        <div className="projects-wrapper">
          {
            cases.map((item, key) => {
              return (
                <div
                  className={'project-slide'}>
                  <NavLink to="/case">
                    <img src={item.banner} alt="image"/>
                    <div className="info">
                      <div className="name">{item.title}</div>
                      <div className="desc d-flex align-items-center">{item.year}</div>
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