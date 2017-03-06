$(document).ready(function(){
    $("article").css("padding-top", $("nav").height());
    var servicesTab = new Slider(
        "services-slide", 
        "services-slide-indicator"
    );
});