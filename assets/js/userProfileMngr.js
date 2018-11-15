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
var userSaveButton1 = document.getElementById("userFormEdit1");
var userSaveButton2 = document.getElementById("userFormEdit2");

var userOldPassword = document.getElementById("oldPassword");//check currentUser password match
var userNewPassword = document.getElementById("newPassword");//Entry must match with newConPassword
var userNewConPassword = document.getElementById("newConPassword");//newConPassword
var userNewEmail = document.getElementById("newEmail");//place old email
var userNewConEmail = document.getElementById("newConEmail");//match this email with email above


// change to form name, will need a second button for password form
// var userSaveButton2 = document.getElementById("userFormEdit2");
// set the value of each element to the respective value of our current event

userNameEdit.value = currentUser[0].userName;
userFirstNameEdit.value = currentUser[0].firstName;
userLastNameEdit.value = currentUser[0].lastName;
userBirthdayEdit.value = currentUser[0].birthday;
userGenderEdit.value = currentUser[0].gender;
//Set up max character limit for slogan in HTML
if(currentUser[0].slogan){
  userSloganEdit.value = currentUser[0].slogan;
}

userNewEmail.value = currentUser[0].email;

userSaveButton1.addEventListener("submit", function(event){  // Prevent the page to automatically push the input into the URL and prevent the page to reload
  event.preventDefault();
  // loop over users array and check for the current user
  for(var i = 0; i < users.length; i++){
      if(currentUser[0].ID === users[i].ID){
          // update the user values
        users[i].userName = event.target.userName.value;
        users[i].firstName = event.target.userFirstName.value;
        users[i].lastName = event.target.userLastName.value;
        users[i].birthday = event.target.userBrithday.value;
        users[i].gender = event.target.userGender.value;
        users[i].slogan = event.target.userSlogan.value;
          // save updated user in local storage
          localStorage.setItem("users", JSON.stringify(users));
      }
  }
  // redirect to user to their profile page 
  document.location.href = "userProfile.html";
})
// /////////////////////////////////login event function///////////////////////////

/////////////////////////////////login event function///////////////////////////


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

  // /////////////////////////////////login event function///////////////////////////

  userSaveButton2.addEventListener("submit", function(event){
  // Prevent the page to automatically push the input into the URL and prevent the page to reload
  event.preventDefault();
  // loop over users array and check if credentials match a registered user
  for(var i = 0; i < users.length; i++){
    var pass1 = userNewPassword.value;
    var pass2 = userNewConPassword.value;
    var eml1 = userNewEmail.value;
    var eml2 = userNewConEmail.value;
    var oPassEntry = userOldPassword.value;
    var oPass = currentUser[0].password;

      if(pass1 == pass2 && eml1 == eml2 && oPassEntry== oPass){
        document.getElementById("result").innerHTML = "Thank you "+ userFirstNameEdit.value;
        return false;
    }
    document.getElementById("result").innerHTML = "Please try again";
    return false;
}
});
/////////////////////////////////login event function///////////////////////////
//cGFzczEzNQ== , autogenerated password??? found in lcoal storage