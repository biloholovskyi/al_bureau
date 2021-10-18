import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  width: 320px;
  height: 10px;
  border-radius: 30px;
  background-color: #807878;
  border: 2px solid #292828;
  position: relative;

  @media (max-width: 565px) {
    width: 290px;
  }
`

const ProgressAnimation = keyframes`
  0% {
    width: 14%;
  }

  10% {
    width: 14%;
  }

  20% {
    width: 17%;
  }

  30% {
    width: 24%;
  }

  40% {
    width: 34%;
  }

  50% {
    width: 34%;
  }

  60% {
    width: 38%;
  }

  70% {
    width: 44%;
  }

  80% {
    width: 64%;
  }

  90% {
    width: 83%;
  }
  
  100% {
    width: 100%;
  }
`;

const LoadingProgress = styled.div`
  height: 100%;
  border-radius: 30px;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  background-color: #c18d58;
  animation: 4s forwards ease-in-out ${ProgressAnimation};
`

export {
  Wrapper,
  LoadingProgress
}