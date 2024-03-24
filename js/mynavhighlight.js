$(function() {
    console.log("In mynavhighlight.js");
    //highlight the current nav
    //$(".nav").find(".active").removeClass("active");
    $("#home a:contains('home')").parent().addClass('active');
    $("#areascovered a:contains('Areas Covered')").parent().addClass('active');
    $("#ontheroof a:contains('On The Roof')").parent().addClass('active');
    $("#whatweclean a:contains('What we clean')").parent().addClass('active');
    //$("#joomla a:contains('Joomla Training')").parent().addClass('active');
    //$("#contact a:contains('Contact')").parent().addClass('active');


}); //jQuery is loaded