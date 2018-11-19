//User first and last name entered into header via userName
var users = JSON.parse(localStorage.getItem("users"));
// get current user from local storage
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
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
    document.location.href = "login.html";
}

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
//set variables for button ID's
var btnUpcoming = document.getElementById("upcomingEventsBtn");
var btnPast = document.getElementById("pastEventsBtn");
var btnInterests = document.getElementById("interestsBtn");
//set variable for DIV ID's
var upcomingEventsDIV = document.getElementById("upcomingEvents");
var pastEventsDIV= document.getElementById("pastEvents");
var interestsDIV = document.getElementById("interests");  

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


// CHANGE: FOR LOOP OVER USERS ARRAY --> MATCH WITH CURRENTUSER[0] === USERS[i].ID
// Access first name of first User and last name of first User
document.getElementById("localUserName").innerHTML = currentUser[0].userName + " is in the game";
// Access location from reg form, not implemented yet :::  currentUser[0].location;
document.getElementById("userLocation").innerHTML = currentUser[0].location;
// this element will come from user typing in slogon
document.getElementById("currentUserSlogan").innerHTML = currentUser[0].slogan;
// this element will come from the user's status after pariciptating in games and friending others
document.getElementById("currentUserStatus").innerHTML = "Status: " + "Baller";
// Access email of first User
//      document.getElementById("null").innerHTML = currentUser[0].email;


// var i = 0;
// var original = document.getElementById('event');

// function duplicate() {
//     var clone = original.cloneNode(true); // "deep" clone
//     clone.id = "event" + ++i;
//     // or clone.id = ""; if the divs don't need an ID
//     original.parentNode.appendChild(clone);
// }
/////////////////////////////// LIST SEARCH FUNCTION BELOW \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var searchEvents = document.getElementById("searchCreatedEvent");

searchEvents.addEventListener("keyup", function(){
  var input, filter, ul, li, a, i;
  input = document.getElementById("searchCreatedEvent");
  filter = input.value.toUpperCase();
  ul = document.getElementById("createdEventsList");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
});