import React from 'react';

import MainScreen from "./MainScreen/MainScreen";
import Footer from "../../components/footer/footer";

import * as Style from './styled';
import DescBlock from "./descBlock/descBlock";
import ThirdBlock from "./ThirdBlock/ThirdBlock";
import MainForm from "./MainForm/MainForm";
import QuoteBlock from "./QuoteBlock/QuoteBlock";
import ProcessCreateBlock from "./processCreateBlock/processCreateBlock";

const About = () => {
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