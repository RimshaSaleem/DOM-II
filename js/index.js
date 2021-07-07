// Your code goes here
const firstheaders = document.querySelector(".content-section")
firstheaders.addEventListener('mouseover',(event)=>{
    event.target.style.color= 'blue'
})

const titleSlide = document.querySelector(".logo-heading")
titleSlide.addEventListener("click",(event)=>{
    event.target.classList.toggle("hey welcome")
})
const navbar = document.querySelector(".main-navigation")
navbar.addEventListener('mouseover',(event)=>{
    event.target.style.color= 'blue'
    event.target.style.size= '20px'
})