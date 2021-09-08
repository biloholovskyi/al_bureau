import styled from 'styled-components';

import bg from '../../media/image/menu_hover.png';
import bg2 from '../../media/image/menu_hover2.png';
import bg3 from '../../media/image/menu_hover3.svg';

const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 0 42px;
  background-color: transparent;
  top: 42px;
  left: 0;
  z-index: 50;
  overflow: hidden;
  .logo {
    width: 166px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 50;
    transition: all .5s;
    transform: ${props => props.sticky ? 'translateY(-200%)' : 'translateY(0)'};
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    @media(max-width: 575px) {
      width: 115px;
      height: 24px;
    }
  }
  .menuBtn {
    width: 64px;
    height: 64px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 50;
    background-color: ${props => props.sticky ? 'rgba(255, 255, 255, 0.1);' : 'transparent'};
    border-radius: 50%;
    backdrop-filter: blur(16px);
    transition: background-color .5s;
    flex-direction: column;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .line {
      width: 28px;
      height: 2px;
      background-color: #fff;
      transition: .5s;
    }
    & .line:first-child {
      margin-bottom: ${props => props.rotateBurger ? '0' : '10px'};
      transform: ${props => props.rotateBurger ? 'rotate(45deg)' : 'rotate(0deg)'};
    }
    & .line:last-child {
      margin-top: ${props => props.rotateBurger ? '-2px' : '0'};
      transform: ${props => props.rotateBurger ? 'rotate(-45deg)' : 'rotate(0deg)'};
    }
    @media(max-width: 575px) {
      width: 48px;
      height: 48px;
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
    z-index: 50;
    img {
     width: 28px;
      height: 28px;
      object-fit: contain;
    }
    @media(max-width: 575px) {
      width: 48px;
      height: 48px;
    }
  }
  @media(max-width: 991px) {
    padding: 0 24px;
  }
  @media(max-width: 767px) {
    top: 20px;
    padding: 0 20px;
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
     transition: all .4s;
     -webkit-text-stroke: 1px #fff;
     &:hover {
       color: transparent;
       -webkit-text-stroke: 1px #fff;
       transition: all .4s;
       z-index: 10;
     }
     &:after {
       content: "";
       position: absolute;
       width: 100%;
       min-height: 100vh;
       left: 0;
       top: 0;
       background-image: url(${bg});
       background-size: cover;
       transition: .5s;
       z-index: -1;
       pointer-events: none;
       opacity: 0;
     }
     @media(max-width: 575px){
       font-size: 28px;
       line-height: 36px;
       margin-bottom: 40px;
     }
   }
   & a:last-child{
     margin-bottom: 0;
   }
   a:first-child:hover{
     &:after {
       transition: .5s;
       opacity: 1;
     }
   }
 }
   & a:nth-child(2):hover{
     &:after {
       content: "";
       position: absolute;
       width: 100%;
       min-height: 100vh;
       background-image: url(${bg2});
       left: 0;
       top: 0;
       background-size: cover;
       transition: .5s;
       z-index: -1;
      opacity: 1;
     }
   }
  & a:nth-child(3):hover{
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      min-height: 100vh;
      background-image: url(${bg3});
      left: 0;
      top: 0;
      background-size: cover;
      transition: .5s;
      z-index: -1;
      opacity: 1;
    }
  }
`

export {
  HeaderWrap,
  Menu
}