const casseTete = document.querySelector(".casse-tete")

//Correspond aux index des places
let pieceArray = []

//Correspond aux positions des pièces
let pieceImageArray = []
let leftPosition = 0
let topPosition = 0


for(let i = 0 ; i<16 ; i++){
    let div = document.createElement('div')
    let pieceImage = document.createElement('div')
    
    div.dataset.positionGrid = i
    pieceImage.dataset.positionImage = i
    
    if((i%4 === 0) && i!==0){
        topPosition +=100
        leftPosition = 0
    } else if(i==0){
        leftPosition = 0
        topPosition = 0
    } else{
        leftPosition +=100
    }
    
    pieceImage.style.top = topPosition + "px"
    div.style.top = topPosition + "px"
    pieceImage.style.left = leftPosition + "px"
    div.style.left = leftPosition + "px"
    div.classList.add("piece")
    pieceImage.classList.add("piece-image")
    if(i===3){
        pieceImage.classList.add("empty")
    }
    pieceArray.push(div)
    pieceImageArray.push(pieceImage)
}


casseTete.style.height = 400 + "px"
casseTete.style.width = 400 + "px"


pieceArray.forEach(element =>{
    casseTete.appendChild(element)
})

//Mélanger éléments du tableau
const shuffleArray = (tableau)=>{
    let currentIndex = tableau.length
    let randomIndex

    while(currentIndex !==0){
        randomIndex = Math.floor(Math.random()*currentIndex)
        currentIndex--

        [tableau[currentIndex], tableau[randomIndex]] = [tableau[randomIndex], tableau[currentIndex]]
    }
    return  tableau
}
let shuffledPieceImageArray = shuffleArray(pieceArray)

for(let i=0; i<pieceImageArray.length; i++){
    casseTete.appendChild(pieceImageArray[i])
    let imagePuzzle = document.createElement("img")
    imagePuzzle.src = "/images/portraitnb.jpg"
    
    if(i===3){
        imagePuzzle.src = ""
    }
    
    let imageTransformTop = 0
    let imageTransformLeft = 0
    imageTransformTop = (pieceImageArray[i].style.top)
    imageTransformLeft = (pieceImageArray[i].style.left)
    imagePuzzle.style.transform = `translate(-${imageTransformLeft}, -${imageTransformTop})`
    pieceImageArray[i].appendChild(imagePuzzle)
    pieceImageArray[i].style.top = shuffledPieceImageArray[i].style.top
    pieceImageArray[i].style.left = shuffledPieceImageArray[i].style.left
    pieceImageArray[i].dataset.positionTemporaire = pieceArray[i].dataset.positionGrid
}


//Tableau des places
let placeArray = []

//Switcher les position
const switchPosition = (objet1, objet2, conteneurObj1)=>{

     //Nouvelle position du carré vide
     objet1.style.top = objet2.style.top
     objet1.style.left = objet2.style.left
     objet1.dataset.positionTemporaire = objet2.dataset.positionTemporaire

     //Nouvelle position du carré déplacé
     objet2.style.top = conteneurObj1.top
     objet2.style.left = conteneurObj1.left
     objet2.dataset.positionTemporaire = conteneurObj1.positionTemporaire
}

casseTete.addEventListener("click", (event)=>{
    let win = false
    //Position du carre vide
    let carreVide = document.querySelector(".empty")
    let positionCarreVide = {top : carreVide.style.top, left:carreVide.style.left, positionTemporaire:carreVide.dataset.positionTemporaire}
    
    //Bloc qui va bouger
    let selectedBloc = event.target.parentNode

    //Limiter les bloc qui peuvent bouger 
    if(selectedBloc !== carreVide){
        if((+positionCarreVide.positionTemporaire % 4 !== 0)){
            if((Math.abs((+positionCarreVide.positionTemporaire)-(+selectedBloc.dataset.positionTemporaire))===1) || (Math.abs((+positionCarreVide.positionTemporaire)-(+selectedBloc.dataset.positionTemporaire))=== 4)){
                console.log("Clic")
                switchPosition(carreVide, selectedBloc, positionCarreVide)
            }
        } else if(+positionCarreVide.positionTemporaire % 4 === 0){
            if(((+positionCarreVide.positionTemporaire)-(+selectedBloc.dataset.positionTemporaire)!==1) && (((+positionCarreVide.positionTemporaire)-(+selectedBloc.dataset.positionTemporaire))===-1) || (Math.abs((+positionCarreVide.positionTemporaire)-(+selectedBloc.dataset.positionTemporaire))=== 4)){
                switchPosition(carreVide, selectedBloc, positionCarreVide) 
            }            
        } else if((+positionCarreVide.positionTemporaire % 4 === 3) && ((+positionCarreVide.positionTemporaire)-(+selectedBloc.dataset.positionTemporaire)!==-1)){
            switchPosition(carreVide, selectedBloc, positionCarreVide)          
        }

        
    }
    let solution = document.querySelectorAll(".piece-image")
    let solutionArray = []
    solution.forEach(element => {
        if(element.dataset.positionTemporaire === element.dataset.positionImage){
            solutionArray.push(true)
        } else {
            solutionArray.push(false)
        }
        
        
    }) 
    console.log(solutionArray)
    if(solutionArray.includes(false)){
        document.querySelector("#message").innerHTML = "C'est pas gagné !"
    } else {
        document.querySelector("#message").innerHTML = "Google captcha a détecté que vous étiez un robot."
        casseTete.style.zIndex = "0"
        casseTete.style.filter = "invert(100%)"
    }     
})    

console.log(document.querySelector("#message"))

    
    






