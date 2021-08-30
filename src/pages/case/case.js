import React, {useState} from 'react';

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
import BgGradient from "../../components/bgGradient/bgGradient";

const Case = () => {
  const [x, setX] = useState(20);
  const [y, setY] = useState(20);

  const onMouseMove = (e) => {
    const gradient = document.getElementById('mask')
    setX( e.clientX);
    setY( e.clientY);

    gradient.style.webkitMaskImage = `radial-gradient(380px 410px at ${x + 'px'} ${y + 'px'}, #000000 0%, rgba(0, 0, 0, 0) 100%)`
  }
  return (
   <>
     <Style.CaseWrap onMouseMove={onMouseMove}>
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

     <BgGradient/>
     <Footer/>
   </>
  )
}

export default Case;