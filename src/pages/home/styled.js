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
    @media (max-height: 1350px) {
      font-size: 54px;
      line-height: 70px;
    }
    @media (max-width: 1199px) {
      font-size: 44px;
      line-height: 60px;
    }
    @media (max-width: 991px) {
      font-size: 54px;
      line-height: 70px;
    }
    @media (max-width: 575px) {
      font-size: 28px;
      line-height: 36px;
      margin-bottom: 24px;
    }
  }

  .small_desc {
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;
    margin-bottom: 40px;
    @media (max-height: 1199px) {
      font-size: 16px;
      line-height: 24px;
    }
    @media (max-height: 991px) {
      font-size: 18px;
      line-height: 26px;
    }
    @media (max-width: 575px) {
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 28px;
    }
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

    @media (max-width: 767px) {
      display: none;
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
    @media (max-width: 1199px) {
      font-size: 30px;
      line-height: 40px;
    }
    @media (max-width: 1099px) {
      font-size: 28px;
      line-height: 38px;
    }
    @media (max-width: 767px) {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 40px;
    }
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

    @media (max-width: 1199px) {
      img {
        max-width: 350px;
      }

      & img:first-child {
        margin-right: 20px;
      }
    }
    @media (max-width: 1099px) {
      img {
        max-width: 300px;
      }
    }
    @media (max-width: 767px) {
      img {
        max-width: unset;
        width: 48%;
      }
    }
  }

  @media (max-width: 767px) {
    padding-top: 10px;
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
        font-size: 24px;
        line-height: 32px;
        color: #FFFFFF;
      }

      @media (max-width: 1099px) {
        width: 250px;
        height: 250px;
      }

      @media (max-width: 600px) {
        width: calc(50% - 10px);
        height: 150px;
        padding: 20px 16px;
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
    }

    //& .item:nth-child(3n) {
    //  margin-right: 0;
    //}
  }

  @media (max-width: 767px) {
    padding: 40px 0 60px;
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
        text-align: right;
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
          bottom: auto;
          font-size: 12px;
          line-height: 20px;
          top: 35px;
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

  .about-page {

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
      align-items: center;

      & .form-floating:first-child {
        margin-right: 80px;
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
      cursor: pointer;
      text-decoration: none;

      &:visited,
      &:focus,
      &:active,
      &:hover {
        text-decoration: none;
      }

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
        -webkit-text-stroke: 1px #fff;
        transition: all .7s;
        @media (max-width: 991px) {
          font-size: 45px;
          line-height: 50px;
        }
        @media (max-width: 767px) {
          font-size: 36px;
          line-height: 40px;
        }
        @media (max-width: 575px) {
          font-size: 20px;
          line-height: 30px;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }
      }

      .info > * {
        font-family: Pragmatica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
        @media (max-width: 575px) {
          font-size: 14px;
          position: relative;
          z-index: 1;
        }
      }

      .hover_image {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        min-height: 100vh;
        z-index: -1;
        object-fit: cover;

        opacity: 0;
        transition: opacity .3s;
        @media (max-width: 575px) {
          position: absolute;
          min-height: unset;
          opacity: 1;
          max-height: 120px;
          z-index: 0;
          left: -20px;
          min-width: calc(100% + 40px);
        }
      }


      &:hover .name {
        color: transparent;
        -webkit-text-stroke: 1px #fff;
        transition: all .5s;
        z-index: 10;
      }

      &:hover .hover_image {

        opacity: 1;
        transition: opacity .3s;
      }

      @media (max-width: 575px) {
        margin-bottom: 0;
        padding: 28px 20px;
        border-bottom: none;
        position: relative;
        max-height: 120px;
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
        @media (max-width: 575px) {
          font-size: 16px;
          line-height: 22px;
        }
      }

      & a {
        text-decoration: underline;
      }

      & button {
        color: rgba(255, 255, 255, 0.6);
        text-decoration: none;
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

      @media (max-width: 575px) {
        margin-top: 28px;
      }
    }
  }

  @media (max-width: 575px) {
    padding: 40px 0;

    & .small-col {
      padding: 0 !important;
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
    @media (max-width: 575px) {
      width: 100%;
    }
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
    @media (max-width: 325px) {
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