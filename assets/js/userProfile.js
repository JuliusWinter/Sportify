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
    // document.location.href = "login.html";
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