import React from 'react';
import {NavLink} from "react-router-dom";

import * as Style from '../styled';

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
                    <NavLink
                      to={`/projects/${item.id}`}
                      key={key}
                      className="projects_block--item"
                      onMouseEnter={() => {
                        document.getElementById('circle-light').style.zIndex = '-10'
                      }}
                      onMouseLeave={() => {
                        document.getElementById('circle-light').style.zIndex = '-1'
                      }}
                    >
                      <div className="name">{item.name}</div>
                      <div className="info d-flex align-items-center">
                        <div className="city">{item.year}</div>
                      </div>
                      <img className={'hover_image'} src={`${item?.banner}`} alt="image"/>
                    </NavLink>
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