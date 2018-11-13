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
var userEmailEdit = document.getElementById("userEmail");
var userSloganEdit = document.getElementById("userSlogan");
var eventLocation = document.getElementById("userLocation");
var userSaveButton1 = document.getElementById("userFormEdit1");// change to form name, will need a second button for password form
// var userSaveButton2 = document.getElementById("userFormEdit2");
// set the value of each element to the respective value of our current event

userNameEdit.value = currentUser[0].userName;
userFirstNameEdit.value = currentUser[0].firstName;
userLastNameEdit.value = currentUser[0].lastName;
userBirthdayEdit.value = currentUser[0].birthday;
userGenderEdit.value = currentUser[0].gender;
userEmailEdit.value = currentUser[0].email;
//Set up max character limit for slogan
userSloganEdit.value = currentUser[0].slogan;
//Set up password verification for, 1st input field enter old pasword, check match, allow for change in 2nd input field, 3rd input must match 2nd field
// userPasswordEdit.value = currentUser[0].password;
//userAwardsEdit.value = currentUser[0].awards;

// allow current user to change values
// create a button "save" that on click, finds the events in the events array
// that matches the current events event ID
//////oooooooooooooooooooooooooooooooooooooooooooooooo\\\\\\\
userSaveButton1.addEventListener("submit", function(){
  for(var i = 0; i < user.length; i++){
      if(currentUser[0].id === user[i].id){
        // event.target.userNameEdit.value = user[i].userName;
        // event.target.userFirstNameEdit.value = user[i].firstName;
        // event.target.userLastNameEdit.value = user[i].lastName;
        // event.target.userBirthdayEdit.value = user[i].birthday ;
        // event.target.userGenderEdit.value = user[i].gender;
        // event.target.userEmailEdit.value = user[i].email;
        // event.target.userSloganEdit.value = user[i].slogan;

        user[i].userName = event.target.userNameEdit.value;
        user[i].firstName = event.target.userFirstNameEdit.value;
        user[i].lastName = event.target.userLastNameEdit.value;
        user[i].birthday = event.target.userBirthdayEdit.value;
        user[i].gender = event.target.userGenderEdit.value;
        user[i].email = event.target.userEmailEdit.value;
        user[i].slogan = event.target.userSloganEdit.value;
     }
     
  }
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
     document.location.href = "userProfile.html";
});
// var persons = JSON.parse(localStorage.persons); //get user from local storage
// for (var i = 0; i < persons.length; i++) {
//    if(inputName === persons[i].name){  //look for match with name
//        persons[i].age += 2;  //add two
//        break;  //exit loop since you found the person
//    }
// }
// localStorage.setItem("persons", JSON.stringify(persons));


//////ooooooooooooooo LINK TEST FAIL oooooooooooooooooo\\\\\\\
// var linkTestBtn = document.getElementById("linkTest");

// linkTestBtn.addEventListener("click",function(){
//   document.location.href = "userProfile.html";
// });

//////oooooooooooooooooooooooooooooooooooooooooooooooo\\\\\\\
// document.getElementById("userFormEdit").addEventListener("submit", function(event){
//   for(var i = 0; i < users.length; i++){
//       if(currentUser[0].id === users[i].id){
//   // Prevent the page to automatically push the input into the URL and prevent the page to reload
//   event.preventDefault();
//   // push the same user to current User array
//   currentUser.push(new user ( event.target.userNameEdit.value, 
//                               event.target.userFirstNameEdit.value, 
//                               event.target.userLastNameEdit.value, 
//                               event.target.userBirthdayEdit.value, 
//                               event.target.userGenderEdit.value, 
//                               event.target.userEmailEdit.value, 
//                               event.target.userSloganEdit.value));
//   // safe stringified version of current user array to local storage
//   localStorage.setItem("currentUser", JSON.stringify(currentUser));
//   // redirect to loginSuccessful.html
//   document.location.href = "userProfile.html";
// });
/////////////oooooooooooooooooooooooooooooooooooooooooooooooo\\\\\\\
// userSaveButton.addEventListener("submit", function(event){
//   // Prevent the page to automatically push the input into the URL and prevent the page to reload
//   event.preventDefault();

//   // store stringified version of users array in localStorage
//   localStorage.setItem("users", JSON.stringify(users));
//   // push the same user to current User array
//   currentUser.push(new user ( event.target.userNameEdit.value, event.target.userFirstNameEdit.value, event.target.userLastNameEdit.value, event.target.userBirthdayEdit.value, event.target.userGenderEdit.value, event.target.userEmailEdit.value, event.target.userSloganEdit.value);
//   // safe stringified version of current user array to local storage
//   localStorage.setItem("currentUser", JSON.stringify(currentUser));
//   // redirect to loginSuccessful.html
//   document.location.href = "userProfile.html";
// });


// update both events
// save both events in their respective in local storage
// redirect to event page 
// document.getElementById("userFormEdit").addEventListener("submit", function(event){
//   for(var i = 0; i < user.length; i++){
//       if(currentUser[0].id === user[i].id){
//   // Prevent the page to automatically push the input into the URL and prevent the page to reload
//   event.preventDefault();

//   // check if all fields are filled out
//       // if yes -> get all values of the fields and push them to the event object
//       // push new event to events array
//       currentUser[0].push(new user( event.target.userNameEdit.value, event.target.userFirstNameEdit.value, event.target.userLastNameEdit.value, event.target.userBirthdayEdit.value, event.target.userGenderEdit.value, event.target.userEmailEdit.value, event.target.userSloganEdit.value));
//       // store stringified version of events array in localStorage
//       localStorage.setItem("users", JSON.stringify(users));
//       for(var i = 0; i < users.length; i++){
//           if(currentUser[0].ID === users[i].ID){
//               localStorage.setItem("currentUser", JSON.stringify(currentUser));
//               localStorage.setItem("users", JSON.stringify(users));
//           }
//       }
      
//       document.location.href = "userProfile.html";
//     });

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