import React, {useState} from 'react'

import * as Style from './styled';
import logo from '../../media/icon/logo.svg';
import burger from '../../media/icon/menuBtn.svg';
import close from '../../media/icon/close.svg';

const Header = () => {
  const [menu, setMenu] = useState(false)

  const showMenu = () => {
    setMenu(!menu)
  }

  return (
   <>
     <Style.HeaderWrap fixed={menu}>
       <a className={'logo'} href="/"><img src={logo} alt="logo"/></a>
       {
         menu
         ? <button onClick={showMenu} className={'closeMenu'}><img src={close} alt="icon"/></button>
           :  <button onClick={showMenu} className={'menuBtn'}><img src={burger} alt="icon"/></button>
       }
     </Style.HeaderWrap>

     <Style.Menu show={menu}>
       <div className="container-fluid">
         <div className="row">
           <div className="col-12">
             <div className="nav d-flex flex-column">
               <a href={'/projects'}>Проекты</a>
               <a href={'/about'}>О нас</a>
               <a href={'/contacts'}>Контакты</a>
             </div>
           </div>
         </div>
       </div>
     </Style.Menu>
   </>
  )
}

export default Header;