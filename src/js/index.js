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

addEvent(goLeft,"click",()=>{
  const front = frontImage.src
  const first = firstImage.src
  const second = secondImage.src
  const third = thirdImage.src
  const forth = forthImage.src
  const fifth = fifthImage.src
  const sixth = sixthImage.src
  frontImage.src = first
  firstImage.src = third
  secondImage.src = front
  thirdImage.src = fifth
  forthImage.src = second
  fifthImage.src = sixth
  sixthImage.src = forth
})
addEvent(goRight,"click",()=>{
  const front = frontImage.src
  const first = firstImage.src
  const second = secondImage.src
  const third = thirdImage.src
  const forth = forthImage.src
  const fifth = fifthImage.src
  const sixth = sixthImage.src
  frontImage.src = second
  firstImage.src = front
  secondImage.src = forth
  thirdImage.src = first
  forthImage.src = sixth
  fifthImage.src = third
  sixthImage.src = fifth
})

