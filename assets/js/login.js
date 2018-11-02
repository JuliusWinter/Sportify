// Get users array from local Storage for authentification
var users = JSON.parse(localStorage.getItem("users"));
// introduct currentUser array
var currentUser = []; 

// Where does this event come from and what is it?
document.getElementById("loginForm").addEventListener("submit", function(event){
    // Prevent the page to automatically push the input into the URL and prevent the page to reload
    event.preventDefault();
    // loop over users array and check if credentials match a registered user
    for(var i = 0; i < users.length; i++){
        if(event.target.username.value == users[i].userName && event.target.password.value == users[i].password){
            // if true change isLoggedIn attribute to true
            users[i].isLoggedIn = true;
            // push user to currentUser array
            currentUser.push(users[i].push);
            // Safe stringified currentUser array to local storage
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            // redirect to user profile
            document.location.href = "userProfile.html";
        }
        else{
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



