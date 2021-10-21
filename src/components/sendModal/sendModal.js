import React from 'react'
import styled from "styled-components";

import close from './close.svg'

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 5000;
  background-color: rgba(0, 0, 0, .6);
  display: flex;
  align-items: center;
  justify-content: center;
  
  .body {
    border-radius: 7px;
    background-color: #fff;
    padding: 40px;
    position: relative;
    
    p {
      font-family: Pragmatica, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
      text-align: center;
      color: #000;
    }
    
    .close {
      width: 16px;
      height: 16px;
      cursor: pointer;
      position: absolute;
      top: 15px;
      right: 15px;
      background-image: url(${close});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`

const SendModal = ({close}) => {
	return (
		<Wrapper>
      <div className="body">
        <div className="close" onClick={close}/>
        <p>Сообщение отправлено.</p>
      </div>
		</Wrapper>
	)
}

export default SendModal