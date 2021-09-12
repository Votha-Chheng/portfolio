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
const menuItemsTitleThree = document.querySelector(".three .menu-item div")
const skillsFront = document.querySelector(".skills-front")
const skillsBackTools = document.querySelector(".skills-back-tools")

const CV = document.querySelector("#frame-a4")

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

let menuSeven = false
let menuThree= false
const h2SevenTitleMenu = document.querySelector(".seven h2.title-menu")
const h2ThreeTitleMenu = document.querySelector(".three h2.title-menu")


/**************************Sélection du menu technos ********************************/
squareSeven.addEventListener('click', ()=>{
  menuSeven = !menuSeven

  if(menuSeven){

    skillsFront.style.display = "block"
    skillsBackTools.style.display = "block"
    menuItems[3].classList.add("full-title")
    h2SevenTitleMenu.style.display="block"
    menuItemsTitleSeven.style.display = "none"
    squareSeven.classList.add("active-menu")
    folderSeven.classList.add("active-menu")


    setTimeout(()=>{
      skillsFront.classList.add("visible-slide")
      skillsBackTools.classList.add("visible-slide")
    }, 400)

    if(tabletSize.matches){
      gsap.to(squareSeven, {backgroundPosition:"0vh -40vw"}, '-=2')
    } else {
      gsap.to(squareSeven, {backgroundPosition:"0vh -40vh"}, '-=2')
    }
    
  } else {
    skillsFront.classList.remove("visible-slide")
    skillsBackTools.classList.remove("visible-slide")
    h2SevenTitleMenu.style.display="none"
    menuItemsTitleSeven.style.display = "block"
    squareSeven.classList.remove("active-menu")

    setTimeout(()=>{
      folderSeven.classList.remove("active-menu")
    }, 450)

    setTimeout(()=>{
      skillsFront.style.display = "none"
      skillsBackTools.style.display = "none"
    },1000)

    if(tabletSize.matches){
      gsap.to(squareSeven, {backgroundPosition:"-20vw -80vw"}, '-=3')
    } else {
      gsap.to(squareSeven, {backgroundPosition:"-20vh -80vh"}, '-=3')
    }   
  }
})

/************************** Sélection du menu CV ********************************/
squareThree.addEventListener('click', ()=>{
  menuThree = !menuThree

  if(menuThree){
    squareThree.style.zIndex = "50"
    menuItems[0].classList.add("full-title")
    h2ThreeTitleMenu.style.display="block"
    menuItemsTitleThree.style.display = "none"
    squareThree.classList.add("active-menu")
    folderThree.classList.add("active-menu")

    setTimeout(()=>{
      gridContainer.style.transform = " translate(-40vw, -20vh) scale(0.25)"
      
    }, 500)  
    setTimeout(()=>{
      CV.style.display = "flex"
    }, 1100)  

    setTimeout(()=>{
      
      CV.style.height = "29.7cm";
    }, 1200)    

  } else {
    menuItems[0].classList.remove("full-title")
    
    CV.style.height = "0";
    
    setTimeout(()=>{
      CV.style.display = "none"
      squareThree.style.zIndex = ""
    }, 750)

    setTimeout(()=>{
      gridContainer.style.transform = "translate(0,0) scale(1)"
    }, 1000)

    squareThree.classList.remove("active-menu")
    folderThree.classList.remove("active-menu")
    h2ThreeTitleMenu.style.display="none"
    menuItemsTitleThree.style.display = "block"
  }
  
})




