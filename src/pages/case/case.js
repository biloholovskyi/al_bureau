import React from 'react';

import * as Style from './styled';
import MainScreen from "./mainScreen/mainScreen";
import Footer from "../../compoments/footer/footer";
import QuoteBlock from "./quoteBlock/quoteBlock";
import About from "./about/about";
import SimpleBlocksText from "./simpleBlocksText/simpleBlocksText";

const Case = () => {
  return (
   <>
     <Style.CaseWrap>
       <MainScreen/>
       <QuoteBlock/>
       <About/>
       <SimpleBlocksText/>
     </Style.CaseWrap>

     <Footer/>
   </>
  )
}

export default Case;