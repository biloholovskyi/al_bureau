import styled from 'styled-components';

import bg from '../../media/image/bg.png';

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
    font-size: 18px;
    line-height: 26px;
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
      button {
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

      & button:first-child {
        color: rgba(255, 255, 255, 0.6);
      }

      & button:nth-child(2) {
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

export {
  HomeWrap,
  MainScreenWrap,
  DeskBlockWrap,
  ThirdBlockWrap,
  ProcessCreateBlockWrap,
  MainFormWrap,
  NewProjectsWrap
}