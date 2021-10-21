import React, {useState} from 'react'
import SendModal from "../../../components/sendModal/sendModal";

import * as Style from '../styled';
import icon from '../../../media/icon/attachment.svg'
import axios from "axios";

const MainForm = () => {
const [inputLength, setInputLength] = useState('');
const [showModal, setShowModal] = useState(false);

  const inputCounter = (e) => {
    const length = e.target.value;
    setInputLength(length)
  }

  const sendMessage = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const data = new FormData();

    data.set("name", e.target.name.value);
    data.set("phone", e.target.phone.value);
    data.set("email", e.target.email.value);
    data.set("social", e.target.social.value);
    data.set("desc", e.target.desc.value);

    await axios.post(`http://alburo.ru/api/telegram.php`, data)
      .then(res => {
        setShowModal(true);
        e.target.name.value = '';
        e.target.phone.value = '';
        e.target.email.value = '';
        e.target.social.value = '';
        e.target.desc.value = '';
      })
      .catch(error => console.error(error));
  }

  return (
    <>
      {showModal && <SendModal close={() => setShowModal(false)}/>}
      <Style.MainFormWrap>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-12"><h3 className={'small_title'}>Хотите работать у нас?</h3></div>
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
              <h2 className={'animText anim_no_hide'}>Оставьте свои контакты<br/>
                и мы свяжемся с вами</h2>
              <form onSubmit={(e) => sendMessage(e)}>
                <div className="form-floating w-100">
                  <input name={'name'} type="text" className="form-control bg-transparent border-end-0 border-start-0 border-top-0 rounded-0 ps-0" id="floatingInput" placeholder="name@example.com" />
                  <label className={'ps-0'} htmlFor="floatingInput">Ваше имя</label>
                </div>
                <div className="double">
                  <div className="form-floating w-100">
                    <input name={'phone'} type="text" className="form-control bg-transparent border-end-0 border-start-0 border-top-0 rounded-0 ps-0" id="floatingInput" placeholder="name@example.com" />
                    <label className={'ps-0'} htmlFor="floatingInput">Ваш номер телефона</label>
                  </div>
                  <div className="form-floating w-100">
                    <input required={true} name={'email'} type="email" className="form-control bg-transparent border-end-0 border-start-0 border-top-0 rounded-0 ps-0" id="floatingInput" placeholder="name@example.com" />
                    <label className={'ps-0'} htmlFor="floatingInput">Ваша почта</label>
                  </div>
                  <div className="form-floating w-100">
                    <input name={'social'} type="text" className="form-control bg-transparent border-end-0 border-start-0 border-top-0 rounded-0 ps-0" id="floatingInput" placeholder="name@example.com" />
                    <label className={'ps-0'} htmlFor="floatingInput">Ссылка на соц. сети</label>
                  </div>
                </div>
                <div className={'blockWithCount mb-5 w-100'}>
                  <div className="form-floating w-100 mb-0">
                    <input name={'desc'} maxLength={'200'} onChange={(e)=> inputCounter(e)} type="text" className="form-control bg-transparent border-end-0 border-start-0 border-top-0 rounded-0 ps-0" id="floatingInput" placeholder="name@example.com" />
                    <label className={'ps-0'} htmlFor="floatingInput">Комментарий</label>
                  </div>
                  <div className="counter text-end">{inputLength.length} / 200</div>
                </div>
                <div className="btn_section d-flex w-100 justify-content-between align-items-center">
                  <button type="submit" className="btn btn-light rounded-pill border-0 text-white text-uppercase d-flex align-items-center justify-content-center main_btn">
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Style.MainFormWrap>
    </>
  )
}

export default MainForm;