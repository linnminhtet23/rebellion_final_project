const image = document.querySelector(".image");
const hover = document.querySelector(".hover");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

function show() {
  hover.classList.add("active");
  modal.classList.add("show");
}

function hide() {
  hover.classList.remove("active");
  modal.classList.remove("show");
}

image.addEventListener("click", show);


let email = document.getElementById("email");
let getUserData = window.localStorage.getItem("email");
// console.log(getUserData);
email.innerHTML = getUserData;
let logoutbtn = document.getElementById("logout");
logoutbtn.addEventListener("click",()=>{
  logOut();
});
function logOut() {
  window.localStorage.removeItem("email");
  window.localStorage.removeItem("password");
  window.location.replace("index.html");
}
//logOut()
