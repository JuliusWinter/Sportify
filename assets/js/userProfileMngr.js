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
var profileBtn = document.getElementById("profileInfoBtn");
var settingsBtn = document.getElementById("profileSettingBtn");
var accountBtn = document.getElementById("accountInfoBtn");
//set variable for DIV ID's
var profileInfoDIV = document.getElementById("profileInfo");
var profileSettingDIV= document.getElementById("profileSetting");
var accountInfoDIV = document.getElementById("accountInfo");  

// var btnUpcoming, btnPast, btnInterests, upcomingEventsDIV, pastEventsDIV, interestsDIV;
// btnUpcoming = document.getElementById("upcomingEventsBtn");
// btnPast = document.getElementById("pastEventsBtn");
// btnInterests = document.getElementById("interestsBtn");
// upcomingEventsDIV = document.getElementById("upcomingEvents");
// pastEventsDIV = document.getElementById("pastEvents");
// interestsDIV = document.getElementById("interests");

//function for first button in upcoming events
profileBtn.addEventListener("click", function(){
//DIV is set to display 'none' in userProfileStyle.css
    if (profileInfoDIV.style.display === "block") {
      //if clicked display 'block'
      profileInfoDIV.style.display = "none";
      //otherwise, diplay 'none'
    } else {
      // else if upcoming events DIV is set to 'block', remaining DIV's are display 'none'
      profileInfoDIV.style.display = "block";
      profileSettingDIV.style.display = "none";
      accountInfoDIV.style.display = "none";
    }
});
//identical function runs for past events DIV
settingsBtn.addEventListener("click", function() {
    if (profileSettingDIV.style.display === "block") {
      profileSettingDIV.style.display = "none";
    } else {
      profileSettingDIV.style.display = "block";
      accountInfoDIV.style.display = "none";
      profileInfoDIV.style.display = "none";
    }
});
//identical function runs for interests
accountBtn.addEventListener("click", function(){
    if (accountInfoDIV.style.display === "block") {
      accountInfoDIV.style.display = "none";
    } else {
      accountInfoDIV.style.display = "block";
      profileInfoDIV.style.display = "none";
      profileSettingDIV.style.display = "none";
    }
});



// Access first name of first User and last name of first User
document.getElementById("localUserName").innerHTML = "Hello " + currentUser[0].firstName + " " +currentUser[0].lastName;

// Access location from reg form, not implemented yet :::  currentUser[0].location;
document.getElementById("userLocation").innerHTML = "Sample Location, inserted once implemeneted";
// Access email of first User
//      document.getElementById("null").innerHTML = currentUser[0].email;
