// Get current user data from local storage
if(!JSON.parse(localStorage.getItem("currentUser"))){
    var currentUser
}
else{
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
}

// select anchor tags that should be manipulated
var userProfile = document.querySelector("#userProfile");
var createEvent = document.querySelector("#createEvent");
var eventCatalogue = document.querySelector("#eventCatalogue");
var learnMore = document.querySelector("#learnMore");
var about = document.querySelector("#about");
var registerBtn = document.querySelector("#registerBtn");
var loginBtn = document.querySelector("#loginBtn");
var logoutBtn = document.querySelector("#logoutBtn");
// check if a user is logged in
if(currentUser){
    userProfile.style.display = "inline";
    createEvent.style.display = "inline";
    eventCatalogue.style.display = "inline";
    learnMore.style.display = "none";
    about.style.display = "none";
    registerBtn.style.display = "none";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline";
}
else{
    userProfile.style.display = "none";
    createEvent.style.display = "none";
    eventCatalogue.style.display = "none";
    learnMore.style.display = "inline";
    about.style.display = "inline";
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
