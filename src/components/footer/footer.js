import React from "react";

import * as Style from './styled';
import logo from '../../media/icon/logo.svg';
import vk from '../../media/icon/vk.svg';
import fb from '../../media/icon/facebook.svg';
import tw from '../../media/icon/twitter.svg';

const Footer = () => {
  return (
    <Style.FooterWrap>
      <div className="footer_item">
        <img className={'logo'} src={logo} alt="logo"/>
        <p>© 2018  SV-GROUP</p>
      </div>
      <div className="footer_item">
        <div className="top">
          <div className="title">Напишите нам</div>
          <a href="mailto:contact@albreau.ru">contact@albreau.ru</a>
        </div>
        <div className="bottom">
          <a href="tel:+7 (843) 279-32-04">+7 (843) 279-32-04</a>
          <div className="title">г.Казань, 420061,  ул. Николая Ершова, 1а,
            БЦ "Корстон"  офис 838, 8 этаж</div>
        </div>
      </div>
      <div className="footer_item">
        <div className="social_links">
          <a href="#" className={'social_link'}><img src={vk} alt="icon"/></a>
          <a href="#" className={'social_link'}><img src={fb} alt="icon"/></a>
          <a href="#" className={'social_link'}><img src={tw} alt="icon"/></a>
        </div>
        <p className={'mobile_block'}>© 2018  SV-GROUP</p>
      </div>

    </Style.FooterWrap>
  )
}

export default Footer;