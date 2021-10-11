import React, {useState} from 'react'

import * as Style from './styled'

const MainInput = (props) => {
  const [active, setActive] = useState(false)
  const [limit, setLimit] = useState(0)

  const {type, name, label, classList, max} = props;

  const focusInput = (e) => {
    if(e.currentTarget.value) {
      setActive(true)
    } else {
      setActive(false)
    }

    if(max) {
      setLimit(e.currentTarget.value.length);
    }
  }

	return (
		<Style.WrapperInput className={classList}>
      <div className={`label ${active && 'active'}`}>{label}</div>
      <input
        type={type}
        name={name}
        onInput={(e) => focusInput(e)}
        maxLength={max}
      />

      {
        max && (
          <div className={'limit'}>
            {limit} / {max}
          </div>
        )
      }
		</Style.WrapperInput>
	)
}

export default MainInput