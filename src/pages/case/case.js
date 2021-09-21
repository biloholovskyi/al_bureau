import React, {useEffect} from 'react';

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