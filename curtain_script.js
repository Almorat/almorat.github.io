$(document).scroll(function(){
    var windowHeight = $(window).height();
    if (windowHeight > 480) {
        if ($(document).scrollTop() > 400 ) {
            $('.back_space').addClass('active');
            $('.reveal_back_space').addClass('activetwo');
        }
         
         else {
             $('.back_space').removeClass('active');
              $('.reveal_back_space').removeClass('activetwo');
         }
    } else {
            $('.back_space').addClass('active');
            $('.reveal_back_space').addClass('activetwo');
    }
 
 });