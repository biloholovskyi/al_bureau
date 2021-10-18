import React, {useState, useEffect} from 'react'

import * as Style from './styled'

const ProgressBar = ({percent = 0}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percent);
  }, [percent])

	return (
		<Style.Wrapper>
      <Style.LoadingProgress percent={progress}/>
		</Style.Wrapper>
	)
}

export default ProgressBar