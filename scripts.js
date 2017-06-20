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



