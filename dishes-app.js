angular.module("myApp", ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider.
    when('/:id', {
      templateUrl: 'dishes-detail.html',
      controller: 'DishDetailController'
    });
  }).config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);
$(document).ready(function() {

  $(":file").change(function() {
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = imageIsLoaded;
      reader.readAsDataURL(this.files[0]);
    }
  });

  function imageIsLoaded(e) {
    $('#myImg').attr('src', e.target.result);
  };

  $("#recipesubmit").click(function() {
    console.log($('#myImg').attr('src'));
    if ($('#input-name').val().length == 0) {
      alert('Please input your name');
    } else if ($('#yourDescription').val().length == 0) {
      alert('Please input description');
    } else if ($('#myImg').attr('src') == '#') {
      alert('Please upload img');
    } else {
      $('#myModalsubmit').css('display', 'block');
      $('#myImg').attr('src', '#');
      $('#uploadfile').val("");
      $('#recipe-form')[0].reset();
    }
  });
  $('#recipeclear').click(function() {
    $('#recipe-form')[0].reset();
  });
  $('#close').click(function() {
    $("#myModalsubmit").css('display', 'none');
  });
});
