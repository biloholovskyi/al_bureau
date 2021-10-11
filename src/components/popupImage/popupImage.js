import React from 'react'

import * as Style from './styled'

const PopupImage = ({image, close}) => {
	return (
		<Style.Wrapper onClick={close}>
		  <Style.ImagePopup alt={'image'} src={image}/>
		</Style.Wrapper>
	)
}

export default PopupImage