// jQuery Scroll Effect
$(window).on("scroll", function(){
    // if the scroll down from the top, add the "black" class
    if($(window).scrollTop()){
        $("nav").addClass("black");
    }
    // otherwise remove the "black" class
    else{
        $("nav").removeClass("black");
    }
})
