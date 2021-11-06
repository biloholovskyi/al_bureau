import React from 'react'

import Noise from "../noise/noise";
import ProgressBar from "../progressBar/progressBar";

import * as Style from './styled'

import logo from '../../media/icon/logo.svg'

const Preloader = () => {
	return (
		<Style.Wrapper>
		  <Noise/>


      <img src={logo} alt="logo" className="preloader-logo"/>
      <ProgressBar/>
		</Style.Wrapper>
	)
}

export default Preloader