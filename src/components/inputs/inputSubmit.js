import React from 'react'

import * as Style from './styled'

const InputSubmit = (props) => {
  const {text, classList} = props;

	return (
		<Style.Submit className={classList}>{text}</Style.Submit>
	)
}

export default InputSubmit