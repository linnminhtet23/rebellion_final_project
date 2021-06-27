let email, password;
let isEmailSuccessed, isPasswordSucceed =false;

let predefinedData ={
  email :"linn@gmail.com",
  password : "john123",
}
// console.log(predefinedData.email)
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
const errorElement = document.getElementById("error");

loginbtn.addEventListener('click',(e)=>{
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;
  let messages =[];
  if (email === '' || email == null) {
    messages.push('email is required');
    errorElement.innerText = messages.join(",");
  }

  else if (password.length <= 6) {
    messages.push('Password must be longer than 6 characters');
    errorElement.innerText = messages.join(",");
  }

  
  if(email == predefinedData.email){
    // console.log('email is correct');
    isEmailSuccessed =true;
  }
  if(password == predefinedData.password){
    // console.log('password is correct ');
    isPasswordSucceed =true;
  }
  if(isEmailSuccessed && isPasswordSucceed){
    // console.log('correct email and password');
    //document.getElementById('error').style.opacity=1;
    window.localStorage.setItem('email', JSON.stringify(email));
    window.localStorage.setItem('password', JSON.stringify(password));
    location.replace('admin_panel.html');
   
    
  }
  if(isEmailSuccessed !=true || isPasswordSucceed != true){
    console.log('Email or password is wrong');

    document.getElementById('error').style.opacity=1;
    messages.push('email or password is not correct');
    errorElement.innerText = messages.join(",");
    // document.getElementById('login-error-msg-holder').innerText='Email or password is wrong';
  }
})





