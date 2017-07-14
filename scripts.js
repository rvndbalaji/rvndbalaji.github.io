//This function is the typer function which prints a character one by one by taking a string and delay as input
var type = function (component, message, index, interval) {

    if (index < message.length) {
        $(component).append(message[index++]);
        setTimeout(function () {
            type(component, message, index, interval)
        }, interval);
    }
}



//This anonymous function registers an onMouseScroll Event Listener and overrides the default scroll
$(function () {

    var $window = $(window); //Window object

    var scrollTime = 0.8; //Scroll time

    var scrollDistance = $(window).height();
    //var scrollDistance = $(window).height() / 3;


    //Distance. Use smaller value for shorter scroll and greater value for longer scroll

    $window.on("mousewheel DOMMouseScroll", function (event) {

        event.preventDefault();

        setTimeout(function () {
            checkAnim();
        }, (scrollTime * 1000) / 2);
        var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta * scrollDistance);


        TweenMax.to($window, scrollTime, {
            scrollTo: {
                y: finalScroll,
                autoKill: true
            },
            ease: Power1.easeOut, //For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
            autoKill: true,
            overwrite: 5
        });



    });

    //642 1284
});



$(document).ready(function () {

    setTimeout(function () {

        $(".LOAD_SCREEN").animate({
            opacity: 0.0
        }, 1000).css('display', 'none');

        $(".ENTIRE_PAGE, .menu")
            .css('display', 'block')
            .animate({
                opacity: 1.0
            }, 1000);
    }, 1000);

    //1.Smooth scroll
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 1000);
        return false;
    });


    //This function registers a permanant Async task that constantly keeps performing the typing animation that was earlier defined
    var rep = 0;
    setInterval(function () {
        $("#my_subtitle").text("> ");
        var text = "";
        switch (rep) {
            case 1:
                rep = 1;
                text = "Designer";
                break;
            case 2:
                rep = 2;
                text = "Enthusiast";
                break;
            default:
                rep = 0;
                text = "Coder";
        }

        type("#my_subtitle", text, -1, 40);
        rep = (rep + 1) % 3;
    }, 2000);




    $("img#li").one('animationend', function () {
        $("img.social").css('animation', 'float 2s infinite');
        $("img#fb").css('animation-delay', '1s');
        $("img#gh").css('animation-delay', '1.5s');
        $("img#li").css('animation-delay', '2s');

    });


});
$("#clear_btn").click(function () {
    $('form').find("input[type=text], textarea").val("");
});

//This plugin allows the detection and listens to elements that are visible on the viewport
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offset().top);
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

function checkAnim() {
    var $elem = $("#dp");
    //If animation has already been started

    if (isElementInViewport($elem)) {
        $elem.addClass('fadeInUp');
    } else {

        $elem.removeClass('fadeInUp');
        $elem.css('opacity', '0.0');
    }

}
