const squareThree = document.querySelector(".three")
const squareFour = document.querySelector(".four")
const squareFive = document.querySelector(".five")
const squareSeven = document.querySelector(".seven")
const squares = document.querySelectorAll(".grid-square")

const TL = gsap.timeline()

TL
  .to(squareFour, {autoAlpha:1, delay : 0.25, duration:1})
  .to(squareSeven, {x:0, duration:1})
  .to(squareFive, {y:0, duration:0.5}, "-=0.3")
  .to(squareThree, {x:0, duration:0.5}, "-=0.15")
  .to(squareFour, {backgroundPosition : "-20vh -40vh", duration : 3.5, delay:0.5})
  .to(squareSeven, {backgroundPosition : "-20vh -80vh", duration : 3.5}, "-=3.5")
  .to(squareThree, {backgroundPosition : "0vh -40vh", duration : 3.5}, "-=3.5")
  .to(squareFive, {backgroundPosition : "0vh -60vh", duration : 3.5}, "-=3.5")