// Navigation Section //
$(document).ready(function(){
$('.toggle').on('click', function() {
    $('.menu').toggleClass('active')
})


// Navigation Section //


$('a').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  },1000);
  return false;
});
 


$('.parallax').parallax();
  });