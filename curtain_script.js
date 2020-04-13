$(document).scroll(function(){
    if ($(document).scrollTop() > 400 ) {
        $('.back_curtain').addClass('active');
        $('.reveal_back_curtain').addClass('activetwo');
    }
     
     else {
         $('.back_curtain').removeClass('active');
          $('.reveal_back_curtain').removeClass('activetwo');
     }
 
 });