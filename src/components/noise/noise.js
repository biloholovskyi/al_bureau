import React from 'react'

const Noise = () => {
  return (
    <>
      <div id={'section'} />
      <svg id={'svg'}>
        <filter id={'noise'}>
          <feTurbulence id={'turbulence'}>
            <animate attributeName={'baseFrequency'} dur='40s' values='0.9 0.9;0.8 0.8;0.9 0.9;'
                     repeatCount={'indefinite'}/>
          </feTurbulence>
          <feDisplacementMap in={'SourceGraphic'} scale={'30'}/>
        </filter>
      </svg>
    </>
  )
}

export default Noise;