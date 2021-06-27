let email, password;
let isEmailSuccessed, isPasswordSucceed =false;

let predefinedData ={
  email :"linn@gmail.com",
  password : "john123",
}
console.log(predefinedData.email)
/*===== FOCUS =====*/
const inputs = document.querySelectorAll(".form__input");
;
/*=== Add focus ===*/
function addfocus() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

/*=== Remove focus ===*/
function remfocus() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

/*=== To call function===*/
inputs.forEach((input) => {
  input.addEventListener("focus", addfocus);
  input.addEventListener("blur", remfocus);
});
/*===submit==*/
loginbtn = document.getElementById("login-button");
loginbtn.addEventListener('click',()=>{
  submitFunction();
})
function submitFunction(){
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;
  if(email == predefinedData.email){
    console.log('email is correct');
    isEmailSuccessed =true;
  }
  if(password == predefinedData.password){
    console.log('password is correct ');
    isPasswordSucceed =true;
  }
  if(isEmailSuccessed && isPasswordSucceed){
    console.log('correct email and password');
    window.localStorage.setItem('email', JSON.stringify(email));
    window.localStorage.setItem('password', JSON.stringify(password));
    location.replace('admin_panel.html');
   
    
  }
  if(isEmailSuccessed !=true || isPasswordSucceed != true){
    console.log('Email or password is wrong');
    // document.getElementById('login-error-msg-holder').innerText='Email or password is wrong';
  }
}



