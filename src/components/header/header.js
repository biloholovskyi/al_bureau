import React, {useState, useEffect} from 'react'

import * as Style from './styled';
import logo from '../../media/icon/logo.svg';
import burger from '../../media/icon/menuBtn.svg';
import close from '../../media/icon/close.svg';

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [header, setHeader] = useState(false)

  const listenScrollEvent = (event) => {
    if (window.scrollY < 1) {
      return setHeader(false)
    } else if (window.scrollY > 1) {
      return setHeader(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () =>
      window.addEventListener('scroll', listenScrollEvent);
  }, [])

  const showMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
      <Style.HeaderWrap fixed={menu} sticky={header} rotateBurger={menu}>
        <a className={'logo'} href="/"><img src={logo} alt="logo"/></a>
        <button onClick={showMenu} className={'menuBtn'}>
          <div className="line"/>
          <div className="line"/>
        </button>

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