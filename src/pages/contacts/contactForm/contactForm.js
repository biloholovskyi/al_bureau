import React, {useState} from 'react'

import MainInput from "../../../components/inputs/mainInput";
import InputSubmit from "../../../components/inputs/inputSubmit";

import * as Style from './styled'
import axios from "axios";
import SendModal from "../../../components/sendModal/sendModal";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);

  const sendMessage = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const data = new FormData();

    data.set("name", e.target.name.value);
    data.set("phone", e.target.phone.value);
    data.set("email", e.target.email.value);
    data.set("desc", e.target.desc.value);

    await axios.post(`http://alburo.ru/api/telegram.php`, data)
      .then(res => {
        setShowModal(true);
        e.target.name.value = '';
        e.target.phone.value = '';
        e.target.email.value = '';
        e.target.desc.value = '';
      })
      .catch(error => console.error(error));
  }

  return (
    <>
      {showModal && <SendModal close={() => setShowModal(false)}/>}
      <Style.FormWrapper onSubmit={(e) => sendMessage(e)}>
        <MainInput
          type={'text'}
          name={'name'}
          label={'Ваше имя'}
          classList={'contact-input'}
        />

        <div className="double">
          <MainInput
            type={'tel'}
            name={'phone'}
            label={'Ваш номер телефона'}
            classList={'mr-input contact-input'}
          />

          <MainInput
            type={'email'}
            name={'email'}
            label={'Ваш Email'}
            classList={'contact-input'}
          />
        </div>

        <MainInput
          max={12345}
          type={'text'}
          name={'desc'}
          label={'Опишите ваш проект'}
          classList={'contact-input'}
        />

        <InputSubmit text={'Отправить'} classList={'contact-submit'}/>
      </Style.FormWrapper>
    </>
	)
}

export default ContactForm