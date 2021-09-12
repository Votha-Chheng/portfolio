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
const menuItems = document.querySelectorAll(".menu-item")
const menuItemsTitleSeven = document.querySelector(".seven .menu-item div")
const skillsFront = document.querySelector(".skills-front")
const skillsBackTools = document.querySelector(".skills-back-tools")

console.log(menuItems)


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
    .to(".seven .folder", {backgroundColor : "#3772ff",  duration : 0.25, opacity:0.5})
    .to(".five .folder", {backgroundColor : "#dd1155",  duration : 0.25, opacity:0.5})
    .to(".three .folder", {backgroundColor : "#7765e3",  duration : 0.25, opacity:0.5})
    .to(".four .folder", {backgroundColor : "#b1740f",  duration : 0.25, opacity:0.5})
    .to (menuItems[0], {display : "block"}, "+=0.25")
    .to (menuItems[1], {display : "block"}, "-=0.25")
    .to (menuItems[3], {display : "block"}, "-=0.25")
    .to (menuItems[2], {display : "block"}, "-=0.25")
    .to(squareFour, {pointerEvents:"auto", cursor:"pointer"})
    .to(squareSeven, {pointerEvents:"auto", cursor:"pointer"})
    .to(squareFive, {pointerEvents:"auto", cursor:"pointer"})
    .to(squareThree, {pointerEvents:"auto", cursor:"pointer"}) 
}

window.addEventListener('load', ()=>{
  setTimeout(()=>{
    skillsFront.style.display = "block"
    skillsBackTools.style.display = "block"
  },5000)
  if(tabletSize.matches){
    animateStart('vw')
  } else {
    animateStart('vh')
  }
})
window.addEventListener('resize', ()=>{
  setTimeout(()=>{
    skillsFront.style.display = "block"
    skillsBackTools.style.display = "block"
  },5000)
  if(tabletSize.matches){
    animateStart('vw')
  } else {
    animateStart('vh')
  }
})

let menuSeven = false
const h2Seven = document.querySelector("h2.title-menu")

menuItems[3].appendChild(h2Seven)

squareSeven.addEventListener('click', ()=>{
  menuSeven = !menuSeven

  if(menuSeven){
    menuItems[3].classList.add("full-title")
    h2Seven.style.display="block"
    menuItemsTitleSeven.style.display = "none"
    squareSeven.classList.add("active-menu")
    folderSeven.classList.add("active-menu")
    setTimeout(()=>{
      skillsFront.classList.add("visible-slide")
      skillsBackTools.classList.add("visible-slide")
    }, 350)
  
    if(tabletSize.matches){
      gsap.to(squareSeven, {backgroundPosition:"0vh -40vw"}, '-=2')
    } else {
      gsap.to(squareSeven, {backgroundPosition:"0vh -40vh"}, '-=2')
    }
    
  } else {
    skillsFront.classList.remove("visible-slide")
    skillsBackTools.classList.remove("visible-slide")
    h2Seven.style.display="none"
    menuItemsTitleSeven.style.display = "block"
    squareSeven.classList.remove("active-menu")
    setTimeout(()=>{
      folderSeven.classList.remove("active-menu")
    }, 450)

    if(tabletSize.matches){
      gsap.to(squareSeven, {backgroundPosition:"-20vw -80vw"}, '-=3')
    } else {
      gsap.to(squareSeven, {backgroundPosition:"-20vh -80vh"}, '-=3')
    }   
  }
})




