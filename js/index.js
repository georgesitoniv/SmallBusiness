$(document).ready(function(){
    //Slider
    var testimonialSlider = new Slider(
        "testimonial-slide", 
        "testimonial-slide-indicator",
        true
    );
});

$(window).scroll(function(){
    if($(this).scrollTop() > 50){
        $("nav").removeClass("hide-background");
    } else {
        $("nav").addClass("hide-background");
    }
});