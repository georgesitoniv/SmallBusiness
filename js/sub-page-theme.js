$(document).ready(function(){
    $("article").css("padding-top", $("nav").height());
    var tab = new Slider(
        "tab-slide", 
        "tab-slide-indicator"
    );
});