import React from 'react'

import * as Style from '../styled';
import image from '../../../media/image/slide3.png'

const BigBlock = () => {
  return (
    <Style.BigBlockWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <h2>Lorem ipsum dolor sit amet, consectetur</h2>
            <p className={'fst-italic'}>Italic text: Nullam blandit cursus justo, eu accumsan purus auctor et. Duis arcu
              purus, varius fermentum
              lectus ac, convallis convallis ipsum. Duis ut metus at leo lacinia commodo vitae eu eros. Proin id turpis
              scelerisque, bibendum arcu quis, aliquam nunc.</p>
            <p className={'fw-bold'}>Bold text: Nullam blandit cursus justo, eu accumsan purus auctor et. Duis arcu purus, varius fermentum
              lectus ac, convallis convallis ipsum. Duis ut metus at leo lacinia commodo vitae eu eros. Proin id turpis
              scelerisque.</p>
            <div className="small_title">Nulla a condimentum justo:</div>
            <ol>
              <li>Maecenas cursus augue porta tristique semper.</li>
              <li>Maecenas cursus augue porta tristique semper.</li>
              <li>Maecenas cursus augue porta tristique semper.</li>
              <li>Maecenas cursus augue porta tristique semper.</li>
            </ol>
            <div className="small_title">Nulla a condimentum justo:</div>
            <ul>
              <li>Maecenas cursus augue porta tristique semper.</li>
              <li>Maecenas cursus augue porta tristique semper.</li>
              <li>Maecenas cursus augue porta tristique semper.</li>
              <li>Maecenas cursus augue porta tristique semper.</li>
            </ul>
          </div>
          <div className="col-6">
            <div className="image_container">
              <img className={'w-100'} src={image} alt="image"/>
             <div className="small_img--block">
               <img className={'small_img w-100'} src={image} alt="image"/>
               <img className={'small_img w-100'} src={image} alt="image"/>
               <img className={'small_img w-100'} src={image} alt="image"/>
               <img className={'small_img w-100'} src={image} alt="image"/>
             </div>
            </div>
          </div>
        </div>
      </div>
    </Style.BigBlockWrap>
  )
}

export default BigBlock;