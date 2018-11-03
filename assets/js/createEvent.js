// Select the different course buttons
var courseButton = document.getElementById("course");
var trainingButton = document.getElementById("training");

// add event click event listener that redirects us to the respective create event form
courseButton.addEventListener("click", function(){
    document.location.href = "createCourse.html";
})

trainingButton.addEventListener("click", function(){
    document.location.href = "createTraining.html";
})