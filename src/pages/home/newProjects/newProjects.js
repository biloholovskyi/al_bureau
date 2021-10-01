import React from 'react';
import {NavLink} from "react-router-dom";

import * as Style from '../styled';
import image from '../../../media/image/slide.png';
import image2 from '../../../media/image/slide2.png'
import image3 from '../../../media/image/slide3.png'

import ApiService from "../../../services/api";

const api = new ApiService();

const projects = [
  {name: 'Набережная о. Кабан' , city: 'Казань' , date: 2020, hoverImage: image},
  {name: 'Таиф' , city: 'Казань' , date: 2019, hoverImage: image2},
  {name: 'НКЦ' , city: 'Казань' , date: 2019, hoverImage: image3},
  {name: 'ПЕТРОПАВЛОВСКИЙ СОБОР' , city: 'Казань' , date: 2018, hoverImage: image2},
  {name: 'мечеть «кул-шариф»' , city: 'г. Казань, Казанский кремль' , date: 2016, hoverImage: image},
]

const NewProjects = ({cases, all}) => {
  return (
    <Style.NewProjectsWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12"><h3 className={'small_title'}>свежие проекты</h3></div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12 small-col">
            <div className="projects_block">
              {
                cases?.map((item, key) => {
                  return (
                    <div key={key} className="projects_block--item">
                      <div className="name">{item.name}</div>
                      <div className="info d-flex align-items-center">
                        <div className="city">{item.year}</div>
                      </div>
                      <img className={'hover_image'} src={`${item?.banner}`} alt="image"/>
                    </div>
                  )
                })
              }
             <div className="btn-block d-flex align-items-center">
               <button>Смотреть Все</button>
               <NavLink to={'projects'}>Проекты</NavLink>
               <span>({all})</span>
             </div>
            </div>
          </div>
        </div>
      </div>
    </Style.NewProjectsWrap>
  )
}

export default NewProjects;