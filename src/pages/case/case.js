import React from 'react';

import * as Style from './styled';
import MainScreen from "./mainScreen/mainScreen";
import Footer from "../../components/footer/footer";
import QuoteBlock from "./quoteBlock/quoteBlock";
import About from "./about/about";
import SimpleBlocksText from "./simpleBlocksText/simpleBlocksText";
import SimpleBlockWithFewPhoto from "./simpleBlockWithFewPhoto/simpleBlockWithFewPhoto";
import BigBlock from "./bigBlock/bigBlock";
import SingleTitleAndImage from "./SingleTitleAndImage/singleTitle&Image";
import SimpleTextBlock from "./simpleTextBlock/simpleTextBlock";
import TextCenterBlock from "./textCenterBlock/textCenterBlock";
import ImageSlider from "./imageSlider/imageSlider";
import EquipmentSlider from "./equipmentSlider/equipmentSlider";
import SingleEquipmentSlider from "./singleEquipmentSlider/singleEquipmentSlider";
import EquipmentCardsBlock from "./equipmentCardsBlock/equipmentCardsBlock";
import SingleQuote from "./singleQuote/singleQuote";
import PrevNextCaseBlock from "./prevNextCaseBlock/prevNextCaseBlock";
import GalleryTextBlock from "./galleryTextBlock/galleryTextBlock";
import SingleQuoteSlider from "./singleQuoteSlider/singleQuoteSlider";

const Case = () => {
  return (
   <>
     <Style.CaseWrap>
       <MainScreen/>
       <QuoteBlock/>
       <About/>
       <SimpleBlocksText/>
       <SimpleBlockWithFewPhoto/>
       <BigBlock/>
       <SingleTitleAndImage/>
       <SimpleTextBlock/>
       <TextCenterBlock/>
       <GalleryTextBlock/>
       <ImageSlider/>
       <SingleEquipmentSlider/>
       <EquipmentCardsBlock/>
       <EquipmentSlider/>
       <SingleQuoteSlider/>
       <SingleQuote/>
       <PrevNextCaseBlock/>
     </Style.CaseWrap>

     <Footer/>
   </>
  )
}

export default Case;