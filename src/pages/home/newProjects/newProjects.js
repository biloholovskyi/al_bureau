import React from 'react';

import * as Style from '../styled';

const projects = [
  {name: 'Набережная о. Кабан' , city: 'Казань' , date: 2020},
  {name: 'Таиф' , city: 'Казань' , date: 2019},
  {name: 'НКЦ' , city: 'Казань' , date: 2019},
  {name: 'ПЕТРОПАВЛОВСКИЙ СОБОР' , city: 'Казань' , date: 2018},
  {name: 'мечеть «кул-шариф»' , city: 'г. Казань, Казанский кремль' , date: 2016},
]

const NewProjects = () => {
  return (
    <Style.NewProjectsWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3"><h3 className={'small_title'}>свежие проекты</h3></div>
          <div className="col-9">
            <div className="projects_block">
              {
                projects.map((item, key) => {
                  return (
                    <div key={key} className="projects_block--item">
                      <div className="name">{item.name}</div>
                      <div className="info d-flex align-items-center">
                        <div className="city">{item.city}</div>
                        <div className={'ms-2 me-2'}>/</div>
                        <div className="date">{item.date}</div>
                      </div>
                    </div>
                  )
                })
              }
             <div className="btn-block d-flex align-items-center">
               <button>Смотреть Все</button>
               <button>Проекты</button>
               <span>({projects.length})</span>
             </div>
            </div>
          </div>
        </div>
      </div>
    </Style.NewProjectsWrap>
  )
}

export default NewProjects;