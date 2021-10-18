import React, {useState, useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router";

import * as Style from '../styled';

import ApiService from "../../../services/api";

const api = new ApiService();

const PrevNextCaseBlock = ({data}) => {
  const [prevCase, setPrevCase] = useState(null)
  const [nextCase, setNextCase] = useState(null)

  const history = useHistory();

  useEffect(() => {
    const getCases = async () => {
      await axios.get(`${api.getApi()}cases/`)
        .then(res => {
          const list = res.data.reverse()

          if (list.length < 3) {
            return
          }

          console.log(data)
          // получаем индекс текущего кейса
          const currentIndex = list.findIndex(item => parseInt(item.id) === parseInt(data?.id));

          if (currentIndex === 0) {
            setNextCase(list[1]);
            setPrevCase(list[list.length - 1])
          } else if (currentIndex === list.length - 1) {
            setNextCase(list[0])
            setPrevCase(list[list.length - 2]);
          } else {
            setNextCase(list[currentIndex + 1]);
            setPrevCase(list[currentIndex - 1]);
          }
        }).catch(error => console.error(error));
    }

    getCases().catch(error => console.error(error))
  }, [data])

  return (
    <Style.PrevNextCaseBlockWrap>
      <div
        onClick={() => {
          history.push(`/projects/${prevCase?.id}`)
        }}
        className="caseItem caseItem--prev"
      >
        <div className="blur"/>
        <img src={`${prevCase?.banner}`} alt="image"/>
        <div className="text">
          <div className="title">Предыдущий кейс</div>
          <div className="name">{prevCase?.title}</div>
        </div>
      </div>
      <div
        onClick={() => {
          history.push(`/projects/${nextCase?.id}`)
        }}
        className="caseItem"
      >
        <div className="blur"/>
        <img src={nextCase?.banner} alt="image"/>
        <div className="text">
          <div className="title">Следующий кейс</div>
          <div className="name">{nextCase?.title}</div>
        </div>
      </div>
    </Style.PrevNextCaseBlockWrap>
  )
}

export default PrevNextCaseBlock;