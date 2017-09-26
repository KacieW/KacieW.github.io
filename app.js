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
  var $animation_elements = $('.animation-element');
  var $window = $(window);

  function checkInView() {
    var winHeight = $window.height();//static
    var winTopPosition = $window.scrollTop();//changing
    var winBottomPosition = (winTopPosition+winHeight);
    $.each($animation_elements, function(){
      var $element = $(this);
      var eleHeight = $element.outerHeight();
      var eleTopPosition = $element.offset().top;
      var eleBottomPosition = (eleHeight+eleTopPosition);
      if((eleBottomPosition>=winTopPosition)&&(eleTopPosition<=winBottomPosition)){
        $element.addClass('in-view');
      }else{
        $element.removeClass('in-view');
      }
    });
  }

  $window.on('scroll resize', checkInView);
  $window.trigger('scroll');
});
