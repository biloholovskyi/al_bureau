import React from 'react';
import bg from "./bg.jpg";
import styled from 'styled-components'

const BgGradient = () => {

  return (
    <Circle id={'circle-light'}/>
  )
}

export default BgGradient;

const Circle = styled.div`
  width: 60vh;
  height: 60vh;
  min-width: 480px;
  min-height: 480px;
  border-radius: 50%;
  background: #01A1FF;
  background-image: url(${bg});
  background-size: 100vh 100vw;
  background-position-x: 240px;
  background-position-y: 240px;
  transition: transform .3s;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  filter: blur(320px);
  overflow: hidden;
  
  @media (max-width: 767px) {
    width: 30vh;
    height: 30vh;
    filter: blur(150px);
    left: 30vw;
    top: 100px;
  }
`

