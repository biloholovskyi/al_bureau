import React, {useEffect, useState} from 'react'

import MainScreen from "./mainScreen/mainScreen";
import DescBlock from "./descBlock/descBlock";
import ThirdBlock from "./ThirdBlock/ThirdBlock";
import ProcessCreateBlock from "./processCreateBlock/processCreateBlock";
import Footer from "../../components/footer/footer";
import MainForm from "./MainForm/MainForm";
import NewProjects from "./newProjects/newProjects";

import * as Style from './styled';
import axios from "axios";

import ApiService from "../../services/api";

const api = new ApiService()

const Home = () => {
  const [cases, setCases] = useState(null);
  const [all, setAll] = useState(0)




  const handleScroll = (animItems) => {

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
    const animItems = document.querySelectorAll('.animText');

    // window.addEventListener("scroll", () => handleScroll(animItems));

    // return () => {
    //   window.removeEventListener("scroll", () => handleScroll(animItems));
    // };
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks


  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getData = async () => {
      await axios.get(`${api.getApi()}cases/`)
        .then(res => {
          setAll(res.data.length);
          setCases(res.data.reverse().filter(item => item.show_main));
        }).catch(error => console.error(error));
    }

    getData().catch(error => console.error(error))
  }, [])



  return (
    <>
      <Style.HomeWrap>
        <MainScreen/>
        <DescBlock/>
        {/*<ThirdBlock/>*/}
        {/*<ProcessCreateBlock/>*/}
        <NewProjects cases={cases} all={all}/>
        <MainForm/>
      </Style.HomeWrap>
      <Footer/>
    </>
  )
}

export default Home;