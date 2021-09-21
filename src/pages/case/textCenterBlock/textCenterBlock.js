import React from 'react';

import * as Style from '../styled';

const TextCenterBlock = () => {
  return (
    <Style.TextCenterBlockWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center animText anim_no_hide">h2 title: Lorem ipsum dolor</h2>
          </div>
          <div className="col-12">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue erat, a consectetur lorem
              placerat ac. Sed eros ligula, elementum sed arcu sed, placerat venenatis nisi. Morbi ut purus placerat
              lacus euismod ullamcorper ut at quam. Sed tincidunt ante ac libero congue, vel imperdiet est gravida.
              Mauris pellentesque libero non eleifend convallis.</p>
          </div>
        </div>
      </div>
    </Style.TextCenterBlockWrap>
  )
}

export default TextCenterBlock;