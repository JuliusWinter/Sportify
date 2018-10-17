//Introduce User with credentials
var users = {
    userId: 12873,
    userName: "Jesus",
    password: "helloworld",
};

//Select Button
var submit = document.getElementById('submit');

//On click run a function
submit.onclick = function(){
    //safe what ever is inside the input fields
    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    //check if the input equals the credentials and change 
    if(userName == user.userName && password == user.password){
        document.getElementById("loginResult").innerHTML = "Yeah, your credentials are right!!!";
        document.location.href = "register.html";
    }
    //If credentials not match show error message
    else{
        document.getElementById("loginResult").innerHTML = "Oops, username or password is wrong...try again!!!"
    }
};

//



