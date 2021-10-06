import React from 'react';
import bg from "../../media/image/gradient2.svg";
import styled from 'styled-components'

const BgGradient = ({data}) => {

  return (
    <Circle x={data[0]} y={data[1]} id={'circle-light'}/>
  )
}

export default BgGradient;

const Circle = styled.div`
  width: 480px;
  height: 480px;
  border-radius: 50%;
  background: rgb(204,114,55);
  background-image: url(${bg});
  background-size: 100vh 100vw;
  //background-position: -240px -240px;
  background-position-x: 240px;
  background-position-y: 240px;
  //background-repeat: repeat;
  //background: linear-gradient(63deg, rgba(153,76,18,.7) 0%, rgba(206,209,28,.7) 48%, rgba(89,147,203,.7) 94%);
  transition: transform .3s;
  position: fixed;
  // left: ${props => props.x ? props.x + 'px' : 0};
  // top: ${props => props.y ? props.y + 'px' : 0};
  left: 0;
  top: 0;
  z-index: -1;
  filter: blur(50px);
`

