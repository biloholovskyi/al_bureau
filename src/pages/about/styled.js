import styled from 'styled-components';

import icon from '../../media/icon/quote.svg';

const AboutWrap = styled.div`
  .small_title {
    font-family: Pragmatica Extended, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    @media (max-width: 767px) {
      margin-bottom: 16px;
    }
  }
`

const MainScreenWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .desc {
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  .title_section {
    position: relative;

    .title {
      font-family: Pragmatica Extended, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 72px;
      line-height: 80px;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 40px;

      @media (max-width: 1199px) {
        font-size: 54px;
        line-height: 64px;
      }

      @media (max-width: 991px) {
        font-size: 34px;
        line-height: 44px;
      }

      @media (max-width: 767px) {
        font-size: 28px;
        line-height: 36px;
        margin-bottom: 24px;
      }
    }

    .title-blur {
      mix-blend-mode: hard-light;
      opacity: 0.32;
      filter: blur(40px);
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

const DeskBlockWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 160px 0 80px;

  .name_block {
    position: relative;
    margin-bottom: 60px;

    @media (max-width: 767px) {
      margin-bottom: 24px;
    }

    p {
      font-family: Pragmatica Extended, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 48px;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 60px;
      overflow: hidden;
      background: linear-gradient(to right, #fff, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, .2) 50%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 100%;
      background-position: 100%;
      transition: background-position 2s ease;

      @media (max-width: 767px) {
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 24px;
      }

      &.active {
        background-position: 0 100%;
      }
    }

    .blur {
      position: absolute;
      opacity: 0.2;
      filter: blur(4px);
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: center;

    &_item {
      display: flex;
      padding: 16px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      width: 100%;

      .number {
        font-family: Pragmatica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 32px;
        color: rgba(255, 255, 255, 0.2);
        margin-right: 23px;

        @media (max-width: 767px) {
          margin-right: 20px;
          font-size: 20px;
          line-height: 28px;
        }
      }

      .text {
        font-family: Pragmatica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #FFFFFF;
      }
    }

    & .list_item:first-child {
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
`

const ThirdBlockWrap = styled.div`
  padding: 80px 0;
  width: 100%;
  display: flex;

  .blocks {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
      width: 274px;
      height: 274px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(16px);
      margin-right: 10px;
      margin-bottom: 39px;
      padding: 32px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      .number {
        font-family: Pragmatica Extended, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 48px;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.1);
      }

      .name {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
      }

      @media (max-width: 1099px) {
        width: 250px;
        height: 250px;
      }
      
      @media (max-width: 600px) {
        width: 160px;
        height: 160px;
        padding: 10px;
        margin-right: 0;
        margin-bottom: 20px;
        
        .number {
          font-size: 18px;
          line-height: 24px;
        }

        .name {
          font-size: 12px;
          line-height: 22px;
        }
      }
      
      @media (max-width: 378px) {
        width: 100%;
      }
    }
  }

  @media (max-width: 767px) {
    padding: 40px 0 60px;
  }
`

const MainFormWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 80px 0;

  h2 {
    font-family: Pragmatica Extended, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    color: #FFFFFF;
    margin-bottom: 40px;
    text-transform: uppercase;
    @media (max-width: 575px) {
      font-size: 20px;
      line-height: 30px;
      text-transform: uppercase;
    }
  }

  form {
    .double {
      width: 100%;
      display: flex;
      align-items: flex-start;

      .form-floating {
        margin-right: 40px;
      }

      & .form-floating:last-child {
        margin-right: 0px;
      }

      @media (max-width: 575px) {
        flex-direction: column;
        & .form-floating:first-child {
          margin-right: 0;
        }
      }
    }

    .form-floating {
      margin-bottom: 32px;
      @media (max-width: 575px) {
        margin-bottom: 28px;
        & label {
          padding-right: 0 !important;
        }
      }
    }

    & .form-floating:nth-child(3) {
      margin-bottom: 40px !important;
    }

    .counter {
      font-family: Pragmatica, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      color: rgba(255, 255, 255, 0.6);
      margin-top: 12px;
    }

    .btn_section {
      @media (max-width: 575px) {
        flex-direction: column;
        label, button {
          width: 100%;
        }

        label {
          margin-bottom: 16px;
        }

        .btn {
          padding: 12px 24px;
        }
      }
    }

    @media (max-width: 575px) {
      .blockWithCount {
        margin-bottom: 28px !important;
      }
    }
  }

  @media (max-width: 575px) {
    padding: 40px 0 76px;
  }
`

const QuoteBlockWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 80px 0;

  .quoteBlock {
    position: relative;
    display: flex;
    
    @media (max-width: 767px) {
      flex-direction: column;
    }

    .photo {
      width: 410px;
      height: 545px;
      object-fit: cover;
      object-position: center;
      
      @media (max-width: 767px) {
        width: 100%;
        height: auto;
      }
    }

    .text {
      font-family: Pragmatica, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 36px;
      color: #FFFFFF;
      padding-top: 80px;
      transform: translateX(-80px);
      position: relative;

      &:after {
        content: '';
        background-image: url(${icon});
        background-position: center;
        background-size: contain;
        position: absolute;
        left: -20px;
        top: 50px;
        width: 93.53px;
        height: 72px;
      }

      @media (max-width: 991px) {
        padding-top: 24px;
        font-size: 20px;
        line-height: 30px;
        transform: translateX(-120px);
        
        &:after {
          top: 5px;
        }
      }
      
      @media (max-width: 767px) {
        transform: translateX(0);
      }
    }
  }
`

const ProcessCreateBlockWrap = styled.div`
  width: 100%;
  display: flex;

  .infoLine {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: fit-content;
    flex-direction: column;
    position: relative;
    padding: 80px 0;

    .line {
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 12.99%, #FFFFFF 56.25%, #FFFFFF 82.04%, rgba(255, 255, 255, 0) 100%);
      width: 1px;
      height: 100%;

      @media (max-width: 767px) {
        left: 0;
        transform: none;
        height: 90%;
      }
    }

    .item {
      display: flex;
      width: 100%;
      margin-bottom: 54px;

      .dot {
        flex: 1;
        max-width: 8px;
        width: 8px;
        height: 8px;
        max-height: 8px;
        background: #FFFFFF;
        border-radius: 50%;
        margin: 5px 32px 0 -4px;
        position: relative;

        &:before {
          content: "";
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          filter: blur(4px);
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        @media (max-width: 767px) {
          margin-left: -4px;
          margin-top: 10px;
        }
      }

      .left {
        flex: 2;
        align-self: flex-start;
        text-align: right;
        font-family: Pragmatica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 26px;
        text-align: left;
        color: #FFFFFF;

        @media (max-width: 767px) {
          position: absolute;
          left: 20px;
          top: 4px;
          font-size: 16px;
          text-align: left;
          line-height: 24px;
        }
      }

      .right {
        flex: 2;
        font-family: Pragmatica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: #FFFFFF;
        @media (max-width: 767px) {
          position: absolute;
          left: 20px;
          bottom: 0;
          font-size: 12px;
          line-height: 20px;
        }
      }

      @media (max-width: 767px) {
        position: relative;
        min-height: 116px;
        margin-bottom: 32px;
      }
    }

    @media (max-width: 767px) {
      padding: 40px 0;
      & .item:last-child {
        margin-bottom: 0;
      }
    }
  }

  .small_title {
    padding: 80px 0;
    @media (max-width: 767px) {
      padding: 0;
    }
  }
`

export {
  AboutWrap,
  MainScreenWrap,
  DeskBlockWrap,
  ThirdBlockWrap,
  MainFormWrap,
  QuoteBlockWrap,
  ProcessCreateBlockWrap
}