import React from 'react';
import bg from "../../media/image/gradient2.svg";
import styled from 'styled-components'

const BgGradient = ({data}) => {

  return (
    <Circle x={data[0]} y={data[1]} id={'circle-light'}/>

    // <ImageBg id={'mask'} src={bg} alt="image"/>
  )
}

export default BgGradient;

const ImageBg = styled.img`
  transition: all .3s;
  position: fixed;
  left: 0;
  top: 0;
  mask-image: radial-gradient(380px 410px at 400px 400px, #000000 0%, rgba(0, 0, 0, 0) 100%);
  //-webkit-mask-size: 100%;
  mask-size: 100%;
  //-webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  //-webkit-mask-position: center;
  z-index: -1;
  width: 100%;
  min-height: 100vh;
  object-fit: cover;
  //animation: infinite 10s animGradient;
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

const Circle = styled.div`
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: rgb(153,76,18);
  background: linear-gradient(63deg, rgba(153,76,18,.7) 0%, rgba(206,209,28,.7) 48%, rgba(89,147,203,.7) 94%);
  transition: transform .3s;
  position: fixed;
  // left: ${props => props.x ? props.x + 'px' : 0};
  // top: ${props => props.y ? props.y + 'px' : 0};
  left: 0;
  top: 0;
  z-index: -1;
  filter: blur(21px);
`

