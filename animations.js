const squareThree = document.querySelector(".three")
const squareFour = document.querySelector(".four")
const squareFive = document.querySelector(".five")
const squareSeven = document.querySelector(".seven")
const squares = document.querySelectorAll(".grid-square")

const TL = gsap.timeline()

TL
  .to(squareFour, {autoAlpha:1, delay : 0.25, duration:0.5})
  .to(squareThree, {x:0, duration:0.25})
  .to(squareSeven, {x:0, duration:0.5})
  .to(squareFive, {y:0, duration:0.5})
