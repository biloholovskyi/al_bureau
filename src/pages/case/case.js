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
          setCaseData(res.data);
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
        return <ImageSlider data={block.images_slider} key={block.id}/>

      case 'slider_desc_equipment':
        return <SingleEquipmentSlider data={block.equipments} key={block.id}/>

      case 'plate_equipment':
        return <EquipmentCardsBlock data={block.equipments} key={block.id}/>

      case 'slider_equipment':
        return <EquipmentSlider data={block.equipments} key={block.id}/>

      default: return <div/>
    }
  })

  return (
   <>
     <Style.CaseWrap>
       <MainScreen data={caseData}/>
       <QuoteBlock data={caseData}/>

       {blocks}



       {/*5 image and text / text and 5 image*/}
       {/*тут нужно подключать редактор текста что бы можно было выводить списки*/}
       {/*<BigBlock/>*/}

       {/*<SingleTitleAndImage/>*/}
       {/*<SimpleTextBlock/>*/}

       {/*<GalleryTextBlock/>*/}




       {/*<SingleQuote/>*/}
       {/*<PrevNextCaseBlock/>*/}
     </Style.CaseWrap>
     <Footer/>
   </>
  )
}

export default Case;