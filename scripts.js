    var text = "Coder. Designer. Enthusiast";

    var type = function(component,message,index,interval)
    {

        if(index < message.length)
            {
                $(component).append(message[index++]);
                setTimeout(function()
                {
                   type(component,message,index,interval)
                },interval);
            }
    }

$(document).ready(function()
{

  //1. Animate typing effect
      type("#my_subtitle",text,-1,50);
     setInterval(function()
                {
                    $("#my_subtitle").text("> ");
                    type("#my_subtitle",text,-1,50);
                },5000);


  //2.Smooth scroll
      $('a').click(function()
                   {
                        $('html, body').animate(
                            {
                                scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
                            }, 1000);
                    return false;
                  });

});

$(function(){

	var $window = $(window);		//Window object

	var scrollTime = 1;			//Scroll time
	var scrollDistance = $(window).height();		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

	$window.on("mousewheel DOMMouseScroll", function(event){

		event.preventDefault();

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5
			});

	});

});

