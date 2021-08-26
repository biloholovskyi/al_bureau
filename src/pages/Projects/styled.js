import styled from 'styled-components'

import bg from '../../media/image/bg.png';

const ProjectsWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url(${bg});
  background-size: cover;
  padding-top: 60px;
  background-repeat: no-repeat;
  overflow: hidden;
  h1 {
    font-family: Pragmatica Extended, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 80px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0 120px 30px;
  }
  p {
    font-family: Pragmatica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;
    margin: 0 120px 50px;
  }
  
  .slider {
    position: relative;
    width: 80%;
    height: 500px;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .slider-img {
    position: absolute;
    width: 100%;
    height: 500px;
    transition: all 0.2s;
  }

  .slider-img-prev {
    transform: translateX(-100%);
  }

  .slider-img-next {
    transform: translateX(100%);
  }
`

export {
  ProjectsWrap
}