// Introduce Array of registered Users
var users = JSON.parse(localStorage.getItem("users"));

// Introduce User Object
var user = {
    userName:"",
    firstName:"",
    lastName: "",
    birthday:"",
    email:"",
    password:""
}

// Select all input fileds
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

// Sign up 
submit.addEventListener("click", function(){
    const userName = userNameReg.value;
    const firstName = firstNameReg.value;
    const lastName = lastNameReg.value;
    // console.log(birthdayReg.value)
    const email = emailReg.value;
    const conEmail = emailConReg.value;
    const password = passwordReg.value;
    const conPassword = passwordConReg.value;
    // const checkbox = checkboxReg.value;
    if(userName && firstName && lastName && email && password && email === conEmail && password === conPassword){
        // push input values to user object, if all fields are filled out, and email and password are matching their confirmation pairs
        user.userName = userName;
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = password;
        // push user to users array
        users.push(user);
        // stringify users array
        usersString = JSON.stringify(users);
        // save users array to local storage
        localStorage.setItem("users", usersString);
        document.location.href = "login.html";
    }
    else{
        alert("You Fool!");
    }
});