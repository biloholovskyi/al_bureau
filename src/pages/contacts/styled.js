import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 206px;
  padding-bottom: 150px;
  display: flex;
  
  h1 {
    font-family: Pragmatica Extended, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 80px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    font-feature-settings: 'ss04' on, 'ss05' on, 'ss06' on, 'ss08' on, 'liga' off, 'calt' off;
    color: #FFFFFF;
    margin-bottom: 50px;
  }
  
  .content-block {
    width: 100%;
    
    &--left {
      padding-left: 50px;
    }
    
    &--right {
      padding-right: 50px;
    }
    
    .socials {
      &-name {
        font-family: Pragmatica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.01em;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 18px;
      }
      
      &-list {
       a {
         display: flex;
         align-items: center;
         justify-content: center;
         text-decoration: none;
         width: 56px;
         height: 56px;
         min-width: 56px;
         min-height: 56px;
         border: 1px solid rgba(255, 255, 255, 0.2);
         border-radius: 50%;
         margin-right: 20px;
         
         &:last-child {
           margin-right: 0;
         }
         
         img {
           object-fit: contain;
           object-position: center;
           width: 28px;
           height: 28px;
         }
       } 
      }
    }
  }
`

export {
  Wrapper
}