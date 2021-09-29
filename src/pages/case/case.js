import React, {useState, useEffect} from 'react';
import axios from "axios";
import ApiService from "../../services/api";

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

const api = new ApiService();


const Case = ({id}) => {
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await axios.get(`${api.getApi()}case/${id}/`)
        .then(res => {
          console.log(res.data)
          setCaseData(res.data);
        }).catch(error => console.error(error));
    }

    getData().catch(error => console.error(error))
  }, [id])

  return (
   <>
     <Style.CaseWrap>
       <MainScreen data={caseData}/>
       <QuoteBlock data={caseData}/>
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