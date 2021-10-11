import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .6);
  z-index: 1000000;
  position: fixed;
  padding: 40px;
  top: 0;
  left: 0
`

const ImagePopup = styled.img`
  max-width: 100%;
  max-height: 100%;
  
`

export {
  Wrapper,
  ImagePopup
}