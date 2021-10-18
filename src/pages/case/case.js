import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";

import * as Style from './styled';
import MainScreen from "./mainScreen/mainScreen";
import Footer from "../../components/footer/footer";
import QuoteBlock from "./quoteBlock/quoteBlock";
import About from "./about/about";
import SimpleBlocksText from "./simpleBlocksText/simpleBlocksText";
import SimpleBlockWithFewPhoto from "./simpleBlockWithFewPhoto/simpleBlockWithFewPhoto";
import TextCenterBlock from "./textCenterBlock/textCenterBlock";
import ImageSlider from "./imageSlider/imageSlider";
import EquipmentSlider from "./equipmentSlider/equipmentSlider";
import SingleEquipmentSlider from "./singleEquipmentSlider/singleEquipmentSlider";
import EquipmentCardsBlock from "./equipmentCardsBlock/equipmentCardsBlock";
import PrevNextCaseBlock from "./prevNextCaseBlock/prevNextCaseBlock";
import SingleQuoteSlider from "./singleQuoteSlider/singleQuoteSlider";
import BeforeAfter from "./beforeAfter/beforeAfter";
import PalletImage from "./palletImage/palletImage";
import Preloader from "../../components/preloader/preloader";

import ApiService from "../../services/api";
const api = new ApiService();


const Case = ({id}) => {
  const [caseData, setCaseData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  const quoteBlock = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id])

  useEffect(() => {
    setLoaded(true);
    const getData = async () => {
      await axios.get(`${api.getApi()}case/${id}/`)
        .then(res => {
          setCaseData(res.data);
          setTimeout(() => {
            setLoaded(false)
          }, 4000)
        }).catch(error => console.error(error));
    }

    getData().catch(error => console.error(error))
  }, [id])

  const blocks = caseData?.section.map(block => {

    switch (block.type) {
      case 'section':
        return <div id={block.type + '_' + block.id} key={block.id}/>

      case 'description_object':
        return <TextCenterBlock data={block} key={block.id}/>

      case 'banner':
        return <About data={block} key={block.id}/>

      case 'banner_text':
        return <About data={block} key={block.id}/>

      case 'column_text_1':
        return <About data={block} key={block.id}/>

      case 'column_text_2':
        return <About data={block} key={block.id}/>

      case 'column_text_3':
        return <About data={block} key={block.id}/>

      case 'quotes':
        return <SingleQuoteSlider data={block.quotes} key={block.id}/>

      case 'image_text':
        return <SimpleBlocksText data={block} key={block.id}/>

      case 'text_image':
        return <SimpleBlocksText data={block} key={block.id}/>

      case 'text_image_2':
        return <SimpleBlocksText data={block} key={block.id}/>

      case 'image_2_text':
        return <SimpleBlocksText data={block} key={block.id}/>

      case 'text_image_3':
        return <SimpleBlockWithFewPhoto data={block} key={block.id}/>

      case 'image_4_text':
        return <SimpleBlockWithFewPhoto data={block} key={block.id}/>

      case 'image_slider':
        return <ImageSlider data={block.images_slider} title={block.image_slider_title} key={block.id}/>

      case 'slider_desc_equipment':
        return <SingleEquipmentSlider data={block.equipments} key={block.id}/>

      case 'plate_equipment':
        return <EquipmentCardsBlock data={block.equipments} key={block.id}/>

      case 'slider_equipment':
        return <EquipmentSlider data={block.equipments} key={block.id}/>

      case 'before_after':
        return <BeforeAfter data={block} key={block.id}/>

      case 'pallet_image':
        return <PalletImage data={block.images_slider} title={block.image_slider_title} key={block.id}/>

      default:
        return <div/>
    }
  })

  return (
    <>
      {loaded && <Preloader/>}
      <Style.CaseWrap>
        <MainScreen data={caseData}/>
        <QuoteBlock data={caseData} blockRef={quoteBlock} className={'case-main-block'}/>
        {blocks}

        <PrevNextCaseBlock data={caseData} className={'case-main-block'}/>

      </Style.CaseWrap>
      <Footer/>
    </>
  )
}

export default Case;