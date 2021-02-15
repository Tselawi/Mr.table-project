
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelector(".nav-link");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('open');
    
});
 hamburger.addEventListener('click', ()=>{
     navLink.classList.toggle('open1');
    
});