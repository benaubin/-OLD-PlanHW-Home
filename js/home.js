$(function() {
    $(".sign-up").addClass("sign");
    $(".sign-in").addClass("sign");

    addNavBack("BenSites", "bensites", "http://bensites.com");

    disable(".sign");
    mobileFooter()
});

function addNavBack(name,hash,link){
    if(containsHash(hash))
        $(".nav-list").append($('<li><a href=' + link + '>Back To ' + name + '</a></li>'));
}

function containsHash(urlHash){
    var hash = document.URL.substr(document.URL.indexOf('#')+1);
    console.log(hash);
    return(hash.toString() === urlHash.toString());
}

function mobileFooter(){
    $(".mobile-footer-phone").click(function(event){
        event.preventDefault();
        $(this).text("(512) 763-2360");
    });
    $(".mobile-footer-email").click(function(event){
        event.preventDefault()
        $(this).text("hello@planhw.com").attr("href","mailto:hello@planhw.com?subject=Hello")
    })
    $(".mobile-footer-twitter").click(function(event){
        event.preventDefault()
        $(this).text("@PlanHW").attr("href","https://twitter.com/planhw")
    })
}

function disable(Class){
    var disabled = $(Class);
    disabled.attr("href","#updates");
    disabled.click(function( event ) {
        alert( "Sorry, most functionality is not available yet. Please sign up for updates." );
        $(this).hide( "slow" );
        window.location.replace("#updates")
    });
}
