 //get the event array, that contains all event objects, from local storage and parse it
var events = JSON.parse(localStorage.getItem("events"));
// get current user from local storage
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
// get users from local storage
var users = JSON.parse(localStorage.getItem("users"));


if(!JSON.parse(localStorage.getItem("currentEvent"))){
  var currentEvent=[];
}
else{
  localStorage.removeItem("currentEvent");
  var currentEvent=[];
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
  document.location.href = "index.html";
}

//only create event catalogue if events.length > 0
if (events) {

//display events of certain condition that are stored in local storage in event catalogue
//loop over array that contains all events that are stored in local storage// 
for(var i = 0; i < events.length; i++) {
  //introduce variable an individual event //
  var catItem = events[i];
  //create the current date and set it in the format that matches the format of event dates (yyyy-mm-dd)// 
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
  
  //only display public events, do not display any private events
  //if the event date is in the past, do not create elements in the event catalogue; hence, do not display event in catalogue//
    if (catItem.date >= todayDate() && catItem.privacy == 'public') {
    //create a container (=div) for each event; purpose: store all relevant information (name, location, etc. ) in that container//
    var divContainer = document.createElement('DIV');
    divContainer.setAttribute('class', 'event');
    divContainer.setAttribute('id', catItem.eventID);

      //create a div for each property of the event object that is of relevance for the user (leave out event id, creator id, user id's in attendees array, privacy setting and other automatically generated properties of the event object) 
      
      var naming = document.createElement("a");
      // naming.setAttribute("href", 'eventProfile.html');
      naming.setAttribute('class', 'linkEventPage');
      naming.setAttribute('id', catItem.eventID);
      newText = document.createTextNode(catItem.name);
      naming.appendChild(newText);
      
      var loc = document.createElement('DIV');
      loc.setAttribute('class', 'loc');
      var locContent = document.createTextNode(catItem.location.formatted_address);
      loc.appendChild(locContent);

      var sportType = document.createElement('DIV');
      sportType.setAttribute('class', 'sportType');
      var sportTypeContent = document.createTextNode(catItem.sportType);
      sportType.appendChild(sportTypeContent);

      var type = document.createElement('DIV');
      type.setAttribute('class', 'left');
      var typeContent = document.createTextNode('Event Type: ' + catItem.type);
      type.appendChild(typeContent);

      var date = document.createElement('DIV');
      date.setAttribute('class', 'left');
      var dateContent = document.createTextNode('Date: ' + catItem.date);
      date.appendChild(dateContent);

      var time = document.createElement('DIV');
      time.setAttribute('class', 'left');
      var timeContent = document.createTextNode('Time: ' + catItem.time);
      time.appendChild(timeContent);

      var difficulty = document.createElement('DIV');
      difficulty.setAttribute('class', 'right');
      var difficultyContent = document.createTextNode('Difficulty Level: ' + catItem.difficulty);
      difficulty.appendChild(difficultyContent);

      var maxPart = document.createElement('DIV');
      maxPart.setAttribute('class', 'right');
      var maxPartContent = document.createTextNode('Max. participants: ' + catItem.maxPart);
      maxPart.appendChild(maxPartContent);

      var frequency = document.createElement('DIV');
      frequency.setAttribute('class', 'right');
      var frequencyContent = document.createTextNode('Frequency: ' + catItem.frequency);
      frequency.appendChild(frequencyContent);

      var price = document.createElement('DIV');
      price.setAttribute('class', 'right');
      var priceContent = document.createTextNode('Price: ' + catItem.price + ' kr.');
      price.appendChild(priceContent);

      var attButton = document.createElement('button');
      attButton.setAttribute('class', 'attButton');
      attButton.setAttribute('name', catItem.eventID);
      attButtonContent = document.createTextNode("Attend Event");
      attButton.appendChild(attButtonContent);

      //hide from default
      var unAttButton = document.createElement('button');
      unAttButton.setAttribute('class', 'unAttButton');
      unAttButton.setAttribute('name', catItem.eventID);
      unAttButtonContent = document.createTextNode("Unattend Event");
      unAttButton.appendChild(unAttButtonContent);
      unAttButton.style.display = 'none';

      var intButton = document.createElement('button');
      intButton.setAttribute('class', 'intButton');
      intButton.setAttribute('name', catItem.eventID);
      intButtonContent = document.createTextNode("Interested");
      intButton.appendChild(intButtonContent);

      //hide from default
      var unIntButton = document.createElement('button');
      unIntButton.setAttribute('class', 'unIntButton');
      unIntButton.setAttribute('name', catItem.eventID);
      unIntButtonContent = document.createTextNode("Uninterest");
      unIntButton.appendChild(unIntButtonContent);
      unIntButton.style.display = 'none';

      var capacity = document.createElement('div');
      capacity.setAttribute('class', 'capacity');
      capacityContent = document.createTextNode(events[i].maxPart - events[i].attendees.length);
      capacity.appendChild(capacityContent);

    //add all previously created divs, that contain the property values of each event, to the div container //
    divContainer.appendChild(naming);
    divContainer.appendChild(sportType);
    divContainer.appendChild(type);
    divContainer.appendChild(loc);
    divContainer.appendChild(difficulty);
    divContainer.appendChild(date);
    divContainer.appendChild(time);
    divContainer.appendChild(frequency);
    divContainer.appendChild(price);
    divContainer.appendChild(maxPart);
    divContainer.appendChild(capacity);
    divContainer.appendChild(attButton);
    divContainer.appendChild(unAttButton);
    divContainer.appendChild(intButton);
    divContainer.appendChild(unIntButton);

    //add all divContainers to the event catalogue (=div('catalogueItems') in HTML //
    var element = document.getElementById('catalogueItems');
    element.appendChild(divContainer);
  }
}

// get all type of buttons by ClassNames
  var att = document.getElementsByClassName('attButton');
  var unAtt = document. getElementsByClassName('unAttButton');
  var int = document.getElementsByClassName('intButton');
  var unInt = document.getElementsByClassName('unIntButton');

  //attend button: add functionality (push userID to attendees array of event and push eventID to attendedEvents array of user + change the visibility of the buttons)  
//Alternative: load data-set into button as an atrribute (hence, insert the event object which applies to specific button into button and access needed properties that way) - Problem: could not parse the data-set
for (i=0; i < att.length; i++) {
  att[i].addEventListener('click', function(e) {
    let event = e.target.name;
    for (i=0; i<events.length; i++) {
      if (event === events[i].eventID && events[i].attendees.length < events[i].maxPart) {
          for (i=0; i<users.length; i++) {
            if (currentUser[0] === users[i].ID) {
              users[i].attEvents.push(event);
              localStorage.setItem("users", JSON.stringify(users));
            }
          }
          for (i=0; i<events.length; i++) {
            if (event === events[i].eventID) {
              events[i].attendees.push(currentUser[0]);
              localStorage.setItem('events', JSON.stringify(events));
            }
          }
            att[event].style.display = 'none';
            unAtt[event].style.display = 'inline';
            int[event].style.display = 'none';
            unInt[event].style.display = 'none';
            var cap = document.getElementsByClassName('capacity')
            console.log(cap)
            for (i=0; i<events.length; i++) {
              if (event === events[i].eventID) {
                cap.nodeValue(events[i].maxPart - events[i].attendees.length)
          }
        } 
      } 
    else if (event === events[i].eventID && events[i].attendees.length >= events[i].maxPart) 
      {alert('Sorry, the event is booked out')}
  }
})
}

for (i=0; i < unAtt.length; i++) {
unAtt[i].addEventListener('click', function(e) {
  let event = e.target.name;
  for (i=0; i<users.length; i++) {
    if (currentUser[0] === users[i].id) {
      users[i].attEvents.pop(event);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
  for (i=0; i<events.length; i++) {
    if (event === events[i].eventID) {
      events[i].attendees.pop(currentUser[0]);
      localStorage.setItem('events', JSON.stringify(events));
    }
  }
    att[event].style.display = 'inline';
    unAtt[event].style.display = 'none';
    int[event].style.display = 'inline';
    unInt[event].style.display = 'none';
  
})
}

for (i=0; i < int.length; i++) {
int[i].addEventListener('click', function(e) {
  let event = e.target.name;
  for (i=0; i<users.length; i++) {
    if (currentUser[0] === users[i].id) {
      users[i].intEvents.push(event);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
  for (i=0; i<events.length; i++) {
    if (event === events[i].eventID) {
      events[i].interested.push(currentUser[0]);
      localStorage.setItem('events', JSON.stringify(events));
    }
  }
    att[event].style.display = 'none';
    unAtt[event].style.display = 'none';
    int[event].style.display = 'none';
    unInt[event].style.display = 'inline';
})
}

for (i=0; i < unInt.length; i++) {
unInt[i].addEventListener('click', function(e) {
  let event = e.target.name;
  for (i=0; i<users.length; i++) {
    if (currentUser[0] === users[i].id) {
      users[i].intEvents.pop(event);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
  for (i=0; i<events.length; i++) {
    if (event === events[i].eventID) {
      events[i].interested.pop(currentUser[0]);
      localStorage.setItem('events', JSON.stringify(events));
    }
  }
    att[event].style.display = 'inline';
    unAtt[event].style.display = 'none';
    int[event].style.display = 'inline';
    unInt[event].style.display = 'none';
  
})
}

// set visibility of attend buttons when entering page and user attends or is interested

for (var i=0; i< events.length; i++) {
    if (events[i].attendees.length) {
      for (var j=0; j<events[i].attendees.length; j++) {
        if (currentUser[0] === events[i].attendees[j]){
          att[i].style.display = 'none';
          unAtt[i].style.display = 'inline';
          int[i].style.display = 'none';
          unInt[i].style.display = 'none';
        }
      }
    }
  }
  for (var i=0; i<events.length; i++) {
    if (events[i].interested) {
      for (var j=0; j<events[i].interested.length; j++) {
        if (currentUser[0] === events[i].interested[j]){
          att[i].style.display = 'none';
          unAtt[i].style.display = 'none';
          int[i].style.display = 'none';
          unInt[i].style.display = 'inline';
        }
      }
    }
  }
  
  // when the link (=click on name of event) to an event is clicked, the event id is pushed to the array currentEvent, stored in the local Storage and the user is redirected to the event Profile -> on the event Profile the Data gets filled out automatically based on the entry of the id in the currentEvent array
  // Give the a tag a class
  // select that a with document.getElementByClassName
  // add an event listener to the a
  // on click push the id of the event to an array called currentEvent
  // upload that array to local storage
  // redirect to eventProfile.html
  
var redirectEventProfile = document.querySelectorAll(".linkEventPage");
 for (i = 0; i < redirectEventProfile.length; i++) {
    redirectEventProfile[i].addEventListener("click", function(e) {
        let eventID = e.target.id;
        currentEvent.push(eventID);
        localStorage.setItem("currentEvent", JSON.stringify(currentEvent));
        document.location.href = "eventProfile.html";
    });
  }
}
  
  // select the a with document.getElementByClassName
  // var redEP = document.getElementsByClassName("linkEventPage");
  // on click push the id of the event to an array called currentEvent
  // upload that array to local storage
  //neccessary to loop over redEP due to characteristic of class (=list)
  // for (i = 0; i < redEP.length; i++) {
  //     redEP[i].addEventListener("click", function() {
  //     currentEvent.push(naming.id);
  //     localStorage.setItem("currentEvent", JSON.stringify(currentEvent));
  //   })
  // }
  
//   var attend = document.getElementsByClassName('attButton')
//   for (i = 0; i < attend.length; i++) {
//     attend[i].addEventListener("click", function() {
//     if (attButtonContent = 'attend') {
//         for (i=0; i < users.length; i++) {
//           if (users[i].id = currentUser[0]) {
//               events[i].attendees.push(currentUser[0]);
//               users[i].attEvents.push(events[i].eventID);
//               localStorage.setItem("events", JSON.stringify(events));
//               localStorage.setItem("users", JSON.stringify(users));
//           }
//         }
//     }
//   else {
//     for (i=0; i < users.length; i++) {
//       if (users[i].id = currentUser[0]) {
//           events[i].attendees.pop(currentUser[0]);
//           users[i].attEvents.pop(events[i].eventID);
//           localStorage.setItem("events", JSON.stringify(events));
//           localStorage.setItem("users", JSON.stringify(users));
//       }
//      }
//    }
//  })
// }

// ALTERNATIVE APPROACH of creating events and displaying them in the event catalogue
// Decision for not pursuing this approach: 
// (i) unable to display the values of the properties (either only key name or undefined appears) 
// (ii) if statements were not effective; this means they did not filter out the properties that should not be displayed like eventID           or isTrusted; source of the error was being unable to compare the key names with 
// Advantage of alternative approach: less code

// for(var i = 0; i < events.length; i++) {
//   var catItem = events[i];
//   var divContainer = document.createElement('DIV');
//   divContainer.setAttribute('class', 'event');
//   divContainer.setAttribute('id', catItem.eventID);
//
//   Difference: instead of creating a div for each property of the event objects/class manually
//    (i) loop over the properties (ii) create a paragraph for each property (iii)
//   for(var prop in catItem) {
//     var x = document.createElement('p');
//     x.setAttribute('class', prop);
//     var xContent = document.createTextNode(catItem.prop.value);
//     // if (x.className !== catItem.eventID) {
//     x.appendChild(xContent);
//     divContainer.appendChild(x);
//     }
//   var ec = document.getElementById('catalogueItems');
//   ec.appendChild(divContainer);
// }
// }


// create a function that includes everything related to filtering
// function filtering(){
  var category = document.getElementsByClassName('sportType');

//define a function that searches for event categories and displays only applicable events//
function catSearch (){
  //declare variables - getting values from search box//
  var searchInputCat = document.getElementById('userCategoryInput').value.toUpperCase();
  //Declare variables - getting values from the div elements
  var category = document.getElementsByClassName('sportType').innerHTML;
  // console.log(category)
  // for (i=0; i < category.length; i++) {
  //   if(category[].includes(searchInputCat)){
  //     events[i].style.display ="";
  //   }else{
  //     events[i].style.display ="none";
  //   }
  // }
} 


// //define a function that searches for locations and displays only applicable events//
// function locSearch (){
//   //declare variables - getting values from search box//
//   var searchInputLoc = document.getElementById('userLocationInput').value.toUpperCase();
//   //Declare variables - getting values from the div elements
//   var locat = document.getElementsByClassName('loc');
//   console.log(locat)
//     if(locat[i].toUpperCase().includes(searchInputLoc)){
//       events[i].style.display ="";
//     }else{
//       events[i].style.display ="none";
//     }
//   }

//dropdown sport category selection 
var coll = document.getElementsByClassName("collapsible");
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//create a function that creates a div, including a checkbox and an individual label for each array value
var sports = ['American Football', 'Athletics','Badminton','Basketball','Boxing ','Canoeing','Cricket','Cross-Fit','Cycling ','Dancing','Darts','Disability Sports','Diving','Fitness-Training','Football','Golf','Handball','Hiking','Hockey','Ice Hockey','Longboarding','Mixed Martial Arts','Modern Pentathlon','Motor Sports','Netball','Parkour','Rowing','Rugby','Running','Sailing','Shooting','Skateboarding','Skiing','Snooker','Snowboarding','Squash','Surfing','Swimming','Table Tennis','Tai Chi','Tennis','Triathlon','Tricking','Ultimate Frisbee','Volleyball','Weightlifting','Winter Sports','Wrestling','Yoga'];

for(var i = 0; i < sports.length; i++) {
    var opt = sports[i];
    var div = document.createElement('DIV');
    div.setAttribute('class', 'checkboxCat');
    div.setAttribute('id', sports[i]);
    var para = document.createElement("INPUT");
    para.setAttribute("type", "checkbox",);
    para.setAttribute('id', sports[i]);
    para.setAttribute('value', sports[i]);
    var lab = document.createElement('LABEL'); 
    lab.setAttribute('for', sports[i]);
    lab.innerHTML = sports[i];
    var element = document.getElementById("content");
    element.appendChild(div);
    element.appendChild(para);
    element.appendChild(lab);
}

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//     output.innerHTML = this.value;
// }
// }
  
