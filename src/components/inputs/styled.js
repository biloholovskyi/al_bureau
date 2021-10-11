import styled from "styled-components";

const WrapperInput = styled.div`
  width: 100%;
  position: relative;
  
  .label {
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    font-feature-settings: 'ss03' on, 'ss04' on;
    color: rgba(255, 255, 255, 0.6);
    transition: all .3s;
    position: absolute;
    left: 0;
    bottom: 25px;
    z-index: -1;
    
    &.active {
      font-size: 14px;
      line-height: 22px;
      bottom: 51px;
    }
  }
  
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
    position: relative;
    z-index: 1;
    padding: 25px 0;
    outline: none;
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    font-feature-settings: 'ss03' on, 'ss04' on;
    color: #FFFFFF;
  }
  
  .limit {
    position: absolute;
    bottom: -34px;
    right: 0;
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    font-feature-settings: 'ss03' on, 'ss04' on;
    color: rgba(255, 255, 255, 0.6);
  }
`

const Submit = styled.button`
  font-family: Pragmatica Extended, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  font-feature-settings: 'ss03' on, 'ss04' on;
  color: #FFFFFF;
  padding: 14px 22px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border-radius: 1000px;
  border: none;
`

export {
  WrapperInput,
  Submit
}