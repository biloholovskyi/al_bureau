import React from 'react'

import Header from "../../compoments/header/header";
import MainScreen from "./mainScreen/mainScreen";
import DescBlock from "./descBlock/descBlock";
import ThirdBlock from "./ThirdBlock/ThirdBlock";
import ProcessCreateBlock from "./processCreateBlock/processCreateBlock";
import Footer from "../../compoments/footer/footer";
import MainForm from "./MainForm/MainForm";
import NewProjects from "./newProjects/newProjects";

import * as Style from './styled';

const Home = () => {
  return (
   <>
     <Style.HomeWrap>
       <MainScreen/>
       <DescBlock/>
       <ThirdBlock/>
       <ProcessCreateBlock/>
       <NewProjects/>
       <MainForm/>
     </Style.HomeWrap>

     <Footer/>
   </>
  )
}

export default Home;