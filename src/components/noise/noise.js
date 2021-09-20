import React from 'react'
import styled, {keyframes} from "styled-components";
import noise from './noise.png'

const VideoWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -2;
  background-color: #000;
`;

const NoiseAnimation = keyframes`
  0%, 100% {
        background-position: 0 0;
    }

    10% {
        background-position: -5% -10%;
    }

    20% {
        background-position: -15% 5%;
    }

    30% {
        background-position: 7% -25%;
    }

    40% {
        background-position: 20% 25%;
    }

    50% {
        background-position: -25% 10%;
    }

    60% {
        background-position: 15% 5%;
    }

    70% {
        background-position: 0% 15%;
    }

    80% {
        background-position: 25% 35%;
    }

    90% {
        background-position: -10% 10%;
    }
`;

const NoiseBlock = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${noise});
  z-index: -2;
  animation: 1s infinite ${NoiseAnimation};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Noise = () => {
  return (
    <>
      <VideoWrapper>
        <NoiseBlock/>
      </VideoWrapper>
    </>
  )
}

export default Noise;