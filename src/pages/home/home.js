import React, {useState, useEffect} from 'react'

import MainScreen from "./mainScreen/mainScreen";
import DescBlock from "./descBlock/descBlock";
import ThirdBlock from "./ThirdBlock/ThirdBlock";
import ProcessCreateBlock from "./processCreateBlock/processCreateBlock";
import Footer from "../../components/footer/footer";
import MainForm from "./MainForm/MainForm";
import NewProjects from "./newProjects/newProjects";

import * as Style from './styled';
import BgGradient from "../../components/bgGradient/bgGradient";

const Home = () => {
  const [x, setX] = useState(20);
  const [y, setY] = useState(20);

  const onMouseMove = (e) => {
    const gradient = document.getElementById('mask')
    setX(e.clientX);
    setY(e.clientY);

    gradient.style.webkitMaskImage = `radial-gradient(${280 + (x / 5) + 'px'} ${310 + (y / 5) + 'px'} at ${x + 'px'} ${y + 'px'}, #000000 0%, rgba(0, 0, 0, 0) 100%)`
  }

  return (
    <>
      <Style.HomeWrap onMouseMove={onMouseMove}>
        <MainScreen/>
        <DescBlock/>
        <ThirdBlock/>
        <ProcessCreateBlock/>
        <NewProjects/>
        <MainForm/>
      </Style.HomeWrap>

      <BgGradient/>
      <Footer/>
    </>
  )
}

export default Home;

// const cursor = document.querySelector("#cursor"), cursorCircle = cursor.querySelector(".cursor"),
//   cursorPrev = document.querySelector("#cursorPrev"), cursorNext = document.querySelector("#cursorNext"),
//   cursorPhoto = document.querySelector("#cursorPhoto"), mouse = {x: -100, y: -100}, pos = {x: 0, y: 0}, speed = .1,
//   updateCoordinates = e => {
//     mouse.x = e.clientX, mouse.y = e.clientY
//   };
//
// function getAngle(e, o) {
//   return 180 * Math.atan2(o, e) / Math.PI
// }
//
// function getSqueeze(e, o) {
//   const r = Math.sqrt(Math.pow(e, 2) + Math.pow(o, 2));
//   return Math.min(r / 1500, .15)
// }
//
// window.addEventListener("mousemove", updateCoordinates);
// const updateCursor = () => {
//   const e = Math.round(mouse.x - pos.x), o = Math.round(mouse.y - pos.y);
//   pos.x += .1 * e, pos.y += .1 * o;
//   const r = getAngle(e, o), s = getSqueeze(e, o), t = "scale(" + (1 + s) + ", " + (1 - s) + ")",
//     n = "rotate(" + r + "deg)", u = "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";
//   cursor.style.transform = u, cursorCircle.style.transform = n + t, cursorPrev.style.transform = u, cursorNext.style.transform = u, cursorPhoto.style.transform = u
// };
//
// function loop() {
//   updateCursor(), requestAnimationFrame(loop)
// }
//
// requestAnimationFrame(loop), $(".btnOrange").on({
//   mouseenter: function () {
//     $(".cursor").addClass("active")
//   }, mouseleave: function () {
//     $(".cursor").removeClass("active")
//   }
// }), $(".btnNone").on({
//   mouseenter: function () {
//     $(".cursor").addClass("none")
//   }, mouseleave: function () {
//     $(".cursor").removeClass("none")
//   }
// }), $(".btnPrev").on({
//   mouseenter: function () {
//     $(".cursorPrev").addClass("active"), $(".cursor").addClass("none")
//   }, mouseleave: function () {
//     $(".cursorPrev").removeClass("active"), $(".cursor").removeClass("none")
//   }
// }), $(".btnPrev.white").on({
//   mouseenter: function () {
//     $(".cursorPrev").addClass("white")
//   }, mouseleave: function () {
//     $(".cursorPrev").removeClass("white")
//   }
// }), $(".btnNext").on({
//   mouseenter: function () {
//     $(".cursorNext").addClass("active"), $(".cursor").addClass("none")
//   }, mouseleave: function () {
//     $(".cursorNext").removeClass("active"), $(".cursor").removeClass("none")
//   }
// }), $(".btnNext.white").on({
//   mouseenter: function () {
//     $(".cursorNext").addClass("white")
//   }, mouseleave: function () {
//     $(".cursorNext").removeClass("white")
//   }
// }), $(".btnSkip").on({
//   mouseenter: function () {
//     $(".cursorNext").addClass("active"), $(".cursor").addClass("none")
//   }, mouseleave: function () {
//     $(".cursorNext").removeClass("active"), $(".cursor").removeClass("none")
//   }
// });
// var $NewsList = $("#infoPage .infoContents .list"), $CursorPhoto = $("#cursorContents #cursorPhoto");
// $NewsList.mouseenter(function () {
//   var e = $(this).attr("photoData");
//   $CursorPhoto.append("<img src=" + e + ">"), $(".cursor").addClass("none")
// }), $NewsList.mouseout(function () {
//   $CursorPhoto.empty(), $(".cursor").removeClass("none")
// });
