import React, {useEffect, useRef} from 'react';

import MainScreen from "./MainScreen/MainScreen";
import Footer from "../../components/footer/footer";

import * as Style from './styled';
import DescBlock from "./descBlock/descBlock";
import ThirdBlock from "./ThirdBlock/ThirdBlock";
import MainForm from "./MainForm/MainForm";
import QuoteBlock from "./QuoteBlock/QuoteBlock";
import ProcessCreateBlock from "./processCreateBlock/processCreateBlock";

const About = () => {
  const animItems = document.querySelectorAll('.animText');

  if(animItems.length > 0) {
    const handleScroll = () => {
      for(let index = 0; index < animItems.length;  index++){
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).bottom;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if(animItemHeight > window.innerHeight){
          animItemPoint = window.innerHeight - window.innerHeight / animStart
        }

        // eslint-disable-next-line no-restricted-globals
        if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('active');
        } else {
          if(!animItem.classList.contains('anim_no_hide')) {
            animItem.classList.remove('active');
          }
        }
      }
    };

    function offset(el){
      const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return{bottom: rect.bottom + scrollTop, left: rect.left + scrollLeft}
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", () => handleScroll);
      };
    }, []);
  }


  return (
    <>
      <Style.AboutWrap>
        <MainScreen/>
        <DescBlock/>
        <ProcessCreateBlock/>
        <ThirdBlock/>
        <QuoteBlock/>
        <MainForm/>
      </Style.AboutWrap>
      <Footer/>
    </>
  )
}

export default About;