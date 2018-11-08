// Select all slides
var sliderImages = document.querySelectorAll(".slide");
let leftArrow = document.querySelector("#leftArrow");
let rightArrow = document.querySelector("#rightArrow");
var current = 0;

console.log(sliderImages);

// clear all images
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = "none";
    }
}

// initialize slider
function startSlide(){
    // reset everything so it starts with slide 1 (0)
    reset();
    // set first image to display block
    sliderImages[0].style.display = "block";
}

// show prev
function slideLeft(){
    reset();
    sliderImages[current -1].style.display = "block";
    current--;
}

// Show next slide
function slideRight(){
    reset();
    // move to the next image and display it as block
    sliderImages[current +1].style.display = "block";
    // increment current by 1
    current++;
}

leftArrow.addEventListener("click", function(){
    // check if the current slide is the first slide
    if(current === 0){
        // if so, set current slide to last slide
        current = sliderImages.length;
    }
    slideLeft();
})

rightArrow.addEventListener("click", function(){
    // check if current slide is the last slide
    if(current === sliderImages.length -1){
        
        // set the slide to the first image
        current = -1;
    }
    slideRight();
})

startSlide()