import React, {useState, useEffect} from "react";
import axios from "axios";

import * as Style from './styled';
import logo from '../../media/icon/logo.svg';
import vk from '../../media/icon/vk.svg';
import fb from '../../media/icon/facebook.svg';
import tw from '../../media/icon/twitter.svg';

import ApiService from "../../services/api";

const api = new ApiService();

const Footer = () => {

  const [socials, setSocials] = useState([])
  const [documents, setDocuments] = useState(null)

  useEffect(() => {
    const getSocials = async () => {
      await axios.get(`${api.getApi()}socials/`)
        .then(res => {
          setSocials(res.data.reverse());
        }).catch(error => console.error(error));
    }

    const getDocuments = async () => {
      await axios.get(`${api.getApi()}documents/`)
        .then(res => {
          setDocuments(res.data[0]);
        }).catch(error => console.error(error));
    }

    getDocuments().catch(error => console.error(error))
    getSocials().catch(error => console.error(error));
  }, [])

  return (
    <Style.FooterWrap>
      <div className="footer_item">
        <img className={'logo'} src={logo} alt="logo"/>
        <p>© 2021 ООО «СВ СЕРВИС ЛОГИСТИКА»</p>
      </div>
      <div className="footer_item">
        <div className="top">
          <div className="title">Напишите нам</div>
          <a href="mailto:project@alburo.ru">project@alburo.ru</a>
        </div>
        <div className="bottom">
          <a href="tel:+7 (843) 279-32-04">+7 (843) 279-32-04</a>
          <div className="title">г. Казань, 420061,  ул. Николая Ершова, 1а,
            БЦ "Корстон"  офис 838, 8 этаж</div>
        </div>
      </div>
      <div className="footer_item footer_item--left">
        <a href={documents?.political} target={'_blank'} className={'political'}>Политика конфиденциальности</a>
        <div className="social_links">
          {
            socials?.map(social => {
              return <a href={social.link} target={'_blank'} className={'social_link'} rel="noreferrer"><img src={social.icon} alt="icon"/></a>
            })
          }
        </div>
        <p className={'mobile_block'}>© 2021 ООО «СВ СЕРВИС ЛОГИСТИКА»</p>
      </div>

    </Style.FooterWrap>
  )
}

export default Footer;