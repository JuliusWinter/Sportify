// Introduce Array of registered Users
// Call Users array string from localStorage and parse it back into an array of objects
var users = [];
// get current user from local storage
var currentUser = [];
// Introduce User Object Model
class user {
    constructor(_userID, _userName, _firstName, _lastName, _birthday, _email, _password){
        this.userID = _userID;
        this.userName = _userName;
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.birthday = _birthday;
        this.email = _email;
        this.password = _password;
    }
}
// select anchor tags that should be manipulated
var registerBtn = document.querySelector("#registerBtn");
var loginBtn = document.querySelector("#loginBtn");
var logoutBtn = document.querySelector("#logoutBtn");
// Hide register and logout button
    registerBtn.style.display = "none";
    loginBtn.style.display = "inline";
    logoutBtn.style.display = "none";


// Unique User ID Generator Function
function guid() {
    function s4() {
        // Math.floor -> Round Number
        // Math.random -> generate random Number between 0 and 1
        // *0x1000 gives us a 4 digit number
      return Math.floor((1 + Math.random())* 0x10000)
        // toString(16)-> gives us a mix of numbers and char
        .toString(16)
        // tosubstring(1) shortens the random string to 3 char
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }


// Where does this event come from and what is it?
document.getElementById("registrationForm").addEventListener("submit", function(event){
    // Prevent the page to automatically push the input into the URL and prevent the page to reload
    event.preventDefault();
    // generate User ID
    var userID = guid();
    // push new user to users array
    users.push(new user (userID, event.target.regUserName.value, event.target.regFirstName.value, event.target.regLastName.value, event.target.regBirthday.value, event.target.regEmail.value, event.target.regPassword.value));
    // store stringified version of users array in localStorage
    localStorage.setItem("users", JSON.stringify(users));
    // push the same user to current User array
    currentUser.push(new user (userID, event.target.regUserName.value, event.target.regFirstName.value, event.target.regLastName.value, event.target.regBirthday.value, event.target.regEmail.value, event.target.regPassword.value));
    // safe stringified version of current user array to local storage
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    // redirect to loginSuccessful.html
    document.location.href = "loginSuccessful.html";
});


//     // check if they are all filled out and email = confirmed email + password = confirmed password
//         if(userName && firstName && lastName && birthday && email && password && email === conEmail && password === conPassword && checkbox){
//             // if true, push input values to user object model
//             let _user = new user (userName, firstName, lastName, birthday, email, password)
//             // ASSIGN individual ID to User



//             // push new user to users array
//             users.push (_user);
//             // stringify users array, because localStorage can only safe strings
//             var usersString = JSON.stringify(users);
//             // save users array to local storage
//             localStorage.setItem("users", usersString);

//         }
//         else{
//             // console.log(userName);
//             // console.log(firstName);
//             // console.log(lastName);
//             // console.log(birthday);
//             // console.log(email);
//             // console.log(conEmail);
//             // console.log(password);
//             // console.log(checkbox);

//             // Loop over form elements
//             // Check which are filled out
//             // for the ones who are not filled out -> toggle class to get red border
//             // Change placeholdertext 

//             // PROCEED FURTHER FROM HERE - DISPLAY ERROR MESSAGES IN REGISTER
//             for(var i = 0; i < elements.length; i++){
//                 if(elements[i].value == null || elements[i].value == "" || elements[i].value == false){
//                     console.log("hi");
//                 }
//             }
            
//         }
// })

