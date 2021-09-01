import React, {useState, useEffect} from 'react'

import MainScreen from "./mainScreen/mainScreen";
import DescBlock from "./descBlock/descBlock";
import ThirdBlock from "./ThirdBlock/ThirdBlock";
import ProcessCreateBlock from "./processCreateBlock/processCreateBlock";
import Footer from "../../components/footer/footer";
import MainForm from "./MainForm/MainForm";
import NewProjects from "./newProjects/newProjects";

import * as Style from './styled';
import BgGradient from "../../components/bgGradient/bgGradient";

const Home = () => {
  const [x, setX] = useState(20);
  const [y, setY] = useState(20);

  const onMouseMove = (e) => {
    const gradient = document.getElementById('mask')
    setX(e.clientX);
    setY(e.clientY);

    gradient.style.webkitMaskImage = `radial-gradient(410px 380px at ${x + 'px'} ${y + 'px'}, #000000 0%, rgba(0, 0, 0, 0) 100%)`
  }
//${310 + (y / 5) + 'px'}
  return (
    <>
      <Style.HomeWrap onMouseMove={onMouseMove}>
        <MainScreen/>
        <DescBlock/>
        <ThirdBlock/>
        <ProcessCreateBlock/>
        <NewProjects/>
        <MainForm/>
      </Style.HomeWrap>

      <BgGradient/>
      <Footer/>
    </>
  )
}

export default Home;