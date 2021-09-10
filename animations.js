const gridContainer = document.querySelector(".grid-container")
const squareThree = document.querySelector(".three")
const squareFour = document.querySelector(".four")
const squareFive = document.querySelector(".five")
const squareSeven = document.querySelector(".seven")
const folderThree = document.querySelector(".three .folder")
const folderFour = document.querySelector(".four .folder")
const folderFive = document.querySelector(".five .folder")
const folderSeven = document.querySelector(".seven .folder")
const squares = document.querySelectorAll(".grid-square")

const tabletSize = window.matchMedia("(max-width:1024px)")

const TL = gsap.timeline()

const animateStart = (unit)=>{
  TL 
    .to(squareFour, {backgroundPosition : `-20${unit} -40${unit}`, duration : 4, delay:0.5})
    .to(squareSeven, {backgroundPosition : `-20${unit} -80${unit}`, duration : 4}, "-=4")
    .to(squareThree, {backgroundPosition : `0${unit} -40${unit}`, duration : 4}, "-=4")
    .to(squareFive, {backgroundPosition : `0${unit} -60${unit}`, duration : 4}, "-=4")
    .to(squareFour, {autoAlpha:1, duration:1.25, ease:"easeIn"}, "-=3.75")
    .to(squareSeven, {x:0, duration:1}, "-=3")
    .to(squareFive, {y:0, duration:0.5}, "-=2")
    .to(squareThree, {rotationY:0, duration:0.2}, "-=1.25")  
    .to(".seven .folder", {backgroundColor : "#3772ff",  duration : 0.25, autoAlpha:0.5})
    .to(".five .folder", {backgroundColor : "#ea526f",  duration : 0.25, autoAlpha:0.5})
    .to(".three .folder", {backgroundColor : "#51cb20",  duration : 0.25, autoAlpha:0.5})
    .to(".four .folder", {backgroundColor : "#b1740f",  duration : 0.25, autoAlpha:0.5})
    .to(squareFour, {pointerEvents:"auto", cursor:"pointer"})
    .to(squareSeven, {pointerEvents:"auto", cursor:"pointer"})
    .to(squareFive, {pointerEvents:"auto", cursor:"pointer"})
    .to(squareThree, {pointerEvents:"auto", cursor:"pointer"}) 
}

window.addEventListener('load', ()=>{
  if(tabletSize.matches){
    animateStart('vw')
  } else {
    animateStart('vh')
  }
})
window.addEventListener('resize', ()=>{
  if(tabletSize.matches){
    animateStart('vw')
  } else {
    animateStart('vh')
  }
})




