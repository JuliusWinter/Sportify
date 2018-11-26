if(!JSON.parse(localStorage.getItem("currentUser"))){
  document.location.href = "login.html";
}else{
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));
  var users = JSON.parse(localStorage.getItem("users"));
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


// select all the input and form elements in the html page
var userNameEdit = document.getElementById("userName");
var userFirstNameEdit = document.getElementById("userFirstName");
var userLastNameEdit = document.getElementById("userLastName");
var userBirthdayEdit = document.getElementById("userBrithday");
var userGenderEdit = document.getElementById("userGender");
var userSloganEdit = document.getElementById("userSlogan");
var userSave = document.getElementById("userFormEdit1");


var userOldPassword = document.getElementById("oldPassword");//check currentUser password match
var userNewPassword = document.getElementById("newPassword");//Entry must match with newConPassword
var userNewConPassword = document.getElementById("newConPassword");//newConPassword
var userNewEmail = document.getElementById("newEmail");//place old email
var userNewConEmail = document.getElementById("newConEmail");//match this email with email above
var userSave2 = document.getElementById("userFormEdit2");

// change to form name, will need a second button for password form
// var userSaveButton2 = document.getElementById("userFormEdit2");
// set the value of each element to the respective value of our current user

for(var i = 0; i < users.length; i++){
  if(currentUser[0] === users[i].ID){
    userNameEdit.value = users[i].userName;
    userFirstNameEdit.value = users[i].firstName;
    userLastNameEdit.value = users[i].lastName;
    userBirthdayEdit.value = users[i].birthday;
    userGenderEdit.value = users[i].gender;
    if(users[i].slogan){
    userSloganEdit.value = users[i].slogan;
    }
  }
}


function countText(userSlogan, charCounterPrfMng, max) {
  // if text too long, cut it to max length
  if (userSlogan.value.length > max)
    userSlogan.value = userSlogan.value.substring(0, max);
  // update counter
  else
    charCounterPrfMng.value = max - userSlogan.value.length;
}
//If blank display placeholder ///////////////////
// CHANGE FOR USERS[i].sloagan ///////////////////
        // if(users[i].slogan=""){
        //   userSloganEdit.value = users[i].slogan;
        // }

        // // CHANGE FOR USERS[i].email
        // userNewEmail.value = users[i].email;
        // }
        // }
// userSaveButton1.addEventListener("submit", function(event){  // Prevent the page to automatically push the input into the URL and prevent the page to reload
//   event.preventDefault();
userSave.addEventListener("submit", function(event){
  // Prevent the page to automatically push the input into the URL and prevent the page to reload
  event.preventDefault();
  // loop over events array and check for the current event
  for(var i = 0; i < users.length; i++){
      if(currentUser[0] === users[i].ID){
          // update the user values
          users[i].userName = event.target.userName.value;
          users[i].firstName = event.target.userFirstName.value;
          users[i].lastName = event.target.userLastName.value;
          users[i].birthday = event.target.userBrithday.value;
          users[i].gender = event.target.userGender.value;
          users[i].slogan = event.target.userSlogan.value;

          // save updated user info in local storage
          localStorage.setItem("users", JSON.stringify(users));
      }
  }
  // redirect to event page 
  document.location.href = "userProfile.html";
})
/////////////////////////////////login event function///////////////////////////

/////////////////////////////////login event function///////////////////////////

///////////////////////////////// EDIT FORM DISPLAY FUNCTION START //////////////////////////
var btnProfileEdit = document.getElementById("editProfileTabBtn");
var btnPasswordEdit = document.getElementById("editPasswordTabBtn");
//set variable for DIV ID's
var formElements1 = document.getElementById("userFormEdit1");
var formElements2= document.getElementById("userFormEdit2");

btnProfileEdit.addEventListener("click", function(){
  //DIV is set to display 'none' in userProfileStyle.css
        formElements1.style.display = "block";
        //if clicked display 'block'
        formElements2.style.display = "none";
        //otherwise, diplay 'none'
        document.getElementById("formTitle").innerHTML="Edit Your Profile";
  });
  //identical function runs for past events DIV
  btnPasswordEdit.addEventListener("click", function() {
        formElements1.style.display = "none";
        formElements2.style.display = "block";
        document.getElementById("formTitle").innerHTML = "Change password & email";
  });
///////////////////////////////// EDIT FORM DISPLAY FUNCTION END //////////////////////////


/////////////////////////////////// LOGIN EVENT FUNCTION //////////////////////////////////
userSave2.addEventListener("submit", function(event){
  // Prevent the page to automatically push the input into the URL and prevent the page to reload
  event.preventDefault();
  // loop over users array and check if credentials match a registered user
  // LOOP OVER USERS ARRAY AND COMPARE FOR USERS[i].ID === CURRENTUSER[0]
  for(var i = 0; i < users.length; i++){
    var pass1 = userNewPassword.value;
    var pass2 = userNewConPassword.value;
    var eml1 = userNewEmail.value;
    var eml2 = userNewConEmail.value;
    var oldPassEntry = window.btoa(event.target.oldPassword.value);
      if(currentUser[0] === users[i].ID){
        //to hash = window.btoa  to unhash = window.atob
      var oldPass = users[i].password;
        };
        if(pass1 == pass2 && eml1 == eml2 && oldPass == oldPassEntry ){
          //   && oldPassEntry == oldPass     window.atob(
        // users[i].password = window.btoa(event.target.userNewPassword.value);
        users[i].password =  window.btoa(event.target.newPassword.value);
        users[i].email = event.target.newEmail.value;
        document.getElementById("result").innerHTML = "Thank you "+ userFirstNameEdit.value +", your information has been changed!";

        // save updated user info in local storage
        localStorage.setItem("users", JSON.stringify(users));
        document.location.href = "userProfile.html";
        return false;        
      }
    document.getElementById("result").innerHTML = "Sorry "+userFirstNameEdit.value+", you have not entered the correct credentials"; 
    return false;           
  }
});
///////////////////////////////// LOGIN EVENT FUNCTION /////////////////////////////////////
//cGFzczEzNQ== , hashed password,-_-_-_-, found in lcoal storage
// function addToUserArray(username){
//   var loggedIn = localStorage.getItem("")
// }
/////////////////////////////////PLACE NEW VALUES INTO USER OBJECT FUNCTION /////////////////////////////////////

