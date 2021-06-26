import { predefinedData } from "../json/mockdata.js";
import {
  docGetId,
  getItemsFromLocalStorage,
  setItemsToLocalStorage,
} from "./commonfunction.js";
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

window.addEventListener(
  "load",
  function () {
    let formElement = {
      emailInput: docGetId("email"),
      passwordInput: docGetId("password"),
      loginBtn: docGetId("login-button"),
      messageBox: docGetId("login-error-msg-holder"),
    };

    let getUserData = getItemsFromLocalStorage("userData");
    
    formElement.emailInput.addEventListener("keyup", function () {
      setItemsToLocalStorage("userData", formElement.emailInput.value, "", "");
    });
    formElement.loginBtn.addEventListener(
      "click",
      function () {
        let emailInput = formElement.emailInput;
        let passwordInput = formElement.passwordInput;

        setItemsToLocalStorage("userData", emailInput.value, "", "");

        let messageBox = formElement.messageBox;
        let isemailInputEmpty = emailInput.value === "";
        let ispasswordInputEmpty = passwordInput.value === "";
        var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (isemailInputEmpty) {
          messageBox.style.opacity = 1;
          messageBox.classList.remove("d-none");
          messageBox.innerHTML = "Your Email is empty";

          emailInput.focus();
        } else if (ispasswordInputEmpty) {
          messageBox.style.opacity = 1;
          messageBox.classList.remove("d-none");
          messageBox.innerHTML = "Your Password Input Is Empty.";

          passwordInput.focus();
        } else if (!emailInput.value.match(mailformat)) {
          messageBox.style.opacity = 1;
          messageBox.classList.remove("d-none");
          messageBox.innerHTML = "Your Mail Format is not correct";

          emailInput.focus();
        } else {
          let isEmailNotExist = emailInput.value !== predefinedData.email;
          let isPasswordNotRight =
            passwordInput.value !== predefinedData.password;
          passwordInput.value !== predefinedData.password;
          if (isEmailNotExist) {
            messageBox.style.opacity = 1;
            messageBox.classList.remove("d-none");
            messageBox.innerHTML = "Email doesn't Exist.";
            emailInput.focus();
          }
          if (isPasswordNotRight) {
            messageBox.style.opacity = 1;
            messageBox.classList.remove("d-none");
            messageBox.innerHTML = "Wrong Password";
            passwordInput.focus();
          } else {
            messageBox.classList.add("d-none");
            setItemsToLocalStorage(
              "userData",
              emailInput.value,
              passwordInput.value,
              predefinedData.username
            );
            window.localtion.replace("../profile.html")
            // console.log(window.location.replace("../profile.html").URL)
            // console.log("hey");
          }
        }
      },
      false
    );
  },
  false
);

//query selector only work for one
//document.queryselector('ul li:last ofto')
//group selector
//document.querySelector('ul').getElementByClassName('collection-item')