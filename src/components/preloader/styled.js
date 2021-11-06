import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  .preloader-logo {
    display: block;
    margin-bottom: 24px;
  }
`

export {
  Wrapper
}