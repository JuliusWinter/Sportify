// var currentEvent = JSON.parse(localStorage.getItem("currentEvent"));
// console.log(currentEvent);
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
var eventEditButton = document.getElementById("saveChanges");

// set the value of each element to the respective value of our current event
for(var i = 0; i < events.length; i++){
    if(currentEvent[0] === events[i].eventID){
        eventType.value = events[i].type;
        eventPrivacy.value = events[i].privacy;
        eventName.value = events[i].name;
        eventDate.value = events[i].date;
        eventTime.value = events[i].time;
        eventSportType.value = events[i].sportType;
        eventDescription.value = events[i].description;
        eventDifficulty.value = events[i].difficulty;
        eventMaxPart.value = events[i].maxPart;
        eventFrequency.value = events[i].frequency;
        eventLocation.value = events[i].location.formatted_address;
        eventPrice.value = events[i].price;
    }
}

var placeSearch, autocomplete;
class Address {
    constructor (streetNr, route, locality, adminAreaLvl1, country, postalCode){
        this.ID;
        this.name;
        this.formatted_address;
        this.street_number = 'short_name',
        this.route = 'long_name',
        this.locality = 'long_name',
        this.sublocality_level_1 = 'long_name',
        this.administrative_area_level_1 = 'short_name',
        this.country = 'long_name',
        this.postal_code = 'short_name'
    }
};

function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
       (document.getElementById('eventLocation')))
      //   {types: ['geocode']};
  
    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
  }
  // create new address object to work with, when the google places api autocomplete function is triggerd
  var address = new Address;
  
  function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
    // Get each component of the address from the place details
    // and build up the address object
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (address[addressType]) {
        var val = place.address_components[i][address[addressType]];
        address[addressType] = val;
      }
    }
    address.ID = place.id;
    address.formatted_address = place.formatted_address;
    address.name = place.name;
  }


// // allow current user to change values
// // create a button "save" that on click, finds the events in the events array
// // that matches the current events event ID
document.getElementById("editEventForm").addEventListener("submit", function(e){
    // Prevent the page to automatically push the input into the URL and prevent the page to reload
    event.preventDefault();
    // loop over events array and check for the current event
    for(var i = 0; i < events.length; i++){
        if(currentEvent[0] === events[i].eventID){
            // update the event values
            events[i].type = e.target.eventType.value;
            events[i].privacy = e.target.privacyDropdown.value;
            events[i].name = e.target.eventName.value;
            events[i].date = e.target.eventDate.value;
            events[i].time = e.target.eventTime.value;
            events[i].sportType = e.target.eventSportType.value;
            events[i].description = e.target.eventDescription.value;
            events[i].difficulty = e.target.eventDifficulty.value;
            events[i].maxPart = e.target.eventMaxPart.value;
            events[i].frequency = e.target.eventFrequency.value;
            events[i].location = address;
            events[i].price = e.target.eventPrice.value;
            // save updated event in local storage
            localStorage.setItem("events", JSON.stringify(events));
        }
    }
    // redirect to event page 
    document.location.href = "eventProfile.html";
})
