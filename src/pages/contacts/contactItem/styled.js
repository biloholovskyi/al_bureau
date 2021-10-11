import styled from "styled-components";

const Item = styled.div`
  width: 100%;
  margin-bottom: 38px;
  
  .name {
    margin-bottom: 14px;
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;;
    letter-spacing: -0.01em;
    color: rgba(255, 255, 255, 0.8);
  }
  
  .contact {
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
    text-decoration: none;
    
    &:visited,
    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
    }
  }
`

export {
  Item
}