//declare variables (variable = class in html) and select them

const backgroundEl = document.querySelector('#background');
const minusEl = document.querySelector('#minus');
const plusEl = document.querySelector('#plus');

  // declar a number variable .
   let totalNumber = 0;

   
   // background plus  and Minus background 
   let changebackground = function() {
      backgroundEl.style.width = totalNumber + "%" ;
   };

   let clickedButton = function(name){
      if(name =='plus') {
         if(totalNumber <= 85) {
            totalNumber += 5;
            changebackground();
         } 
       else {                  
         alert('++++++++++++++++++++++++++++++++')
         }
       }
     if(name =='minus') {
         if(totalNumber >= 10) {
            totalNumber -= 5;
            changebackground(); 
      } else {                  
         alert('-------------------------------------')
         } 
           }
    }  
        
   
//event listener for the minus and plus button cicked event
   plusEl.addEventListener('click',clickedButton.bind(null, "plus"));
   minusEl.addEventListener('click',clickedButton.bind(null, "minus"));

   //bind(null, x) stop trigger the function.

   