import React, {useState} from 'react'

import * as Style from '../styled';
import icon from '../../../media/icon/attachment.svg'

const MainForm = () => {
const [inputLength, setInputLength] = useState('');

  const inputCounter = (e) => {
    const length = e.target.value;
    setInputLength(length)
  }

  return (
    <Style.MainFormWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3"><h3 className={'small_title'}>начать проект</h3></div>
          <div className="col-9">
            <h2>Опишите ваш проект</h2>
            <form>
              <div className="double">
                <div className="form-floating w-100">
                  <input type="email" className="form-control bg-transparent border-end-0 border-start-0 border-top-0 rounded-0 ps-0" id="floatingInput" placeholder="name@example.com" />
                  <label className={'ps-0'} htmlFor="floatingInput">Ваше имя</label>
                </div>
                <div className="form-floating w-100">
                  <input type="email" className="form-control bg-transparent border-end-0 border-start-0 border-top-0 rounded-0 ps-0" id="floatingInput" placeholder="name@example.com" />
                  <label className={'ps-0'} htmlFor="floatingInput">Ваш номер телефона</label>
                </div>
              </div>
              <div className="form-floating w-100">
                <input type="email" className="form-control bg-transparent border-end-0 border-start-0 border-top-0 rounded-0 ps-0" id="floatingInput" placeholder="name@example.com" />
                <label className={'ps-0'} htmlFor="floatingInput">Название компании (необязательно)</label>
              </div>
             <div className={' mb-5 w-100'}>
               <div className="form-floating w-100 mb-0">
                 <input onChange={(e)=> inputCounter(e)} type="email" className="form-control bg-transparent border-end-0 border-start-0 border-top-0 rounded-0 ps-0" id="floatingInput" placeholder="name@example.com" />
                 <label className={'ps-0'} htmlFor="floatingInput">Опишите проект</label>
               </div>
               <div className="counter text-end">0 / {inputLength.length}</div>
             </div>
              <div className="d-flex w-100 justify-content-between align-items-center">
                <button type="button" className="btn bg-transparent btn-outline-light rounded-pill border-1 text-white text-uppercase d-flex align-items-center justify-content-center main_btn">
                  <img src={icon} alt="icon" className={'me-3'}/>
                  Добавьте файл
                </button>
                <button type="submit" className="btn btn-light rounded-pill border-0 text-white text-uppercase d-flex align-items-center justify-content-center main_btn">
                  Отправить заявку
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Style.MainFormWrap>
  )
}

export default MainForm;