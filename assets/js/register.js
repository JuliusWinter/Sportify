// Introduce Array of registered Users
// Call Users array string from localStorage and parse it back into an array of objects
var users = JSON.parse(localStorage.getItem("users"));

// Introduce User Object Model
var user = {
    isLoggedin: false,
    userName:"",
    firstName:"",
    lastName: "",
    birthday:"",
    email:"",
    password:""
}
// Select all input form fileds from register.html
var userNameReg = document.getElementById("regUserName");
var firstNameReg = document.getElementById("regFirstName");
var lastNameReg = document.getElementById("regLastName");
var birthdayReg = document.getElementById("regBirthday");
var emailReg = document.getElementById("regEmail");
var emailConReg = document.getElementById("regConEmail");
var passwordReg = document.getElementById("regPassword");
var passwordConReg = document.getElementById("regConPassword");
var checkboxReg = document.getElementById("checkbox");
var submit = document.getElementById("submit");

// Add click listener to the submit button
submit.addEventListener("click", function(){
    // safe content of input form fields to local bindings
    const userName = userNameReg.value;
    const firstName = firstNameReg.value;
    const lastName = lastNameReg.value;
    const birthday = birthdayReg.value;
    const email = emailReg.value;
    const conEmail = emailConReg.value;
    const password = passwordReg.value;
    const conPassword = passwordConReg.value;
    const checkbox = checkboxReg.checked;
    // check if they are all filled out and email = confirmed email + password = confirmed password
    if(userName && firstName && lastName && birthday && email && password && email === conEmail && password === conPassword && checkbox){
        // if true, push input values to user object model
        user.userName = userName;
        user.firstName = firstName;
        user.lastName = lastName;
        user.birthday = birthday;
        user.email = email;
        user.password = password;
        // push new user to users array
        users.push(user);
        // stringify users array, because localStorage can only safe strings
        usersString = JSON.stringify(users);
        // save users array to local storage
        localStorage.setItem("users", usersString);
        // redirect to login.html
        document.location.href = "login.html";
    }
    else{
        alert("You Fool!");
    }
});