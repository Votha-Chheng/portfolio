const back = document.querySelector(".back")
const front = document.querySelector(".front")
console.log(front.getBoundingClientRect())
console.log(front.getBoundingClientRect().right - front.getBoundingClientRect().left)