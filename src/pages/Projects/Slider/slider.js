import React, {useRef, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

import './style.css'

import ApiService from "../../../services/api";
const api = new ApiService();


const Slider = () => {
  const [cases, setCases] = useState([]);
  const [scrollX, setScrollX] = useState(0);
  const wrapper = useRef(null);

  useEffect(() => {
    const getCases = async () => {
      await axios.get(`${api.getApi()}cases/`)
        .then(res => {
          setCases(res.data.reverse());
        }).catch(error => console.error(error));
    }

    getCases().catch(error => console.error(error))
    disableScroll();
  }, [])


  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
      e.preventDefault();
    e.returnValue = false;
  }


  function disableScroll() {
    if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, { passive: false });
    wrapper.current.onwheel = preventDefault; // modern standard
    wrapper.current.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    wrapper.current.ontouchmove  = preventDefault; // mobile
  }

  return (
    <div
      style={{display: 'flex'}}
      className={'projects-container'}
    >
      <div
        className="projects-wrapper"
        ref={wrapper}
        onWheel={(e) => {
          let x = scrollX + e.deltaY;
          if(x < 0) {
            x = 0;
          }
          if(x > wrapper.current.scrollWidth - 300) {
            x = wrapper.current.scrollWidth - 300;
          }
          setScrollX(x)
          wrapper.current.scrollLeft = x;
        }}
      >
        {
          cases.map((item, key) => {
            return (
              <div
                className={'project-slide'}>
                <NavLink to={"/projects/" + item.id}>
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
  )
}

export default Slider;