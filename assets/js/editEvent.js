if(!JSON.parse(localStorage.getItem("currentUser"))){
    document.location.href = "login.html";
}else{
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    var users = JSON.parse(localStorage.getItem("users"));
}
// get current event and events from local storage
if(!JSON.parse(localStorage.getItem("events"))){
    document.location.href = "createEvent.html";
}else{
    var events = JSON.parse(localStorage.getItem("events"));
    var currentEvent = JSON.parse(localStorage.getItem("currentEvent"));
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
var eventType = document.getElementById("eventType");
var eventPrivacy = document.getElementById("privacyDropdown");
// var eventPic = document.getElementById("eventPic");
var eventName = document.getElementById("eventName");
var eventDate = document.getElementById("eventDate");
var eventTime = document.getElementById("eventTime");
var eventSportType = document.getElementById("eventSportType");
var eventDescription = document.getElementById("eventDescription");
var eventDifficulty = document.getElementById("eventDifficulty");
var eventMaxPart = document.getElementById("eventMaxPart");
var eventFrequency = document.getElementById("eventFrequency");
var eventLocation = document.getElementById("eventLocation");
var eventPrice = document.getElementById("eventPrice");
var eventEditButton = document.getElementById("saveEventEdit");

// set the value of each element to the respective value of our current event
eventType.value = currentEvent[0].type;
eventPrivacy.value = currentEvent[0].privacy;
eventName.value = currentEvent[0].name;
eventDate.value = currentEvent[0].date;
eventTime.value = currentEvent[0].time;
eventSportType.value = currentEvent[0].sportType;
eventDescription.value = currentEvent[0].description;
eventDifficulty.value = currentEvent[0].difficulty;
eventMaxPart.value = currentEvent[0].maxPart;
eventFrequency.value = currentEvent[0].frequency;
eventLocation.value = currentEvent[0].location;
eventPrice.value = currentEvent[0].price;


// allow current user to change values
// create a button "save" that on click, finds the events in the events array
// that matches the current events event ID
eventEditButton.addEventListener("submit", function(){
    for(var i = 0; i < events.length; i++){
        if(currentEvent[0].id === events[i].id){
            // update the event values
            events[i].type = event.target.eventType.value;
            events[i].privacy = event.target.privacyDropdown.value;
            events[i].privacy = event.target.privacyDropdown.value;
            events[i].name = event.target.eventName.value;
            events[i].date = event.target.eventDate.value;
            events[i].time = event.target.eventTime.value;
            events[i].sportType = event.target.eventSportType.value;
            events[i].description = event.target.eventDescription.value;
            events[i].difficulty = event.target.eventDifficulty.value;
            events[i].maxPart = event.target.eventMaxPart.value;
            events[i].frequency = event.target.eventFrequency.value;
            events[i].location = event.target.eventLocation.value;
            events[i].price = event.target.eventPrice.value;
            events[i].price = event.target.eventPrice.value;
            console.log(events[i]);
            

        }
    }
})

// update both events
// save both events in their respective in local storage
// redirect to event page 