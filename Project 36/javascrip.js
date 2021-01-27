//navigation bar animation ///
let hamburger = document.querySelector(".mobile-hamburger")
let close = document.querySelector(".close")
let navList = document.querySelector(".list-nav")

//animation//
hamburger.addEventListener('click' , navCall)
close.addEventListener('click' , navClose)

//Function navCall Open
function navCall() {
   hamburger.classList.toggle('toggleHamburger')
   navList.classList.toggle("toggleNav")
   close.classList.toggle('toggleNav')
   return ;
}

//function navClose
function navClose() {
 navList.classList.toggle("toggleNav")
close.classList.toggle('toggleNav')
 hamburger.classList.toggle('toggleHamburger')
 return
}