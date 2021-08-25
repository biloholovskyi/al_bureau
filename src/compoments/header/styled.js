import styled from 'styled-components';

import bg from '../../media/image/menu_hover.png';
import bg2 from '../../media/image/menu_hover2.png';

const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: ${props => props.fixed ? 'fixed' : 'absolute'};
  padding: 0 42px;
  background-color: transparent;
  top: 42px;
  left: 0;
  z-index: 50;
  .logo {
    width: 166px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .menuBtn {
    width: 64px;
    height: 64px;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .closeMenu {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(16px);
    img {
     width: 28px;
      height: 28px;
      object-fit: contain;
    }
  }
`

const Menu = styled.div`
  width: 100%;
  min-height: 100vh;
  z-index: 49;
  background: #000;
  position: fixed;
  left: 0;
  top: 0;
  display:  ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
 .nav {
   a {
     font-family: Pragmatica Extended, sans-serif;
     font-style: normal;
     font-weight: bold;
     font-size: 56px;
     line-height: 64px;
     letter-spacing: -0.02em;
     text-transform: uppercase;
     color: #FFFFFF;
     margin-bottom: 80px;
     text-decoration: none;
     display: block;
     width: fit-content;
     z-index: 10;
     &:hover {
       color: transparent;
       -webkit-text-stroke: 1px #fff;
       transition: .3s;
       z-index: 10;
     }
   }
   }
   & a:last-child{
     margin-bottom: 0;
   }
 //   & a:first-child:hover{
 //      &:after {
 //        content: "";
 //        position: absolute;
 //        width: 100%;
 //        min-height: 100vh;
 //        background-image: url(${bg});
 //        left: 0;
 //        top: 0;
 //        background-size: cover;
 //        transition: .4s;
 //        z-index: 9;
 //     
 //   }
 // }
 //   & a:nth-child(2):hover{
 //     &:after {
 //       content: "";
 //       position: absolute;
 //       width: 100%;
 //       min-height: 100vh;
 //       background-image: url(${bg2});
 //       left: 0;
 //       top: 0;
 //       background-size: cover;
 //       transition: .4s;
 //       z-index: 9;
 //
 //     }
 //   }
`

export {
  HeaderWrap,
  Menu
}