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

    const scaleItems = [1.39479824, 1.237298427097, 1.39479824, 1.237298427097, 0.89479824, 0.937298427097, 1.333333, 0.98797098]

    gradient.style.webkitMaskImage = `radial-gradient(380px 410px at ${x + 'px'} ${y + 'px'}, #000000 0%, rgba(0, 0, 0, 0) 100%)`;
    gradient.style.transform = `scale(${scaleItems[Math.floor(Math.random()*scaleItems.length)]}, ${scaleItems[Math.floor(Math.random()*scaleItems.length)]})`;
  }

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