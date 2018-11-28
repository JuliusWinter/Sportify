// get current event from local storage
if(!JSON.parse(localStorage.getItem("currentUser"))){
    document.location.href = "login.html";
}else{
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    var users = JSON.parse(localStorage.getItem("users"));
    var events = JSON.parse(localStorage.getItem("events"));
    var currentEvent = JSON.parse(localStorage.getItem("currentEvent"))
}
// NAVBAR
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
    registerBtn.style.display = "none";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline";
}
else{
    userProfile.style.display = "none";
    createEvent.style.display = "none";
    eventCatalogue.style.display = "none";
    registerBtn.style.display = "inline";
    loginBtn.style.display = "inline";
    logoutBtn.style.display = "none";
}
// select all html elements to manipulate
var editBtn = document.getElementById("editEventBtn");
var eventName = document.getElementById("name");
var date = document.getElementById("date");
var time = document.getElementById("time");
var privacy = document.getElementById("privacy");
var sportType = document.getElementById("sportType");
var description = document.getElementById("description");
var difficulty = document.getElementById("difficulty");
var frequency = document.getElementById("frequency");
var maxPart = document.getElementById("maxPart");
var eventLocation = document.getElementById("location");
var price = document.getElementById("price");
// if current users own events is equal to event id
// show edit button
for(var i = 0; i < users.length; i++){
    if(users[i].ID === currentUser[0]){
        for(var j = 0; j < users[i].ownEvents.length; j++){
            if(users[i].ownEvents[j] === currentEvent[0]){  
                // when this statement matches display btn inline
                editBtn.style.display = "inline";
                // after that exit the loop with the break statement
                break;
            }
            else{
                editBtn.style.display = "none";
            }
        }
    }   
}
// get event id of the selected event and compare it to events array
// if match -> 
for(var i = 0; i < events.length; i++){
    if(currentEvent[0] === events[i].eventID){
        eventName.innerHTML = events[i].name;
        date.innerHTML = events[i].date.day.long + ", "+ events[i].date.month.long + " " + events[i].date.date + ", " + events[i].date.year ;
        time.innerHTML = events[i].time;
        privacy.innerHTML = events[i].privacy;
        sportType.innerHTML = events[i].sportType;
        description.innerHTML = events[i].description;
        difficulty.innerHTML = events[i].difficulty;
        frequency.innerHTML = events[i].frequency;
        maxPart.innerHTML = events[i].maxPart;
        eventLocation.innerHTML = events[i].location.formatted_address;
        price.innerHTML = events[i].price;
        // localStorage.setItem("events", JSON.stringify(events));
    }
}
//events exists, event date in future, event public
function createHTML () {
    return "<div class='attendBtnDiv'>"+
                        "<button class='box attend eventBtn' name='"+currentEvent[0]+"'>attend</button>"+
                "</div>"+
                "<div class='unAttendBtnDiv'>"+
                        "<button class='box unattend eventBtn hideElement' name='"+currentEvent[0]+"'>unattend</button>"+
                "</div>"+
                "<div class='interestedBtnDiv'>"+
                        "<button class='box interested eventBtn' name='"+currentEvent[0]+"'>interested</button>"+
                "</div>"+
                "<div class='unInterestedBtnDiv'>"+
                        "<button class='box notinterested eventBtn hideElement' name='"+currentEvent[0]+"'>no interest</button>"+
                "</div>"
    }

var content = "";
content += createHTML();
document.getElementById('buttonGroup').innerHTML = content;

// get all type of buttons by ClassNames
var att = document.getElementsByClassName('attend');
var unAtt = document. getElementsByClassName('unattend');
var int = document.getElementsByClassName('interested');
var notInt = document.getElementsByClassName('notinterested');
var cap = document.getElementsByClassName('capacity');

// set visibility of attend buttons when entering page and user attends or is interested
// loop over events array
for(var i = 0; i < events.length; i++){
    if(events[i].eventID === currentEvent[0] && events[i].userID === currentUser[0]){
        att[0].classList.add("hideElement");
        unAtt[0].classList.add("hideElement");
        int[0].classList.add("hideElement");
        notInt[0].classList.add("hideElement");
    }
    else{
        for(var j = 0; j < events[i].attendees.length; j++){
            for(var k = 0; k < events[i].interested.lenght; k++){
                if(currentUser[0] !== events[i].attendees[j] && currentUser[0] !== events[i].interested[k]){
                    att[0].classList.remove("hideElement");
                    unAtt[0].classList.add("hideElement");
                    int[0].classList.remove("hideElement");
                    notInt[0].classList.add("hideElement");
                }
            }
        }
    }
}

for (var i=0; i<events.length; i++) {
    // find events with attendees
    if (events[i].attendees.length) {
      // loop over attendees array
        for (var j=0; j<events[i].attendees.length; j++) {
            // check if currentUser is one of the attendees
            if (currentUser[0] === events[i].attendees[j]){
                att[0].classList.add("hideElement");
                unAtt[0].classList.remove("hideElement");
                int[0].classList.add("hideElement");
                notInt[0].classList.add("hideElement");
            }
        }
    }
}
// loop over the events array
for (var i=0; i<events.length; i++) {
    // check if there are interested people
    if (events[i].interested) {
      // if yes, loop over interested array
        for (var j=0; j<events[i].interested.length; j++) {
            // check if our current user is one of the interested people
            if (currentUser[0] === events[i].interested[j]){
                att[0].classList.remove("hideElement");
                unAtt[0].classList.add("hideElement");
                int[0].classList.add("hideElement");
                notInt[0].classList.remove("hideElement");
            }
        }
    }
}
  
//attend button: add event listener functionality (push userID to attendees array of event and push eventID to attendedEvents array of user + change the visibility of the buttons)  
//Alternative: load data-set into button as an atrribute (hence, insert the event object which applies to specific button into button and access needed properties that way) - Problem: could not parse the data-set
att[0].addEventListener('click', function(e) {
    let event = e.target.name;
    for (var i=0; i<events.length; i++) {
        // check if the button ID equals the event ID AND the event is not fully booked
        if (event === events[i].eventID && events[i].attendees.length >= events[i].maxPart) 
            {alert('Sorry, the event is booked out')}
            // check if the button ID equals the event ID AND if the event is not fully booked
        else if (event === events[i].eventID && events[i].attendees.length < events[i].maxPart) {
            for (var i=0; i<users.length; i++) {
                // loop over users array to find current user
                if (currentUser[0] === users[i].ID) {
                    // push the event ID in attEvents array of user
                    users[i].attEvents.push(event);
                    // upload users array to local storage
                    localStorage.setItem("users", JSON.stringify(users));
                }
            } 
            // loop over events array
            for (i=0; i<events.length; i++) {
                // find the respective event
                if (event === events[i].eventID) {
                    // push the user ID of currentUser in attendees array
                    events[i].attendees.push(currentUser[0]);
                    // upload to local storage
                    localStorage.setItem('events', JSON.stringify(events));
                }
            }
            // loop over users array
            for (var i=0; i<users.length; i++) {
                // find current user in users array
                if (currentUser[0] === users[i].ID) {
                    // remove the event ID from intEvents array of user object
                    var intEventsIndex = users[i].intEvents.indexOf(event);
                    if(intEventsIndex > -1){
                        users[i].intEvents.splice(intEventsIndex, 1);
                    }
                    // upload to local storage
                    localStorage.setItem("users", JSON.stringify(users));
                }
            }
            // loop over events array
            for (var i=0; i<events.length; i++) {
                // find our respective event
                if (event === events[i].eventID) {
                    // remove user ID from interested array of event object
                    var interestedIndex = events[i].interested.indexOf(currentUser[0]);
                    if(interestedIndex > -1){
                        events[i].interested.splice(interestedIndex, 1);
                    }
                    // upload to local storage
                    localStorage.setItem('events', JSON.stringify(events));
                }
            }
            // manipulate buttons accordingly
            att[0].classList.add("hideElement");
            unAtt[0].classList.remove("hideElement");
            int[0].classList.add("hideElement");
            notInt[0].classList.add("hideElement");
            //change places left
            var cap = document.getElementsByClassName('capacity')
            for (j=0; j<events.length; j++) {
                if (events[j].eventID == event) {
                    for (i=0; i<cap.length; i++) {
                        if (cap[i].id == events[j].eventID) {
                            cap[i].innerHTML = events[j].maxPart - events[j].attendees.length;
                        }
                    }
                }
            }
        } 
    }    
})
// add event listener that on click removes
// event id from atteEvents array in user object
// and removes user id from attendees array in event object
unAtt[0].addEventListener('click', function(e) {
    let event = e.target.name;
    // loop over users array
    for (var i=0; i<users.length; i++) {
        // find current user in users array
        if (currentUser[0] === users[i].ID) {
            // remove the event ID from attEvents array in users object
            var attEventsIndex = users[i].attEvents.indexOf(event);
        if(attEventsIndex > -1){
            users[i].attEvents.splice(attEventsIndex, 1);
        }
        // upload to local storage
        localStorage.setItem("users", JSON.stringify(users));
        }
    }
    // loop over events array
    for (var i=0; i<events.length; i++) {
        // find our event in events array
        if (event === events[i].eventID) {
            // delete the user ID from the attendees array in the event object
            var attendeesIndex = events[i].attendees.indexOf(currentUser[0]);
        if(attendeesIndex > -1){
            events[i].attendees.splice(attendeesIndex, 1);
        }
        // upload to local storage
        localStorage.setItem('events', JSON.stringify(events));
        }
    }
    // manipulate buttons to show only relevant buttons
    att[0].classList.remove("hideElement");
    unAtt[0].classList.add("hideElement");
    int[0].classList.remove("hideElement");
    notInt[0].classList.add("hideElement");

    //change places left
    var cap = document.getElementsByClassName('capacity');
    for (j=0; j<events.length; j++) {
        if (events[j].eventID == event) {
            for (i=0; i<cap.length; i++) {
                if (cap[i].id == events[j].eventID) {
                cap[i].innerHTML = events[j].maxPart - events[j].attendees.length
                }
            }
        }
    }
})

// add an event listener to all interested buttons that on click
// pushes the event ID to the intEvents array of our user object
// AND pushes our user ID to the interested array of the events object
// add an event listener to all of them
int[0].addEventListener('click', function(e) {
let event = e.target.name;
    // loop over the users array
    for (var i=0; i< users.length; i++) {
        // find our current user
        if (currentUser[0] === users[i].ID) {
            // push the event ID to intEvents array of user object
            users[i].intEvents.push(event);
            // upload to local storage
            localStorage.setItem("users", JSON.stringify(users));
        }
    }
    // loop over events array
    for (var i=0; i<events.length; i++) {
        // find our event
        if (event === events[i].eventID) {
            // push the user ID of current User to the interested array of the events object
            events[i].interested.push(currentUser[0]);
            // upload events array to local storage
            localStorage.setItem('events', JSON.stringify(events));
        }
    }
    // manipulate visability of respective buttons
    att[0].classList.remove("hideElement");
    unAtt[0].classList.add("hideElement");
    int[0].classList.add("hideElement");
    notInt[0].classList.remove("hideElement");
})

// add event listener that on click removes
// event id from intEvents array in user object
// and removes user id from interested array in event object
// loop over unInterested buttons
// add event click listener to each of them
notInt[0].addEventListener('click', function(e) {
    let event = e.target.name;
    // loop over users array
    for (var i=0; i<users.length; i++) {
        // find current user in users array
        if (currentUser[0] === users[i].ID) {
            // remove the event ID from intEvents array of user object
            var intEventsIndex = users[i].intEvents.indexOf(event);
            if(intEventsIndex > -1){
                users[i].intEvents.splice(intEventsIndex, 1);
            }
            // upload to local storage
            localStorage.setItem("users", JSON.stringify(users));
        }
    }
    // loop over events array
    for (var i=0; i<events.length; i++) {
        // find our respective event
        if (event === events[i].eventID) {
            // remove user ID from interested array of event object
            var interestedIndex = events[i].interested.indexOf(currentUser[0]);
            if(interestedIndex > -1){
                events[i].interested.splice(interestedIndex, 1);
            }
            // upload to local storage
            localStorage.setItem('events', JSON.stringify(events));
        }
    }
    // manipulate button visability accordingly
    att[0].classList.remove("hideElement");
    unAtt[0].classList.add("hideElement");
    int[0].classList.remove("hideElement");
    notInt[0].classList.add("hideElement");
})


