import styled from "styled-components";

import icon from './media/delimiter.svg'

const Wrapper = styled.div`
  padding: 80px 0;
  display: flex;
  
  .beforeAfter__title {
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
  
  @media (max-width: 767px) {
    margin-left: -20px;
    margin-right: -20px;
    padding: 40px 0;
    
    .beforeAfter__title {
      margin-bottom: 24px;
      font-size: 20px;
      line-height: 30px;
    }
  }
`

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  //justify-content: flex-end;
  
  .image-item {
    width: 100%;
    height: 674px;
    position: relative;
    overflow: hidden;
    
    img {
      height: 100%;
      object-fit: cover;
      width: ${props => props.full + 'px'}
    }
    
    &:first-child {
      background-color: greenyellow;
      position: absolute;
      width: 100%;
      height: 674px;
      top: 0;
      left: 0;
    }
    
    &:last-child {
      background-color: #0c4128;
      position: relative;
      width: ${props => props.current + 'px'};
      
      .delimiter {
        height: 100%;
        width: 2px;
        background-color: #fff;
        box-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
        cursor: e-resize;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }
  
  @media (max-width: 767px) {
    .image-item {
      height: 270px;
      
      &:first-child {
        height: 270px;
      }
      
      &:last-child {
        .delimiter {
          //&:after {
          //  content: '';
          //  width: 36px;
          //  height: 36px;
          //  position: absolute;
          //  top: 50%;
          //  left: 50%;
          //  margin-top: -18px;
          //  margin-left: -18px;
          //  border-radius: 50%;
          //  background-color: #fff;
          //}
        }
      }
    }
  }
`

export {
  Wrapper,
  ImageWrapper
}