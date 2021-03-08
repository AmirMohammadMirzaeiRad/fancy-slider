const log = console.log;
const dir = console.dir;
const $ = (query) => {
  return document.querySelector(query)
}
const addEvent = (t,e,f) =>{
  return t.addEventListener(e,f)
}

const goLeft = $("#left-arrow")
const goRight = $("#right-arrow")
const frontImage = $("#front img")
const firstImage = $("#first img")
const secondImage = $("#second img")
const thirdImage = $("#third img")
const forthImage = $("#forth img")
const fifthImage = $("#fifth img")
const sixthImage = $("#sixth img")
const frontText = $("#front p")
const firstText = $("#first p")
const secondText = $("#second p")
const thirdText = $("#third p")
const forthText = $("#forth p")
const fifthText = $("#fifth p")
const sixthText = $("#sixth p")

let front;
let first;
let second;
let third;
let forth;
let fifth;
let sixth;
let frontTxt;
let firstTxt;
let secondTxt;
let thirdTxt;
let forthTxt;
let fifthTxt;
let sixthTxt;

const getValues = () =>{
  front = frontImage.src
  first = firstImage.src
  second = secondImage.src
  third = thirdImage.src
  forth = forthImage.src
  fifth = fifthImage.src
  sixth = sixthImage.src
  frontTxt = frontText.textContent
  firstTxt = firstText.textContent
  secondTxt = secondText.textContent
  thirdTxt = thirdText.textContent
  forthTxt = forthText.textContent
  fifthTxt = fifthText.textContent
  sixthTxt = sixthText.textContent
}
const moveLeft = () =>{
  getValues()
  frontImage.src = first
  firstImage.src = third
  secondImage.src = front
  thirdImage.src = fifth
  forthImage.src = second
  fifthImage.src = sixth
  sixthImage.src = forth
  frontText.textContent = firstTxt
  firstText.textContent = thirdTxt
  secondText.textContent = frontTxt
  thirdText.textContent = fifthTxt
  forthText.textContent = secondTxt
  fifthText.textContent = sixthTxt
  sixthText.textContent = forthTxt
}
const moveRight = () =>{
  getValues()
  frontImage.src = second
  firstImage.src = front
  secondImage.src = forth
  thirdImage.src = first
  forthImage.src = sixth
  fifthImage.src = third
  sixthImage.src = fifth
  frontText.textContent = secondTxt
  firstText.textContent = frontTxt
  secondText.textContent = forthTxt
  thirdText.textContent = firstTxt
  forthText.textContent = sixthTxt
  fifthText.textContent = thirdTxt
  sixthText.textContent = fifthTxt
}
addEvent(goLeft,"click",moveLeft)
addEvent(goRight,"click",moveRight)
addEvent(window,"keyup",(e)=>{
  if(e.key === 'ArrowRight'){
    moveRight()
  } else if (e.key === "ArrowLeft"){
    moveLeft()
  }
})