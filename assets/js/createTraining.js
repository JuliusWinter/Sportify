// introduce events binding that carries event array that are saved in the local storage
// JSON.parse is the opposite operation of stringify and turns the string back into an array

var events = [];


// introduce our event object model
var event = {
    type:"training",
    privacy:"",
    pic: "",
    name: "",
    date:"",
    time:"",
    sportType:"",
    description:"",
    difficulty:"",
    maxPart:"",
    frequency:"",
    location:"",
    price:""
}
// select all input fileds of the create course html page
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
var eventSubmitButton = document.getElementById("submit");

// Create Tags functionality
// [].forEach.call(document.getElementsByClassName('tags-input'), function (el) {
//     let hiddenInput = document.createElement('input'),
//         mainInput = document.createElement('input'),
//         tags = [];
    
//     hiddenInput.setAttribute('type', 'hidden');
//     hiddenInput.setAttribute('name', el.getAttribute('data-name'));

//     mainInput.setAttribute('type', 'text');
//     mainInput.classList.add('main-input');
//     mainInput.addEventListener('input', function () {
//         let enteredTags = mainInput.value.split(',');
//         if (enteredTags.length > 1) {
//             enteredTags.forEach(function (t) {
//                 let filteredTag = filterTag(t);
//                 if (filteredTag.length > 0)
//                     addTag(filteredTag);
//             });
//             mainInput.value = '';
//         }
//     });

//     mainInput.addEventListener('keydown', function (e) {
//         let keyCode = e.which || e.keyCode;
//         if (keyCode === 8 && mainInput.value.length === 0 && tags.length > 0) {
//             removeTag(tags.length - 1);
//         }
//     });

//     el.appendChild(mainInput);
//     el.appendChild(hiddenInput);

//     addTag();

//     function addTag (text) {
//         let tag = {
//             text: text,
//             element: document.createElement('span'),
//         };

//         tag.element.classList.add('tag');
//         tag.element.textContent = tag.text;

//         let closeBtn = document.createElement('span');
//         closeBtn.classList.add('close');
//         closeBtn.addEventListener('click', function () {
//             removeTag(tags.indexOf(tag));
//         });
//         tag.element.appendChild(closeBtn);

//         tags.push(tag);

//         el.insertBefore(tag.element, mainInput);

//         refreshTags();
//     }

//     function removeTag (index) {
//         let tag = tags[index];
//         tags.splice(index, 1);
//         el.removeChild(tag.element);
//         refreshTags();
//     }

//     function refreshTags () {
//         let tagsList = [];
//         tags.forEach(function (t) {
//             tagsList.push(t.text);
//         });
//         hiddenInput.value = tagsList.join(',');
//     }

//     function filterTag (tag) {
//         return tag.replace(/[^\w -]/g, '').trim().replace(/\W+/g, '-');
//     }
// });

// add click event listener
// on click trigger function
eventSubmitButton.addEventListener("click", function(){
    // this function saves all input values to new variables
    var privacy = eventPrivacy.value;
    // var pic = eventPic.value;
    var name = eventName.value;
    var date = eventDate.value;
    var time = eventTime.value;
    var sportType = eventSportType.value;
    // var description = eventDescription.value;
    var difficulty = eventDifficulty.value;
    var maxPart = eventMaxPart.value;
    var frequency = eventFrequency.value;
    var location = eventLocation.value;
    var price = eventPrice.value;
    // then stores these values in the event object
    // check if all fields are filled out
    if(privacy && name && date && sportType){
    // if yes -> get all values of the fields and push them to the event object
        event.privacy = privacy;
        // event.pic = pic;
        event.name = name;
        event.date = date;
        event.time = time;
        event.sportType = sportType;
        // event.description = description;
        event.difficulty = difficulty;
        event.maxPart = maxPart;
        event.frequency = frequency;
        event.location = location;
        event.price = price;
        // push our new event to the events array
        events.push(event);
        // stringify events array to be able to save it in localStorage
        eventsString = JSON.stringify(events);
        // save strinified version of events array (eventsString) to the localStorage
        localStorage.setItem("events", eventsString);
        // redirect user to the events catalogue page
        document.location.href = "eventCatalogue.html"
    }
    // if not -> display error message an mark input field that is not filled out
    else{
        alert("You fool!");
    }
    events = JSON.parse(localStorage.getItem("events"));
})





