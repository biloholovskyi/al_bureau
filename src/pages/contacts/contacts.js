import React, {useState, useEffect} from 'react'
import axios from "axios";

import Footer from "../../components/footer/footer";
import ContactItem from "./contactItem/contactItem";
import ContactForm from "./contactForm/contactForm";

import * as Style from './styled'

import ApiService from "../../services/api";

const api = new ApiService();

const contacts = [
  {
    id: 1,
    name: 'Телефон',
    contact: '+7 962 559 04 24',
    type: 'phone'
  },
  {
    id: 2,
    name: 'Email',
    contact: 'albertgaifullin@gmail.com',
    type: 'email'
  },
  {
    id: 3,
    name: 'Адрес',
    contact: 'ул. Пушкина, 30, Казань, Респ. Татарстан',
    type: 'text'
  },
]

const Contacts = () => {
  const [contactsList, setContactsList] = useState([])
  const [socials, setSocials] = useState([])

  useEffect(() => {
    setContactsList(contacts)
  }, [])

  useEffect(() => {
    const getSocials = async () => {
      await axios.get(`${api.getApi()}socials/`)
        .then(res => {
          setSocials(res.data.reverse());
        }).catch(error => console.error(error));
    }

    getSocials().catch(error => console.error(error));
  }, [])

	return (
	  <>
      <Style.Wrapper>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1>Контакты</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="content-block content-block--right">

                {
                  contactsList.map(item => {
                    return <ContactItem key={item.id} data={item}/>
                  })
                }

                <div className="socials">
                  <div className="socials-name">Cоц. сети</div>

                  <div className="socials-list">

                    {
                      socials?.map(social => {
                        return <a href={social.link} target={'_blank'} rel="noreferrer"><img src={social.icon} alt="icon"/></a>
                      })
                    }

                  </div>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="content-block content-block--left">
                <ContactForm/>
              </div>
            </div>
          </div>
        </div>
      </Style.Wrapper>

      <Footer/>
    </>
	)
}

export default Contacts