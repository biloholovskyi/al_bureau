import styled from "styled-components";

const PalletWrapper = styled.div`
  padding: 80px 0 60px;
  display: flex;
  width: 100%;
  
  .pallet-title {
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
    padding: 40px 0;
    
    .pallet-title {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 40px;
    }
  }
`

const Pallet = styled.div`
  display: flex;
  width: 100%;
  
  .pallet-col {
    width: calc(100% / 4);
    margin-right: 20px;
    
    &:last-child {
      margin-right: 0;
    }
    
    img {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
  }
  
  @media (max-width: 575px) {
    flex-wrap: wrap;
    
    .pallet-col {
      width: 100%;
      max-width: 100%;
      margin-right: 0;
      
      img {
        margin-bottom: 20px;
      }
    }
  }
`

export {
  PalletWrapper,
  Pallet
}