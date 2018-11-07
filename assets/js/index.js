// Get current user data from local storage
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
// select anchor tags that should be manipulated
var registerBtn = document.querySelector("#registerBtn");
var loginBtn = document.querySelector("#loginBtn");
var logoutBtn = document.querySelector("#logoutBtn");
// check if a user is logged in
if(currentUser){
    registerBtn.style.display = "none";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline";
}
else{
    registerBtn.style.display = "inline";
    loginBtn.style.display = "inline";
    logoutBtn.style.display = "none";
}
//when user clicks Sportify logo, jump to top of index page//
//when user clicks on Products, jump to second section//
//when user clicks on About us, jump to third section//
//when user clicks on Register (Navbar), jump to Registration page//
//when user clicks on Login (Navbar), jump to Login page//
//when user clicks on Login Button (Welcome Section), jump to Login Page//
//when user clicks on Registration Button (Welcome Section), jump to Registration Page//
