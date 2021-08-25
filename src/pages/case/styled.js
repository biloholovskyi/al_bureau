import styled from 'styled-components'

import bg from "../../media/image/caseBg.png";
import icon from "../../media/icon/quote.svg";

const CaseWrap = styled.div`

`

const MainScreenWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;

  .title {
    font-family: 'Pragmatica Extended', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 80px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin-bottom: 40px;
  }

  .small_desc {
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 40px;
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
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    z-index: 11;
    text-decoration: none;
    
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
`

const QuoteBlockWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 150px 0 150px;
  position: relative;
  .bg {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 27.69%);
    width: 100%;
    position: absolute;
    height: 100%;
    left: 0;
    top: -153px;
    z-index: 8;
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
  }
  .author {
    display: flex;
    align-items: center;
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
    &--item {
      display: flex;
      align-items: center;
      padding: 15px 0;
      border-bottom: 1px solid  rgba(255, 255, 255, 0.2);
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
      border-top: 1px solid  rgba(255, 255, 255, 0.2);
    }
  }
`

const AboutWrap = styled.div`
  width: 100%;
  display: flex;
  padding-top: 80px;
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
  }
  .text {
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: rgba(255, 255, 255, 0.8);
  }
`

const BlockImage = styled.img`
  width: 100%;
  max-height: 675px;
  object-fit: cover;
  margin-top: 80px;
`

const SimpleBlockWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 150px 0 80px;
  img {
    width: 100%;
    max-width: 560px;
    object-fit: cover;
  }
  .text {
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;
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
    margin-bottom: 20px;
  }
  
  .container-fluid {
    & .row:first-child {
      margin-bottom: 160px;
    }
  }
`

export  {
  CaseWrap,
  MainScreenWrap,
  QuoteBlockWrap,
  AboutWrap,
  BlockImage,
  SimpleBlockWrap
}