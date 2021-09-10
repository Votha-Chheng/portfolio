const squareThree = document.querySelector(".three")
const squareFour = document.querySelector(".four")
const squareFive = document.querySelector(".five")
const squareSeven = document.querySelector(".seven")
const squares = document.querySelectorAll(".grid-square")
const tabletSize = window.matchMedia("(max-width:1024px)")

const TL = gsap.timeline()

window.addEventListener('load', ()=>{
  if(tabletSize){

  }else{
    TL 
    .to(squareFour, {backgroundPosition : "-20vh -40vh", duration : 4, delay:0.5})
    .to(squareSeven, {backgroundPosition : "-20vh -80vh", duration : 4}, "-=4")
    .to(squareThree, {backgroundPosition : "0vh -40vh", duration : 4}, "-=4")
    .to(squareFive, {backgroundPosition : "0vh -60vh", duration : 4}, "-=4")
    .to(squareFour, {autoAlpha:1, duration:1.25, ease:"easeIn"}, "-=3.75")
    .to(squareSeven, {x:0, duration:1}, "-=3")
    .to(squareFive, {y:0, duration:0.5}, "-=2")
    .to(squareThree, {rotationY:0, duration:0.2}, "-=1.25")  
    .to(".seven .folder", {backgroundColor : "#3772ff",  duration : 0.25, autoAlpha:0.35})
    .to(".five .folder", {backgroundColor : "#ea526f",  duration : 0.25, autoAlpha:0.35})
    .to(".three .folder", {backgroundColor : "#51cb20",  duration : 0.25, autoAlpha:0.35})
    .to(".four .folder", {backgroundColor : "#b1740f",  duration : 0.25, autoAlpha:0.35})
  }
})

