import React from 'react'

import MainInput from "../../../components/inputs/mainInput";
import InputSubmit from "../../../components/inputs/inputSubmit";

import * as Style from './styled'

const ContactForm = () => {
	return (
		<Style.FormWrapper>
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
	)
}

export default ContactForm