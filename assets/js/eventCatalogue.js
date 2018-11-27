// CHAPTER 0: Get data from local storage

//get the event array, that contains all event objects, from local storage and parse it
var events = JSON.parse(localStorage.getItem("events"));

//sort events from newest to oldest
if (events.length > 0) {
  events = events.sort(function(a, b) {
    var dateA = new Date(a.date.datePickerDate), dateB = new Date(b.date.datePickerDate);
    return dateB - dateA;
  });
}

//get current user from local storage
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
//get users from local storage
var users = JSON.parse(localStorage.getItem("users"));

//if currentEvent array is not existent in local storage, than create an empty array, else remove item from local storage and set array back
if(!JSON.parse(localStorage.getItem("currentEvent"))){
  var currentEvent=[];
}
else{
  localStorage.removeItem("currentEvent");
  var currentEvent=[];
}


// CHAPTER 1: Initialize navigation bar

//select anchor tags that should be manipulated
var userProfile = document.querySelector("#userProfile");
var createEvent = document.querySelector("#createEvent");
var eventCatalogue = document.querySelector("#eventCatalogue");
var learnMore = document.querySelector("#learnMore");
var about = document.querySelector("#about");
var registerBtn = document.querySelector("#registerBtn");
var loginBtn = document.querySelector("#loginBtn");
var logoutBtn = document.querySelector("#logoutBtn");
// check if a user is logged in, if not redirect to index page to register or login
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
  document.location.href = "index.html";
}


// CHAPTER 2: Create HTML elements for events

//function that creates the structure of the HTML for displaying events in the event catalogue; approach: create a list item for each event and attach it to an unordered list, that exists in the HTML
function createHTML (event) {
  return "<li class='eventItem "+event.sportType+"' id='"+event.eventID+"'name='"+event.location.formatted_address+"'>" +
          "<div class='eventContainer'>" +
                "<div class='upperInfo'>" +
                        "<div class='flexDate'>"+
                                "<div class='box date'>"+event.date.month.short + " " + event.date.date+"</div>"+
                                "<div class='box day'>"+event.date.day.short+"</div>"+
                        "</div>"+
                        "<div class='middleEventInfo'>"+
                                "<div class='box eventName'><a class='linkEventPage' name='"+event.eventID+"'>"+event.name+"</a></div>"+
                                "<div class='timeLocation'>"+
                                        "<div class='time box'>"+event.time+"</div>"+
                                        "<div class='dot box'>·</div>"+
                                        "<div class='location box loc'>"+event.location.formatted_address+"</div>"+
                                        "<div class='sportEventType'>"+
                                                "<div class='sportType box'>"+event.sportType+"</div>"+
                                                "<div class='dot box'>·</div>"+
                                                "<div class='eventType box'>"+event.type+"</div>"+
                                        "</div>"+
                                "</div>"+
                        "</div>"+
                "</div>"+
                "<div class='lowerInfo'>"+
                        "<div class='buttonGroup'>"+
                                "<div class='attendBtnDiv'>"+
                                        "<button class='box attend eventBtn' name='"+event.eventID+"'>attend</button>"+
                                "</div>"+
                                "<div class='unAttendBtnDiv'>"+
                                        "<button class='box unattend eventBtn hideElement' name='"+event.eventID+"'>unattend</button>"+
                                "</div>"+
                                "<div class='interestedBtnDiv'>"+
                                        "<button class='box interested eventBtn' name='"+event.eventID+"'>interested</button>"+
                                "</div>"+
                                "<div class='unInterestedBtnDiv'>"+
                                        "<button class='box notinterested eventBtn hideElement' name='"+event.eventID+"'>not interest</button>"+
                                "</div>"+
                        "</div>"+
                        "<div class='eventDetails'>"+
                                "<div class='maxAttendees'>"+
                                        "<div class='spotsLeft box'>Places left: <span class='capacity' id='"+event.eventID+"'> "+ (event.maxPart - event.attendees.length)+"</span></div>"+
                                "</div>"+
                                "<div class='dot box'>·</div>"+
                                "<div class='difficultyLvlDiv'>"+
                                        "<div class='box difficulty'>Difficulty: "+event.difficulty+"</div>"+
                                "</div>"+
                                "<div class='dot box'>·</div>"+
                                "<div class='price'>"+
                                        "<div class='box priceTag'><span class='priceSpan'>"+event.price+"</span> kr.</div>"+
                                "</div>"+
                        "</div>"+
                "</div>"+
        "</div>"+
      "</li>"
}

//create the current date and set it in the format that matches the format of event dates (yyyy-mm-dd) 
function todayDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  if(dd<10) {dd = '0'+dd} 
  if(mm<10) {mm = '0'+mm} 
  today = yyyy + '-' + mm + '-' + dd;
  return today
}

//only create event catalogue if events array length > 0
if (events) {
  //introduce a variable being an empty string
  var content = "";
  //loop over array that contains all events that are stored in local storage 
  for(var i=0; i<events.length; i++){
    //introduce variable for each individual event
    var catItem = events[i];
    //only display public events, do not display any private events
    //if the event date is in the past, do not create elements in the event catalogue; hence, do not display event in catalogue//
    //add the created HTML to the empty variable 
    if (catItem.date.datePickerDate >= todayDate() && catItem.privacy == 'public') {
    content += createHTML(events[i]);
    }
  }
  //attach the variable to the unordered list, which is existent in the HTML and contains all events meant to be displayed
  document.getElementById('catalogueItems').innerHTML = content;
}


// CHAPTER 3: Attend, unattend, interested, not interested button visbility and logic

// get all types of buttons and the capacity display div of each event by ClassNames
var att = document.getElementsByClassName('attend');
var unAtt = document. getElementsByClassName('unattend');
var int = document.getElementsByClassName('interested');
var notInt = document.getElementsByClassName('notinterested');
var cap = document.getElementsByClassName('capacity');

// set visibility of attend buttons when entering page and user attends or is interested
// loop over events array, events attendees and event interested array and only display attend button and interested button if current user not included in those arrays
for(var i=0; i < events.length; i++){
  for(var j=0; j < events[i].attendees.length; j++){
    for(var k=0; k < events[i].interested.lenght; k++){
      if(currentUser[0] !== events[i].attendees[j] && currentUser[0] !== events[i].interested[k]){
        att[i].classList.remove("hideElement");
        unAtt[i].classList.add("hideElement");
        int[i].classList.remove("hideElement");
        notInt[i].classList.add("hideElement");
      }
    }
  }
}

// loop over events array, events attendees array and only display unattend button if current user included in attendees array 
for (var i=0; i<events.length; i++) {
  // find events with attendees
  if (events[i].attendees.length) {
    // loop over attendees array
    for (var j=0; j<events[i].attendees.length; j++) {
      // check if currentUser is one of the attendees
      if (currentUser[0] === events[i].attendees[j]){
        att[i].classList.add("hideElement");
        unAtt[i].classList.remove("hideElement");
        int[i].classList.add("hideElement");
        notInt[i].classList.add("hideElement");
      }
    }
  }
}

// loop over events array, events interested array and only display unattend button if current user included in interested array 
for (var i=0; i<events.length; i++) {
  // check if there are interested people
  if (events[i].interested) {
    // if yes, loop over interested array
    for (var j=0; j<events[i].interested.length; j++) {
      // check if our current user is one of the interested user
      if (currentUser[0] === events[i].interested[j]){
        att[i].classList.remove("hideElement");
        unAtt[i].classList.add("hideElement");
        int[i].classList.add("hideElement");
        notInt[i].classList.remove("hideElement");
      }
    }
  }
}
  
//attend button: add event listener functionality (push userID to attendees array of event and push eventID to attendedEvents array of user + change the visibility of the buttons)  
for (var i=0; i < att.length; i++) {
  // console.log(att.length)
  att[i].addEventListener('click', function(e) {
    let event = e.target.name;
    for (var i=0; i<events.length; i++) {
      // check if the button ID equals the event ID AND if event is not fully booked
      if (event === events[i].eventID && events[i].attendees.length >= events[i].maxPart) {
        alert('Sorry, the event is booked out')
      }
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
        for (var i=0; i<events.length; i++) {
          // find the respective event
          if (event === events[i].eventID) {

            // push the user ID of currentUser in attendees array
            events[i].attendees.push(currentUser[0]);
            // upload to local storage
            localStorage.setItem('events', JSON.stringify(events));
          }
        }
        // loop over users array
        for (i=0; i<users.length; i++) {
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
          for (i=0; i<events.length; i++) {
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
        att[event].classList.add("hideElement");
        unAtt[event].classList.remove("hideElement");
        int[event].classList.add("hideElement");
        notInt[event].classList.add("hideElement");

        //change places left
        var cap = document.getElementsByClassName('capacity')
        for (j=0; j<events.length; j++) {
          if (events[j].eventID == event) {
            for (i=0; i<cap.length; i++) {
              if (cap[i].id == events[j].eventID) {
                cap[i].innerHTML = events[j].maxPart - events[j].attendees.length
              }
            }
          }
        }
      } 
    }    
  })
}

// loop over all unattend buttons and add event listener that on click removes event id from attendEvents array in user object and removes user id from attendees array in event object
for (var i=0; i < unAtt.length; i++) {
  unAtt[i].addEventListener('click', function(e) {
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
    att[event].classList.remove("hideElement");
    unAtt[event].classList.add("hideElement");
    int[event].classList.remove("hideElement");
    notInt[event].classList.add("hideElement");

    //change places left
    var cap = document.getElementsByClassName('capacity')
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
}

// add an event listener to all interested buttons that on click pushes the event ID to the intEvents array of our user object AND pushes our user ID to the interested array of the events object loop over all int buttons
for (var i=0; i < int.length; i++) {
  // add an event listener to all of them
  int[i].addEventListener('click', function(e) {
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
    att[event].classList.remove("hideElement");
    unAtt[event].classList.add("hideElement");
    int[event].classList.add("hideElement");
    notInt[event].classList.remove("hideElement");
  })
}

// loop over all notInterested buttons and add event listener that on click removes event id from intEvents array in user object and removes user id from interested array in event object loop over unInterested buttons
for (var i=0; i < notInt.length; i++) {
  // add event click listener to each of them
  notInt[i].addEventListener('click', function(e) {
    let event = e.target.name;
    // loop over users array
    for (i=0; i<users.length; i++) {
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
    for (i=0; i<events.length; i++) {
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
    att[event].classList.remove("hideElement");
    unAtt[event].classList.add("hideElement");
    int[event].classList.remove("hideElement");
    notInt[event].classList.add("hideElement");
  })
}


// CHAPTER 4: Redirect to individual event page

// when the link (=click on name of event) to an event is clicked, the event id is pushed to the array currentEvent, stored in the local storage and the user is redirected to the event Profile -> on the event Profile the Data gets filled out automatically based on the entry of the id in the currentEvent array
// Give the a tag a class
// select that a with document.getElementByClassName
// add an event listener to the a
// on click push the id of the event to an array called currentEvent
// upload that array to local storage
// redirect to eventProfile.html  
var redirectEventProfile = document.getElementsByClassName("linkEventPage");
for (i = 0; i < redirectEventProfile.length; i++) {
  redirectEventProfile[i].addEventListener("click", function(e) {
    let eventID = e.target.name;
    currentEvent.push(eventID);
    localStorage.setItem("currentEvent", JSON.stringify(currentEvent));
    document.location.href = "eventProfile.html";
  })
}


//CHAPTER 5: Setup filter in HTML

//create an array that contains all pre-defined sport types available on Sportify
var sports = ['American Football', 'Athletics','Badminton','Basketball','Boxing','Canoeing','Cricket','Cross-Fit','Cycling','Dancing','Darts','Disability Sports','Diving','Fitness-Training','Football','Golf','Handball','Hiking','Hockey','Ice Hockey','Longboarding','Mixed Martial Arts','Modern Pentathlon','Motor Sports','Netball','Parkour','Rowing','Rugby','Running','Sailing','Shooting','Skateboarding','Skiing','Snooker','Snowboarding','Squash','Surfing','Swimming','Table Tennis','Tai Chi','Tennis','Triathlon','Tricking','Ultimate Frisbee','Volleyball','Weightlifting','Winter Sports','Wrestling','Yoga'];

//create a function that creates a div, including a checkbox and an individual label for each array value
//set attributes for div, input and label
//attach created div to existing div (collContent) in HTML
for(var i=0; i < sports.length; i++) {
    var opt = sports[i];
    var div = document.createElement('DIV');
    div.setAttribute('class', 'checkboxDiv');
    div.setAttribute('id', sports[i]);
    var para = document.createElement("INPUT");
    para.setAttribute("type", "checkbox",);
    para.setAttribute('class', 'spTypeCheckbox')
    para.setAttribute('id', sports[i]);
    para.setAttribute('value', sports[i]);
    var lab = document.createElement('LABEL'); 
    lab.setAttribute('for', sports[i]);
    lab.innerHTML = sports[i];
    var element = document.getElementById("collContent");
    element.appendChild(div);
    element.appendChild(para);
    element.appendChild(lab);
}

//dropdown sport category selection
//hide or display div under button onclick 
function collapse() {
  var coll = document.getElementById("collapsible");
  var cont = document.getElementById('collContent')
  //toggle triggers adding or removing of class to HTML element
  coll.classList.toggle("active");
  cont.classList.toggle("hideElement");
}

//uncheck all checkbox in sport type selection div
function uncheckSpCat() {
  var sportCatCB = document.getElementsByClassName('spTypeCheckbox');
  for(var i=0;i<sportCatCB.length;i++){
    sportCatCB[i].checked = false;
  }
}


// CHAPTER 6: Filter functions

//display all events before applying filters to not exclude relevant events
function display () {
  var item = document.getElementsByClassName('eventItem');
  for (var i=0; i<item.length; i++) {
    item[i].style.display = '';
  }
}

//define a function that searches for locations and displays only applicable events
function locSearch (){
  //declare variables - getting values from input field
  var inputLoc = document.getElementById('searchbarEC').value.toUpperCase();
  //Declare variables - getting values from the div elements
  var item = document.getElementsByClassName('eventItem');
  //if input field empty, display all events
  if (inputLoc.length == 0) {
    for (var i=0; i<item.length; i++) {
      item[i].style.display ="";
    }
  }
  //if input field not empty, display all events whose location match text in input field, otherwise do not display event
  else if (inputLoc.length > 0) {
    for (var i=0; i<item.length; i++) {
      if(item[i].getAttribute('name').toUpperCase().includes(inputLoc)){
        item[i].style.display ="";
      }else{
        item[i].style.display ="none";
      } 
    }
  }
}

//define a function that only displays events matching selected event types
//select all relevant elements in HTML
function evTypeFilter () {
  var item = document.getElementsByClassName('eventItem');
  var type = document.getElementsByClassName('eventType');
  var evTypeCB = document.getElementsByClassName('eventTypeCB');
  var trainingCB = document.getElementById('trainingEvent');
  var courseCB = document.getElementById('courseEvent');
  //loop of items (=events[i])
  for (i=0; i<item.length; i++) {
    //select all events that are not displayed 
    if (item[i].style.display != 'none') {  
      //check which checkboxes are checked
      if (trainingCB.checked == true && courseCB.checked != true) {
        //loop over events again
        for (var i=0; i<item.length; i++) {
          //loop over event type element of each event
          for (var j=0; j<type.length; j++) {
            //if event type is unequal to training, do not display
            if (type[j].innerHTML != trainingCB.value) {
              item[j].style.display = 'none'
            }
          }
        }
      }
      //check which checkboxes are checked
      else if (trainingCB.checked != true && courseCB.checked == true) {
        //loop over events again
        for (var i=0; i<item.length; i++) {
          //loop over event type element of each event
          for (var j=0; j<type.length; j++) {
             //if event type is unequal to course, do not display
            if (type[j].innerHTML != courseCB.value) {
              item[j].style.display = 'none'
            }
          }
        } 
      }
      //check which checkboxes are checked
      else if (evTypeCB.checked == true || evTypeCB.checked != true) {
        //display all events if no checkbox checked
        for (var i=0; i<item.length; i++) {
          item[i].style.display = ''
        }
      } 
    }
  }
}

//define a function that only displays events matching selected sport types
//select all relevant elements in HTML and initialize variables
function spTypeFilter () {
  var sportCatCB = document.getElementsByClassName('spTypeCheckbox');
  var container = [];
  var contItemsID  = [];
  var item = document.getElementsByClassName('eventItem');
  var cont = document.getElementById('collContent');
  //loop over all sport type checkboxes
  for (var i=0; i<sportCatCB.length; i++) {
    //if checkbox is checked, push value to an empty array
    if (sportCatCB[i].checked == true) {
      container.push(sportCatCB[i].value)
    } 
  }
  
  //loop over all events that are displayed in HTML and check if class of event contains one of the sporttypes that is included in array
  //if sporttype matches, push event id into another empty array
  for (var i=0; i<item.length; i++) {
    if (container.length > 0 && item[i].style.display != 'none' && container.includes(item[i].classList[1])) {
      contItemsID.push(item[i].getAttribute('id'));
    }
  }
  //loop over all events in HTML
  //if event ID is not included in array with events that match checkbox value, than do not display those events
  for(var i=0; i<item.length; i++){
    if(container.length > 0 && contItemsID.includes(item[i].getAttribute('id')) == false){
      item[i].style.display = 'none';
    }
  }
  //if div with checkboxes is still visible when applying the filter, close the div
  if (cont.classList.contains('hideElement') == false) {
    cont.classList.add("hideElement");
  }
}

//define a function that only displays events matching a chosen price range
//select all relevant elements in HTML and initialize variables
function priceFilter () {
  var item = document.getElementsByClassName('eventItem');
  var evPrice = document.getElementsByClassName('priceSpan');
  var minPrice = document.getElementById('minPriceFilter');
  var maxPrice = document.getElementById('maxPriceFilter');
  var eventMaxPrice = []
  //loop over prices of events, push all values into an array and detect which is highest number (maximum price)
  for (var i=0; i<evPrice.length; i++) {
    eventMaxPrice.push(evPrice[i].innerHTML)
    var maxRange = Math.max(...eventMaxPrice)
  }  
  //if no max price is manually inserted into input field, automatically set the max price as the max price of all events
  if (maxPrice.value.length == 0) {
    maxPrice.value = maxRange
  }
  //loop over all events and event prices
  for (var i=0; i<item.length; i++) {
    for (var j=0; j<evPrice.length; j++) {
      //select only events that are displayed
      if (item[i].style.display != 'none') {
        //if event price is smaller than min price or higher than max price, do not display events
        if (evPrice[j].innerHTML < minPrice.value || evPrice[j].innerHTML > maxPrice.value) {
          item[j].style.display = 'none'
        }
      }
    }
  }
}

//apply all above described filters when clicking on button (function attached to button with id='filterButton' in HTML)
function filterFunction() {
  display();
  locSearch();
  evTypeFilter();
  spTypeFilter();
  priceFilter(); 
}