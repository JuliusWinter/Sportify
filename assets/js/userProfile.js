// Get users array from local Storage for authentification




// // Where does this event come from and what is it?
// document.getElementById("loginForm").addEventListener("submit", function(event){
//     // Prevent the page to automatically push the input into the URL and prevent the page to reload
//     event.preventDefault();
//     // loop over users array and check if credentials match a registered user
//     for(var i = 0; i < users.length; i++){
//         if(event.target.username.value == users[i].userName && event.target.password.value == users[i].password){
//             // if true change isLoggedIn attribute to true
//             users[i].isLoggedIn = true;
//             // push user to currentUser array
//             currentUser.push(users[i].push);
//             // Safe stringified currentUser array to local storage
//             localStorage.setItem("currentUser", JSON.stringify(currentUser));
//             // redirect to user profile
//             document.location.href = "userProfile.html";
//         }
//         else{
//             document.getElementById("loginResult").innerHTML = "Oops, username or password is wrong...try again!!!"
//         }
//     }
// })



//Search function applied to table in profile page, filtering all created events by current user
function searchCatalogueTable() {
    // Declare variables in table
    var input, filter, table, tr, td, i;
    input = document.getElementById("tableInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("userEventsTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }
  //import current user values
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
//set variables for button ID's
var btnUpcoming = document.getElementById("upcomingEventsBtn");
var btnPast = document.getElementById("pastEventsBtn");
var btnInterests = document.getElementById("interestsBtn");
//set variable for DIV ID's
var upcomingEventsDIV = document.getElementById("upcomingEvents");
var pastEventsDIV= document.getElementById("pastEvents");
var interestsDIV = document.getElementById("interests");  

var inActive = document.getElementById("inactive");
// var btnUpcoming, btnPast, btnInterests, upcomingEventsDIV, pastEventsDIV, interestsDIV;
// btnUpcoming = document.getElementById("upcomingEventsBtn");
// btnPast = document.getElementById("pastEventsBtn");
// btnInterests = document.getElementById("interestsBtn");
// upcomingEventsDIV = document.getElementById("upcomingEvents");
// pastEventsDIV = document.getElementById("pastEvents");
// interestsDIV = document.getElementById("interests");


//function for first button in upcoming events
btnUpcoming.addEventListener("click", function(){
//DIV is set to display 'none' in userProfileStyle.css
    if (upcomingEventsDIV.style.display === "block") {
      //if clicked display 'block'
      upcomingEventsDIV.style.display = "none";
      //otherwise, diplay 'none'
    } else {
      // else if upcoming events DIV is set to 'block', remaining DIV's are display 'none'
      upcomingEventsDIV.style.display = "block";
      pastEventsDIV.style.display = "none";
      interestsDIV.style.display = "none";
    }
});
//identical function runs for past events DIV
btnPast.addEventListener("click", function() {
    if (pastEventsDIV.style.display === "block") {
      pastEventsDIV.style.display = "none";
    } else {
      pastEventsDIV.style.display = "block";
      interestsDIV.style.display = "none";
        upcomingEventsDIV.style.display = "none";
    }
});
//identical function runs for interests
btnInterests.addEventListener("click", function(){
    if (interestsDIV.style.display === "block") {
      interestsDIV.style.display = "none";
    } else {
      interestsDIV.style.display = "block";
        upcomingEventsDIV.style.display = "none";
        pastEventsDIV.style.display = "none";
    }
});
//logout function
inActive.addEventListener("click", function(){
if (currentUser.isLoggedIn = true ) {
    currentUser.isLoggedIn = false ;
    document.location.href = "login.html";
} else {
  interestsDIV.style.display = "block";
    currentUser.isLoggedIn = false ;
    document.location.href = "login.html";
    alert("User has been logged out");
}
});

// Access first name of first User and last name of first User
document.getElementById("localUserName").innerHTML = "Hello " + currentUser[0].firstName + " " +currentUser[0].lastName;

// Access location from reg form, not implemented yet :::  currentUser[0].location;
document.getElementById("userLocation").innerHTML = "Sample Location, inserted once implemeneted";
// Access email of first User
document.getElementById("null").innerHTML = currentUser[0].email;
