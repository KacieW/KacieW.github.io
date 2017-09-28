$(document).ready(function() {
  $(":file").change(function() {
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = imageIsLoaded;
      reader.readAsDataURL(this.files[0]);
    }
  });
  var modal1 = document.getElementById('centerForm1');
  var modal2 = document.getElementById('centerForm2');
  $(window).click(function(e) {
    if (e.target == modal1) {
     modal1.style.display = "none";
     $(".loginForm").addClass('showloginbox');
   }else{
      modal1.style.display = "block";
    }
    if (e.target == modal2) {
     modal2.style.display = "none";
     $(".signinForm").addClass('showsignupbox');
    }else{
      modal2.style.display = "block";
    }
  });

  $('#loginup').click(function(){
    if($("form[name='registration2']").hasClass("showsignupbox")){
      $(".loginForm").toggleClass('showloginbox');
    }else{
      console.log("do not open signup form");
    }

  });
  $('#signup').click(function(){
    if($("form[name='registration1']").hasClass("showloginbox")){
      $(".signinForm").toggleClass('showsignupbox');
    }else{
      console.log("do not open login form");
    }
  });
  $("form[name='registration1']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    }
  });
  $("form[name='registration2']").validate({
    rules: {
      username:"required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
      username:"Please enter your username",
      email: "Please enter a valid email address",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      }
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

