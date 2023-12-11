const button = document.querySelector(".input-field button");
const email = document.querySelector(".input-field #email")
const errorIcon = document.querySelector(".input-field .error-icon")

const errorMsg = document.querySelector(".error-message")

let validRex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener("click", () =>{
    if (email.value.match(validRex)) {
        errorMsg.style.display = "none";
        errorIcon.style.display = "none";
        return;
    }else{
        errorMsg.style.display = "block";
        errorIcon.style.display = "block";
        
    }
})