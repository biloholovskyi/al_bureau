import React, {useState, useEffect, useRef} from 'react';
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
  const [opacity, setOpacity] = useState(0)

  const quoteBlock = useRef(null);

  const handleScroll = () => {
    const animItems = document.querySelectorAll('.animText');
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).bottom;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart
      }

      // eslint-disable-next-line no-restricted-globals
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active');
      } else {
        if (!animItem.classList.contains('anim_no_hide')) {
          animItem.classList.remove('active');
        }
      }
    }
  };

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {bottom: rect.bottom + scrollTop, left: rect.left + scrollLeft}
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [id]);

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

      default:
        return <div/>
    }
  })

  const animationTop = (e) => {
    const n1 = 1;
    const n2 = window.outerHeight - 185;
    const n = window.pageYOffset - n1;
    const p = n / (n2 - n1) * 100;
    const op1 = 1;
    let op = op1 - (op1 * (p / 100));

    if (op < 0.1) {
      op = 0;
    }

    if (op > 0.9) {
      op = 1
    }

    setOpacity(op);
  }

  return (
    <>
      <Style.CaseWrap onWheel={animationTop}>
        <MainScreen data={caseData} opacity={opacity}/>
        <QuoteBlock data={caseData} blockRef={quoteBlock}/>

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