//This function is the typer function which prints a character one by one by taking a string and delay as input
var type = function (component, message, index, interval) {

    if (index < message.length) {
        $(component).append(message[index++]);
        setTimeout(function () {
            type(component, message, index, interval)
        }, interval);
    }
}

//This function when called proceeds to load the actual webpage after the loading animation is finished!
var load_page = function () {

    //This function is executed after the loading is done. It hides the LOAD_SCREEN and shows the FULL_PAGE
    setTimeout(function () {

        $(".LOAD_SCREEN").animate({
            opacity: 0.0
        }, 1000).css('display', 'none');


        $(".ENTIRE_PAGE, .menu")
            .css('display', '')
            .animate({
                opacity: 1.0
            }, 1000);
    }, 1000);



    //This function registers a permanant Async task that constantly keeps performing the typing animation that was earlier defined
    //in loading screen. Its redundant, but I was unable to give a unique function without global variables
    var rep = 0;
    setInterval(function () {
        $("#my_subtitle").text("> ");
        var text = "";
        switch (rep) {
            case 1:
                rep = 1;
                text = "Designer.";
                break;
            case 2:
                rep = 2;
                text = "Enthusiast.";
                break;
            default:
                rep = 0;
                text = "Coder.";
        }

        type("#my_subtitle", text, -1, 40);
        rep = (rep + 1) % 3;
    }, 2000);


    //End of Page Load Function
}



//This anonymous function registers an onMouseScroll Event Listener and overrides the default scroll
$(function () {

    var $window = $(window); //Window object

    var scrollTime = 1; //Scroll time
    var scrollDistance = $(window).height(); //Distance. Use smaller value for shorter scroll and greater value for longer scroll

    $window.on("mousewheel DOMMouseScroll", function (event) {

        event.preventDefault();

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


});

//This is the first function that is ever called. It executes and animates the Load Screen, and implicitly calls load_page()
//So until the animation is complete the page isn't loaded
var loadscreen_animate = function () {
    var rep = 1;
    var exit = 0;
    $("#load_my_subtitle").text("> Coder.");
    var loadtyper = setInterval(function () {

        var text = "> ";
        $("#load_my_subtitle").text(text);

        if (rep == 1) {
            text = " Designer. ";
            type("#load_my_subtitle", text, -1, 40);
            rep++;

        } else if (rep == 2) {
            text = "Enthusiast.";
            type("#load_my_subtitle", text, -1, 40);
            rep++;
        } else {
            clearInterval(loadtyper);
            load_page();
            return;
        }

    }, 2000);

}

loadscreen_animate();
//This function is called when the page finishes loading
$(document).ready(function () {
    //1.Smooth scroll
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 1000);
        return false;
    });

});
