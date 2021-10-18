import React from 'react'

import Noise from "../noise/noise";
import ProgressBar from "../progressBar/progressBar";

import * as Style from './styled'

const Preloader = () => {
	return (
		<Style.Wrapper>
		  <Noise/>

      <ProgressBar/>
		</Style.Wrapper>
	)
}

export default Preloader