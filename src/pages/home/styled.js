import styled from 'styled-components';

import bg from '../../media/image/bg.png';
import t from '../../media/image/gradient.svg';

const HomeWrap = styled.div`
  .small_title {
    font-family: Pragmatica Extended, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
  }
`

const MainScreenWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  //background-image: url(${bg});
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
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;
    margin-bottom: 40px;
  }

  .main_btn {
    z-index: 11;
    position: relative;
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
    z-index: 9;
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
  
  .gradient {
    box-shadow: rgb(0 188 212 / 50%) 0px 0px 35px 49px;
    background-color: rgba(0, 188, 212, 0.5);
    position: absolute;
    width: 400px;
    height: 400px; 
    border-radius: 50%;
    animation: test infinite 20s;
    filter: blur(4px);
    z-index: -1;
    //background: radial-gradient(circle farthest-side at 30px 20px, rgba(255, 255, 0, 0.4) 2%, rgba(0, 188, 212, 0.7) 52%, rgba(238, 130, 238, 0.4) 99%);
  }
  @keyframes test {
    0% {
      width: 400px;
      height: 400px;
      border-radius: 50%;
      transform: scale(1.1);
    }
    25% {
      width: 500px;
      height: 450px;
      border-radius: 700px;
      transform: rotate(20deg);
    }
    50% {
      width: 450px;
      height: 600px;
      border-radius: 600px;
      transform: rotate(20deg);
    }
    75% {
      width: 500px;
      height: 550px;
      border-radius: 900px;
      transform: rotate(20deg);
    }
    100% {
      width: 400px;
      height: 400px;
      border-radius: 50%;
      transform: rotate(20deg) scale(1.1);
    }
  }
  
  #mask {
    position: fixed;
    left: 0;
    top: 0;
    -webkit-mask-size: 100%;
    mask-size: 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    z-index: -1;
    width: 100%;
    min-height: 100vh;
    //animation: infinite 10s animGradient;
  }

  //@keyframes animGradient {
  //  0% {
  //    transform: scale(1);
  //    transition: transform 5s;
  //  }
  //  25% {
  //    transform: scale(1.1);
  //    transition: transform 5s;
  //  }
  //  50% {
  //    transform: scale(1);
  //    transition: transform 5s;
  //  }
  //  65%{
  //    transform: scale(1.1);
  //    transition: transform 5s;
  //  }
  //  80% {
  //    transform: scale(1.2);
  //    transition: transform 5s;
  //  }
  //  100% {
  //    transform: scale(1);
  //  }
  //}
`

const DeskBlockWrap = styled.div`
  width: 100%;
  display: flex;
  padding-top: 290px;

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
    //opacity: 0.2;
    //filter: blur(4px);
  }

  .photo_block {
    width: 100%;
    display: flex;
    margin-bottom: 80px;

    & img:first-child {
      margin-right: 38px;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: fit-content;
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

    .item {
      width: 274px;
      height: 274px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(16px);
      margin-right: 39px;
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
        font-size: 24px;
        line-height: 32px;
        color: #FFFFFF;
      }
    }

    & .item:nth-child(3n) {
      margin-right: 0;
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
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 12.99%, #FFFFFF 56.25%, #FFFFFF 82.04%, rgba(255, 255, 255, 0) 100%);
      width: 1px;
      height: 100%;
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
        margin: 20px 32px 0;
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
        text-align: right;
        color: #FFFFFF;
      }

      .right {
        flex: 2;
        font-family: Pragmatica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: #FFFFFF;
      }
    }
  }

  .small_title {
    padding: 80px 0;
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
  }

  form {
    .double {
      width: 100%;
      display: flex;
      align-items: center;

      & .form-floating:first-child {
        margin-right: 80px;
      }
    }

    .form-floating {
      margin-bottom: 32px;
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
  }
`

const NewProjectsWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 80px 0;

  .projects_block {
    width: 100%;
    display: flex;
    flex-direction: column;

    &--item {
      width: 100%;
      padding-bottom: 40px;
      border-bottom: 1px solid #fff;
      margin-bottom: 40px;

      .name {
        font-family: Pragmatica Extended, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 56px;
        line-height: 64px;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-bottom: 24px;
      }

      .info > * {
        font-family: Pragmatica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
      }
    }

    .btn-block {
      button, a {
        background: transparent;
        border: none;
        font-family: Pragmatica Extended, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 1);
      }

      & a {
        color: rgba(255, 255, 255, 0.6);
        text-decoration: navajowhite;
      }

      & button{
        text-decoration: underline;
      }

      span {
        background: transparent;
        border: none;
        font-family: Pragmatica Extended, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.6);
        transform: translateY(-10px);
      }
    }
  }
`

const Image = styled.label`
  
  .preview {
    width: 180px;
    min-width: 180px;
    height: 80px;
    display: block;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    cursor: pointer;
  }

  .download {
    font-family: 'TTInterfaces-Bold';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #36B37E;
    padding: 12px 24px;
    border: 2px solid #36B37E;
    border-radius: 12px;
    @media(max-width: 325px) {
      font-size: 16px;
    }
  }
  
  .hidden-input {
    display: none;
  }
`

export {
  HomeWrap,
  MainScreenWrap,
  DeskBlockWrap,
  ThirdBlockWrap,
  ProcessCreateBlockWrap,
  MainFormWrap,
  NewProjectsWrap,
  Image
}