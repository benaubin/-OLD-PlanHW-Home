$(function() {
    $(".sign-up").addClass("sign");
    $(".sign-in").addClass("sign");
    disable();
    /*var hash = window.location.hash;
    if(hash === ("bensites")) {
        $(".nav-list").append($('<li><a href="http://bensites.com">BenSites</a></li>'));
    }*/
});




function disable(){
    var sign = $(".sign");

    sign.attr("href","");
    sign.click(function( event ) {
        alert( "Sorry, most functionality is not available yet. Please check back before next school year." );
        $(this).hide( "slow" );
        event.preventDefault();
    });
}
