import React from 'react'

import * as Style from '../styled';

const SimpleTextBlock = () => {
  return (
    <Style.SimpleTextWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6"><h2>Lorem ipsum dolor sit amet, consectetur</h2></div>
          <div className="col-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue erat, a consectetur lorem
              placerat ac. Sed eros ligula, elementum sed arcu sed, placerat venenatis nisi. Morbi ut purus placerat
              lacus euismod ullamcorper ut at quam. Sed tincidunt ante ac libero congue, vel imperdiet est gravida.
              Mauris pellentesque libero non eleifend convallis.</p>
          </div>
        </div>
      </div>
    </Style.SimpleTextWrap>
  )
}

export default SimpleTextBlock;