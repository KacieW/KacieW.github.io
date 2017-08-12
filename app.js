$(document).ready(function() {
  $("a.logo").hover(function() {
    $(this).addClass('animated swing').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('animated swing');
    });
  });
  $(".nav-list-item").hover(function() {
    $(this).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('animated bounceIn');
    });
  });
});
