//************/
//button select 
let leftButton = document.querySelector(".left-item")
let rightButton = document.querySelector(".right-item")
//select image container
let imgChanger = document.querySelector(".container-img-item")
//select the Text Containers
let containerTitle = document.querySelector(".title")
let containerDescription = document.querySelector(".description")

//Array - images
let imageOne =  "url(\"./images/desktop-image-hero-1.jpg\")";
let imageTwo =  "url(\"./images/desktop-image-hero-2.jpg\")";
let imageThree = "url(\"./images/desktop-image-hero-3.jpg\")";
let ImageArray = [imageOne, imageTwo, imageThree];
let ImageReverse = [imageOne, imageTwo, imageThree].reverse();
let a = 0;
let index = 0;

//Array - text 
let titleOne = "Discover innovative ways to decorate"
let titleTwo = "We are available all across the globe"
let titleThree = "Manufactured with the best materials"
let titleArray = [titleOne, titleTwo , titleThree]
let titleReverse = [titleOne, titleTwo , titleThree].reverse();
let d = 0;
let i = 0;

//Array - paragraph
let DescriptionOne =" We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
let DescriptionTwo = " With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
let DescriptionThree =  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
let DescriptionArray = [DescriptionOne, DescriptionTwo, DescriptionThree]
let DescriptionReverse = [DescriptionOne, DescriptionTwo, DescriptionThree].reverse();
let k = 0;
let j = 0;

//event of a click 

rightButton.addEventListener('click' , rightLoop)
leftButton.addEventListener('click' , leftLoop)


//function for right button
function rightLoop() {
      imgChanger.style.backgroundImage = ImageArray[index];
      containerTitle.innerHTML = titleArray[i];
      containerDescription.innerHTML = DescriptionArray[j];
      index = (index === ImageArray.length - 1) ? 0 : index + 1;
      i = (i === titleArray.length - 1) ? 0 : i + 1;
      j = (j === DescriptionArray.length - 1) ? 0 : j + 1;
}


//function for left button
function leftLoop() {
   imgChanger.style.backgroundImage = ImageReverse[a];
   containerTitle.innerHTML = titleReverse[d];
   containerDescription.innerHTML = DescriptionReverse[k];
   a = (a === ImageReverse.length - 1) ? 0 : a + 1;
   d = (d === titleReverse.length - 1) ? 0 : d + 1;
   k = (k === DescriptionReverse.length - 1) ? 0 : k + 1;
  
}

//Navigation hamburger ....

//select the hamburger icon / close icon 
const OpenIcon = document.querySelector('.mobilenav');
const closeBar = document.querySelector("#mobile-close");
const menu = document.querySelector(".close")
console.log(OpenIcon)
console.log(closeBar)
console.log(menu)

//event listener for navigation bar 

OpenIcon.addEventListener('click' , navBar);
closeBar.addEventListener('click' , navBar)

//function that operate the nav bar 
function navBar() {
   console.log("it got clicked")
    if (menu.style.display === "none") {
       menu.classList.toggle("close")
    
       
      } else if (menu.style.display === "") {
         menu.classList.toggle("open")
  
    }

}