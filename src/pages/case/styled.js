import styled from 'styled-components'

import icon from "../../media/icon/quote.svg";

const CaseWrap = styled.div`
  
`

const MainScreenWrap = styled.div`
  width: 100%;
  min-height: calc(100vh + 240px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .title {
    font-family: 'Pragmatica Extended', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 80px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin-bottom: 40px;
    position: relative;
    z-index: 3;
  }

  .small_desc {
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 40px;
    position: relative;
    z-index: 3;
  }

  .main_btn {
    img {
      width: 18px;
      height: 18px;
      object-fit: contain;
      margin-left: 8px;
    }
  }

  .scrollIndicator {
    font-family: Pragmatica Extended, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
    width: 128px;
    height: 128px;
    min-width: 128px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 130px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    z-index: 11;
    text-decoration: none;
    text-align: center;
    
    &:after {
      content: '';
      width: 256px;
      height: 256px;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.04);
      min-width: 256px;
      position: absolute;
    }

    &:before {
      content: '';
      width: 384px;
      height: 384px;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.02);
      min-width: 384px;
      position: absolute;
    }
  }

  &:after {
    content: '';
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  } 

  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${props => props.bg ? 'url(' + props.bg + ')' : 'none'};
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
    opacity: ${props => props.opacity};
    transition: all .3s;
  }
  
  @media (max-width: 767px) {
    justify-content: flex-start;
    
    .year,
    .scrollIndicator {
      display: none;  
    }
    
    .title {
      font-size: 28px;
      line-height: 36px;
      text-align: left !important;
      margin-bottom: 24px;
    }
    
    .small_desc {
      font-size: 16px;
      line-height: 24px;
      text-align: left !important;;
    }
  }
`

const QuoteBlockWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 40px 0 150px;
  margin-bottom: 80px;
  position: relative;
  background: #000;

  .bg {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 27.69%);
    width: 100%;
    position: absolute;
    height: 100%;
    left: 0;
    top: -185px;
    z-index: 8;
    
    &--bottom {
      transform: rotate(180deg);
      top: 185px;
    }
  }

  h2 {
    font-family: Pragmatica Extended, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 80px;
    position: relative;
    max-width: 680px;

    &:before {
      content: '';
      position: absolute;
      left: -24px;
      top: -45px;
      background-image: url(${icon});
      width: 117px;
      height: 90px;
    }

    @media (max-width: 991px) {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 24px;
      
      &:before {
        width: 58.5px;
        height: 45px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        left: -11px;
        top: -26px;
      }
    }
  }

  .author {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .photo {
      width: 48px;
      height: 48px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 20px;
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .name {
        font-family: Pragmatica, sans-serif;
        margin-bottom: 4px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #FFFFFF;
      }

      .position {
        font-family: Pragmatica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }

  .quote_list {
    display: flex;
    flex-direction: column;
    
    a {
      text-decoration: none;

      &:visited,
      &:focus,
      &:hover {
        text-decoration: none;
      }
    }

    &--item {
      display: flex;
      align-items: center;
      padding: 15px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);

      .number {
        font-family: Pragmatica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 32px;
        color: rgba(255, 255, 255, 0.4);
        margin-right: 20px;
      }

      .text {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #FFFFFF;
      }
    }

    &--item:first-child {
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
  
  @media (max-width: 991px) {
    padding: 40px 0 80px 0;
  }
  
  @media (max-width: 767px) {
    .quote_list {
      margin-top: 40px;
    }
  }
`

const AboutWrap = styled.div`
  width: 100%;
  display: flex;
  padding-top: 80px;
  padding-bottom: 80px;
  //background-color: #000;
  
  .column-main-title {
    font-family: Pragmatica Extended, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 80px;
  }

  .block_image {
    width: 100%;
    max-height: 675px;
    object-fit: cover;
    margin-top: 80px;
  }

  h2 {
    font-family: Pragmatica Extended, sans-serif;
    margin-bottom: 80px;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .title {
    font-family: Pragmatica, sans-serif;
    margin-bottom: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    max-width: 348px;
  }

  .text {
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: rgba(255, 255, 255, 0.8);
    max-width: 348px;
    
    &--full {
      max-width: 100%;
    }
  }
  
  .title {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 24px;
  }
  
  .text {
    font-size: 12px;
    line-height: 20px
  }
  
  @media (max-width: 767px) {
    .column-main-title {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 24px;
    }
  }
`

const BlockImage = styled.img`
  width: 100%;
  max-height: 675px;
  object-fit: cover;
  margin-bottom: 80px;
`

const SimpleBlockWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 80px 0 80px;

  .simple_image {
    width: 100%;
    max-width: 560px;
    object-fit: cover;
    height: fit-content;
    max-height: 740px;
  }

  .text {
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;
    max-width: 555px;
    margin-left: auto;
  }

  .title {
    font-family: Pragmatica Extended, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    max-width: 555px;
    margin-left: auto;
    margin-bottom: 40px;
  }

  .container-fluid {
    & .row {
      padding-bottom: 160px;
    }

    & .row:last-child {
      padding-bottom: 0px;
    }
  }

  .image_container {
    display: flex;
    max-width: 560px;

    .image_row {
      max-width: calc(50% - 20px);
      display: flex;
      justify-content: center;
      flex-direction: column;

      img {
        max-width: 260px;
        margin-bottom: 40px;
      }
    }

    & .image_row:first-child {
      margin-right: 40px;
      margin-top: 80px;
    }
  }

  @media (max-width: 767px) {
    .simple_image {
      max-width: 100%;
      margin-bottom: 24px;
      margin-left: 0 !important;
      
      &.text_image {
        margin-top: 24px;
      }
    }
    
    .title {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 24px;
      max-width: 100%;
      width: 100%;
    }
    
    .text {
      font-size: 12px;
      line-height: 20px;
      max-width: none;
      margin-left: 0;
      width: 100%;
    }
    
    .text_image_2 {
      max-width: none;
      width: 100%;
      
      .image_row {
        width: 100%;
        max-width: none;
        align-items: flex-start;
        justify-content: space-between;
        
        img {
          width: 100%;
          height: auto;
          margin-bottom: 0;
          max-width: none;
        }
        
        &:first-child {
          margin-top: 40px;
          margin-right: 10px;
        }
        
        &:last-child {
          margin-top: 40px;
          margin-left: 10px;
        }
      }
    }
    
    .image_2_text {
      margin-bottom: 24px;
    }
    
    .image_4_text {
      .image_row {
        justify-content: flex-start;
        
        img {
          &:first-child {
            margin-bottom: 24px;
          }
        }
      }
    }
    
    .text_image_3 {
      margin: 40px 0 0 0;
      width: 100%;
      max-width: none;
      flex-direction: column;
      
      .image_row {
        max-width: 100%;
        width: 100%;
        
        &:first-child {
          margin: 0;
          
          img {
            max-width: none;
            object-fit: cover;
          }
        }
        
        &:last-child {
          flex-direction: row;
          justify-content: space-between;
          
          img {
            max-width: calc(50% - 10px);
            width: 100%;
          }
        }
      }
    }
  }
`

const BigBlockWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 80px 0;

  h2 {
    font-family: Pragmatica Extended, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 40px;
    max-width: 560px;
  }

  p {
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;
    margin-bottom: 30px;
    max-width: 560px;
  }

  .small_title {
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;
    margin-bottom: 20px;
  }

  ul, ol {
    margin-bottom: 30px;

    li {
      font-family: Pragmatica, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
      color: #FFFFFF;
      margin-bottom: 16px;
    }
  }

  .image_container {
    display: flex;
    flex-wrap: wrap;
    max-width: 560px;

    img {
      margin-bottom: 40px;
    }

    .small_img--block {
      .small_img {
        max-width: 260px;
        margin-right: 40px;
      }

      & .small_img:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
`

const SingleTitleAndImageWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 80px 0;

  img {
    width: 100%;
    max-height: 674px;
    object-fit: cover;
  }

  h2 {
    font-family: Pragmatica Extended, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 60px;
  }
`

const SimpleTextWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 80px 0;

  h2 {
    font-family: Pragmatica Extended, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 0px;
    max-width: 555px;
  }

  p {
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;
    max-width: 555px;
    margin-left: auto;
  }
`

const TextCenterBlockWrap = styled.div`
  padding: 80px 0;
  display: flex;
  width: 100%;

  p {
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    max-width: 780px;
    margin: 0 auto;
  }

  h2 {
    font-family: Pragmatica Extended, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0 auto 40px;
    max-width: 780px;
  }
  
  @media (max-width: 767px) {
    h2 {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 24px;
    }
    
    p {
      font-size: 12px;
      line-height: 20px;
    }
  }
`

const ImageSliderWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 160px 0;
  overflow: hidden !important;
  position: relative;
  
  h2 {
    font-family: Pragmatica Extended, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 80px;
  }
  
  @media (max-width: 767px) {
    padding: 80px 0;
    
    h2 {
      margin-bottom: 24px;
      font-size: 20px;
      line-height: 30px;
    }
  }
`

const EquipmentSliderWrap = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden !important;
  position: relative;
  padding: 80px 0;

  h2 {
    font-family: Pragmatica Extended, sans-serif;
    margin-bottom: 60px;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  
  @media (max-width: 767px) {
    h2 {
      font-size: 20px;
      line-height: 30px;
    }
  }
`

const SingleEquipmentSliderWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 80px 0;
  align-items: center;
  justify-content: center;
`

const EquipmentCardsBlockWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 80px 0;

  h2 {
    font-family: Pragmatica Extended, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 60px;
  }

  .cardsBlock {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;

    .card {
      background-color: #111 !important;
      padding: 20px;
      flex-direction: column;
      align-items: center;
      max-width: 270px;
      margin-bottom: 40px;

      .image {
        width: 128px;
        object-fit: cover;
        height: 128px;
        margin-bottom: 30px;
      }

      .text2 {
        font-family: Pragmatica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: rgba(255, 255, 255, 0.8);
      }

      .name2 {
        font-family: Pragmatica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        color: #FFFFFF;
        margin-bottom: 20px;
      }
    }
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 20px;
      line-height: 30px;
    }
    
    .cardsBlock {
      .card {
        max-width: none;
        width: calc(50% - 10px);
      }
    }
  }
  
  @media (max-width: 575px) {
    .cardsBlock {
      .card {
        width: 100%;
      }
    }
  }
`

const SingleQuoteWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 80px 0;

  .quoteText {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-family: Pragmatica Extended, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 48px;
      text-align: center;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: #FFFFFF;
      max-width: 800px;
      margin: 0 auto 40px;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        left: 35px;
        top: -45px;
        background-image: url(${icon});
        width: 117px;
        height: 90px;
      }
    }

    .author {
      display: flex;
      align-items: center;
      flex-direction: column;

      .photo {
        width: 60px;
        height: 60px;
        margin-bottom: 20px;
        object-fit: cover;
      }

      .name {
        font-family: Pragmatica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #FFFFFF;
      }

      .position {
        font-family: Pragmatica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
`

const PrevNextCaseBlockWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .caseItem {
    flex: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 150px 0;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    
    &:focus,
    &:active,
    &:hover,
    &:visited {
      text-decoration: none;
    }

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }

    .text {
      z-index: 4;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        font-family: Pragmatica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 26px;
        color: #FFFFFF;
        transition: .3s;
      }

      .name {
        font-family: Pragmatica Extended, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 48px;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: #FFFFFF;
        transition: all .4s;
        -webkit-text-stroke: 1px #fff;
      }
    }

    .blur {
      background: transparent;
      position: absolute;
      z-index: 3;
      width: 100%;
      height: 100%;
      transition: background .4s;
    }

    &:hover {
      .blur {
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(32px);
        transition: background .4s;
      }

      .text {
        .name {
          color: transparent;
          -webkit-text-stroke: 1px #fff;
          transition: all .4s;
        }
      }
    }
  }
`

const GalleryTextBlockWrap = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;

  .title {
    font-family: Pragmatica Extended, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 40px;
    max-width: 450px;
    margin-top: 160px;
  }

  .text {
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;
    max-width: 450px;
  }

  .image_container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-width: 646px;
    margin-left: auto;

    .image_row {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: flex-end;

      img {
        width: fit-content;
        margin-bottom: 40px;
      }

      & img:nth-child(2n) {
        margin-right: 40px;
      }
    }
  }

  .row2 {
    h2, p {
      margin-left: auto;
    }

    .image_container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 646px;
      margin-left: unset;
      margin-right: auto;

      .image_row {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: flex-start;

        img {
          width: fit-content;
          margin-bottom: 40px;
        }

        & img:nth-child(2n) {
          margin-right: 40px;
        }
      }
    }
  }

  .list {
    &_item {
      font-family: Pragmatica, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 18px;

      &.active {
        color: #fff;
        position: relative;
        padding-left: 40px;

        &:before {
          content: '';
          width: 24px;
          height: 1px;
          background-color: #fff;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }

    & .list_item:last-child {
      margin-bottom: 0;
    }
  }
`

const SingleQuoteSliderWrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  padding: 80px 0;
  
  .photo {
    border-radius: 50%;
  }
`

export {
  CaseWrap,
  MainScreenWrap,
  QuoteBlockWrap,
  AboutWrap,
  BlockImage,
  SimpleBlockWrap,
  BigBlockWrap,
  SingleTitleAndImageWrap,
  SimpleTextWrap,
  TextCenterBlockWrap,
  ImageSliderWrap,
  EquipmentSliderWrap,
  SingleEquipmentSliderWrap,
  EquipmentCardsBlockWrap,
  SingleQuoteWrap,
  PrevNextCaseBlockWrap,
  GalleryTextBlockWrap,
  SingleQuoteSliderWrap
}