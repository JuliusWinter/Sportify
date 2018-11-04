// jQuery Scroll Effect
$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $("nav").addClass("black");
    }
    else{
        $("nav").removeClass("black");
    }
})

$(function(){
    $("#navbar").load("navbar.html");
});