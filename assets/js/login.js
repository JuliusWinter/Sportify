// Get users array from local Storage for authentification
if(!JSON.parse(localStorage.getItem("users"))){
    document.location.href = "register.html";
}else{
    var users = JSON.parse(localStorage.getItem("users"));
}

// introduct currentUser array
var currentUser = [];
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
userProfile.style.display = "none";
createEvent.style.display = "none";
eventCatalogue.style.display = "none";
learnMore.style.display = "inline";
about.style.display = "inline";
registerBtn.style.display = "inline";
loginBtn.style.display = "none";
logoutBtn.style.display = "none";

// Where does this event come from and what is it?
document.getElementById("loginForm").addEventListener("submit", function(event){
    // Prevent the page to automatically push the input into the URL and prevent the page to reload
    event.preventDefault();
    // loop over users array and check if credentials match a registered user
    for(var i = 0; i < users.length; i++){
        if(event.target.userName.value == users[i].userName && event.target.password.value == users[i].password){
            // safe current user to a var
            var current = users[i];
            // if true change isLoggedIn attribute to true
            users[i].isLoggedIn = true;
            // push user to currentUser array
            currentUser.push(current);
            // Safe stringified currentUser array to local storage
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            // redirect to user profile
            document.location.href = "userProfile.html";
        }
        else{
            // if the condition is not met, display an error message
            document.getElementById("loginResult").innerHTML = "Oops, username or password is wrong...try again!!!"
        }
    }
})





// //Select Button
// var submit = document.getElementById('submit');

// //On click run a function
// submit.onclick = function(){
//     //safe what ever is inside the input fields
//     var userName = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     //check if the input equals the credentials and change 
//     for(var i = 0; i < users.length; i++){
//         if(userName == users[i].userName && password == users[i].password){
//             // change isLoggedIn attribute to true
//             users[i].isLoggedIn = true;
//             // push user to currentUser array
//             currentUser.push(users[i].push);
//             // stringify currentUser array
//             var currentUserString = JSON.stringify(currentUser);
//             // Safe currentUser array to local storage
//             localStorage.setItem("currentUser", currentUserString);
//             // redirect to user profile
//             document.location.href = "userProfile.html";
//         }
//         //If credentials not match show error message
        
//     }
// };



