// CHAPTER 0: Get data from local storage

//check if current user is logged in and parse current user and users, 
//otheriwse redirect to login page
if(!JSON.parse(localStorage.getItem("currentUser"))){
  document.location.href = "login.html";
}else{
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));
  var users = JSON.parse(localStorage.getItem("users"));
}


// CHAPTER 1: Initialize navigation bar

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


// CHAPTER 2: Load old user input, extract and save new user input  

// select all the HTML input/form elements in the first form DIV userFormEdit1
var userNameEdit = document.getElementById("userName");
var userFirstNameEdit = document.getElementById("userFirstName");
var userLastNameEdit = document.getElementById("userLastName");
var userBirthdayEdit = document.getElementById("userBrithday");
var userGenderEdit = document.getElementById("userGender");
var userSloganEdit = document.getElementById("userSlogan");
var charCount = document.getElementById("charCounterPrfMng");
var userSave = document.getElementById("userFormEdit1");

// select all the HTML input/form elements in the first form DIV userFormEdit2: pertaining to password and email
var userOldPassword = document.getElementById("oldPassword");//check currentUser password match
var userNewPassword = document.getElementById("newPassword");//Entry must match with newConPassword
var userNewConPassword = document.getElementById("newConPassword");//newConPassword
var userNewEmail = document.getElementById("newEmail");//place old email
var userNewConEmail = document.getElementById("newConEmail");//match this email with email above
var userSave2 = document.getElementById("userFormEdit2");

//Loop through users and get currentUser
for(var i = 0; i < users.length; i++){
  if(currentUser[0] === users[i].ID){
    // set the value of each element to the respective value of our current user
    userNameEdit.value = users[i].userName;
    userFirstNameEdit.value = users[i].firstName;
    userLastNameEdit.value = users[i].lastName;
    userBirthdayEdit.value = users[i].birthday;
    userGenderEdit.value = users[i].gender;
    userSloganEdit.value = users[i].slogan;
  }
}
// applies function in user slogan input box, and character counter HTML elements
function countText(userSloganEdit, charCount, max) {
  //gets the full substring from start to end
  userSloganEdit.value = userSloganEdit.value.substring(0, max);
  // update counter value displayed in HTML element as difference between 70 and # of characters
  charCount.value = max - userSloganEdit.value.length;
}
//Function applies to first form; sets new inputs for current user upon submit
userSave.addEventListener("submit", function(event){
  // Prevent the page to automatically push the input into the URL and prevent the page to reload
  event.preventDefault();
  // loop over users array and check for the current user
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

// edit form function display 
var btnProfileEdit = document.getElementById("editProfileTabBtn");
var btnPasswordEdit = document.getElementById("editPasswordTabBtn");
//set variable for DIV ID's
var formElements1 = document.getElementById("userFormEdit1");
var formElements2= document.getElementById("userFormEdit2");

btnProfileEdit.addEventListener("click", function(){
  //form1 is set to display 'none' in userProfileStyle.css
  formElements1.style.display = "block";
  //if clicked display 'block'
  formElements2.style.display = "none";
  //otherwise, diplay 'none'
  document.getElementById("formTitle").innerHTML="Edit Your Profile";
});

//identical function runs for form 2
btnPasswordEdit.addEventListener("click", function() {
  formElements1.style.display = "none";
  formElements2.style.display = "block";
  document.getElementById("formTitle").innerHTML = "Change password & email";
});

//Function applies to second form; sets new inputs for current user upon submit
userSave2.addEventListener("submit", function(event){
  // Prevent the page to automatically push the input into the URL and prevent the page to reload
  event.preventDefault();
  // loop over users array and check if credentials match a registered user
  for(var i = 0; i < users.length; i++){
    var pass1 = userNewPassword.value;
    var pass2 = userNewConPassword.value;
    var eml1 = userNewEmail.value;
    var eml2 = userNewConEmail.value;
    //Hash password entered by user, and set variable
    var oldPassEntry = window.btoa(event.target.oldPassword.value);
    //if current user equals user ID
    if(currentUser[0] === users[i].ID){
        //set variable of user password
      var oldPass = users[i].password;
    };
    if(pass1 == pass2 && eml1 == eml2 && oldPass == oldPassEntry ){
      // new passwords are equal and users stored password equals hash password and emails are equal
      //new password is hashed and set
      users[i].password =  window.btoa(event.target.newPassword.value);
      //email in input field is set
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