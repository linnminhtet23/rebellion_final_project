import {
  getItemsFromLocalStorage,
  docGetId,
} from "./commonfunction.js";



const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function show(){
    hover.classList.add('active');
    modal.classList.add('show');
}

function hide(){
    hover.classList.remove('active');
    modal.classList.remove('show');
}

image.addEventListener('click', show);



  window.addEventListener(
    "load",
    function () {
      let getUserData = getItemsFromLocalStorage("userData");
  
      let userNameElement = docGetId("user-name");
      let emailElement = docGetId("email");
      let logOutBtn = docGetId('logout');
      userNameElement.innerHTML = `${getUserData.userName} <br />`;
      emailElement.innerHTML = `${getUserData.email} <br />`;
      
  
    logOutBtn.addEventListener(
        "click",
        function () {
          localStorage.removeItem("userData");
        },
        false
      );
    },
    false
  );