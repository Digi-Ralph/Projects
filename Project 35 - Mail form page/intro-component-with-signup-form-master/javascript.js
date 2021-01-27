
let forms = document.forms["loginform"];
const mailvalidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 forms.addEventListener('submit', (e) => {
    e.preventDefault();} )

document.addEventListener('submit' , () => {


   //disbale error background and red border if there is value in in put
   //disbale error  meessage input if there's value 
   // else add both of them 
   
    
   if (document.querySelector("#inputfirst").value.length > 0 ) {
      document.querySelector("#inputfirst").classList.remove('error_validation')
      document.querySelector("#firstname_Error").innerHTML = ""
      
      
   } else {
       document.querySelector("#inputfirst").classList.add('error_validation')
       document.querySelector("#firstname_Error").innerHTML = "First Name Cannot be empty"
      
   }
   if (document.querySelector("#inputsecond").value.length > 0) {
      document.querySelector("#inputsecond").classList.remove('error_validation')
      document.querySelector("#lastname_Error").innerHTML = ""
      
   } else {
       document.querySelector("#inputsecond").classList.add('error_validation')
      document.querySelector("#lastname_Error").innerHTML = "Last Name Cannot be empty"
      
   }
    if (document.querySelector("#inputemail").value.length > 0) {
      document.querySelector("#inputemail").classList.remove('error_validation')
      document.querySelector("#email_Error").innerHTML = ""
      
   } else {
       document.querySelector("#inputemail").classList.add('error_validation')
      document.querySelector("#email_Error").innerHTML = "Email Cannot be empty" 
      
   }
     if ( document.querySelector("#inputpassword").value.length > 0) {
      document.querySelector("#inputpassword").classList.remove('error_validation')
      document.querySelector("#password_Error").innerHTML = ""
      
   } else {
       document.querySelector("#inputpassword").classList.add('error_validation')
      document.querySelector("#password_Error").innerHTML = "password Cannot be empty"

   }  
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.querySelector("#inputemail").value)) {
      document.querySelector("#inputemail").classList.remove('error_validation')
      document.querySelector("#email_Error").innerHTML = ""
     return false;
   }
   else {
      document.querySelector("#inputemail").classList.add('error_validation')
      document.querySelector("#email_Error").innerHTML = "Looks like this is not an email"
      document.querySelector("#inputemail").value = "Email@example/com"
      document.querySelector("#inputemail").style.color = 'red'
      
    }
   }
)


//prevent white space


let space = document.forms["loginform"]
console.log(space)
   space.addEventListener("keydown", 
   function keyPressed(event) {
      const keycode = event.keyCode || 
      event.charCode || 
      event.which ||
      event.key;
      if (keycode == 32){ 
      //   return false; 
        event.preventDefault();
       alert ("Don't do that , stap that !!!");
      }
    }) 



