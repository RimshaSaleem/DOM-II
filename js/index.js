// Your code goes here
// content section text color change
const firstheaders = document.querySelector(".content-section")
firstheaders.addEventListener('mouseover',(event)=>{
    event.target.style.color= 'purple'
})
// logo on mouseover event
const logo = document.querySelector('.logo-heading');
logo.addEventListener("mouseover", function() {
    logo.style.border = '2px dashed black';
    logo.style.backgroundColor = 'pink';
    logo.style.padding = '10px';
});
// navbar mouseover and mouseout event
const navbarLinks = document.querySelectorAll(".nav a");
navbarLinks.forEach(function(element){
    element.addEventListener('mouseover', function(event){
        event.target.style.color = "pink";
        event.target.style.fontSize = "2.3rem";
    });
    element.addEventListener('mouseout', function(event){
        event.target.style.color = "";
        event.target.style.fontSize = "";
    })
});


const titleSlide = document.querySelector(".logo-heading")
titleSlide.addEventListener("click",(event)=>{
    event.target.classList.toggle("hey welcome")
})

// border over text onclick event
const div = document.querySelector(".text-content ")

div.addEventListener("click", (event)=>{
    event.target.style.border = "2px solid yellow"
})
// onclick picture drag
const dragpic = document.querySelector(".img-content img")
dragpic.addEventListener("drag", (event)=>{
    event.target.style.width = "50%"
})
// picture on window load
const largepic = document.querySelector(".img-content img")
largepic.addEventListener("load", (event)=>{
    event.target.style.width = "80%"
    
})
// window onload event
window.addEventListener("load", function(event) {
    alert('Your Window Is Loaded');
})
// window on resize
window.addEventListener('resize', function(e){
    alert('Your window is resized');
});


const fullweb = document.querySelector('body');

fullweb.addEventListener('keydown', 
(event) => {
  event.target.style.backgroundColor = "purple";
})


fullweb.addEventListener('keyup', 
(event) => {
  event.target.style.backgroundColor = "white";
});
