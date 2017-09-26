$(document).ready(function() {
  var allQuestions = [{
    question: "1. A computer assisted method for the recording and analyzing of existing or hypothetical systems is?",
    choices: ["Data transmission", "Data flow", "Data capture", "Data processing"],
    correctAnswer: 1
  }, {
    question: "2. The brain of any computer system is",
    choices: ["ALU", 'Memory', 'CPU', 'Control unit'],
    correctAnswer: 2
  }, {
    question: "3. What difference does the 5th generation computer have from other generation computers?",
    choices: ["Technological advancement", 'Scientific code', 'Object Oriented Programming', 'All of the above'],
    correctAnswer: 0
  }, {
    question: "4. Which of the following is the 1's complement of 10?",
    choices: ['01', "110", "11", "10"],
    correctAnswer: 0
  }, {
    question: "5. Which part interprets program instructions and initiate control operations.",
    choices: ['Input', "Storage unit", "Logic unit", "Control unit"],
    correctAnswer: 3
  },{
    question: "6. The binary system uses powers of",
    choices: ['2', "10", "8", "16"],
    correctAnswer: 0
  },{
    question:'7. A computer program that converts assembly language to machine language is',
    choices: ['Compiler', "Interpreter", "Assembler", "Comparator"],
    correctAnswer: 2
  },{
    question:'8. The time required for the fetching and execution of one simple machine instruction is',
    choices: ['Delay time', "CPU cycle", "Real time", "Seek time"],
    correctAnswer: 1
  },{
    question:'9. Which access method is used for obtaining a record from a cassette tape?',
    choices: ['Direct', "Sequential", "Random", "All of the above"],
    correctAnswer: 1
  },{
    question:'10. A program component that allows structuring of a program in an unusual way is known as',
    choices: ['Correlation', "Coroutine", "Diagonalization", "Quene"],
    correctAnswer: 1
  }
];
  var correct = [];//to store correct answers
  allQuestions.forEach(function(item) {
    correct.push(item.correctAnswer)
  });//push correct answers to the array.
  var currentPage = -1;
  var startbtn = document.getElementById("start");
  var loginbtn = document.getElementById("login");
  var startPage = document.getElementById("startPage");
  var wrapper = document.getElementById("wrapper");
  var questions = document.getElementById("questions");
  var radiobtn = document.getElementsByClassName("ch");
  var optionDescript = document.getElementsByClassName("option-descript");
  var prevbtn = document.getElementById("prev");
  var nextbtn = document.getElementById("next");
  var resultArr = [];//to store user's answers
  startbtn.addEventListener('click', showNext);//btn to start
  nextbtn.addEventListener('click', showNext);//btn for next question
  prevbtn.addEventListener('click', showPrev);//btn for prev question
  checkCookie();//check if it is a return user by cookies.
  storeLocalStorage();//use LocalStorage to store userName.
  //check for cookies
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 60 * 1000));//set expired time
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function checkCookie() {
    $('#loginForm').hide(); //hide login form
    var user = getCookie("username"); //get cookie
    if (user !== "") { //有cookies, show start button to start quiz right way.
      $('#start').fadeIn('fast');
      $('#displayUserName').append("Welcome again " + user);
    } else {//no cookie, show login form for new user to login.
      $('#loginForm').show();
      $('#loginForm').on('click', '#login', function(ev) {//after clicking the login button, show the start button to start.
        ev.preventDefault();//prevent submit to the server at this time
        user = document.getElementById("username").value;
        userpw = document.getElementById("password").value;
        console.log(user);
        if(user==""){
          alert("Please enter your user name");
        }else if(userpw==""){
          alert("Please enter your password");
        }else{
          $(this).parent().detach();
          $('#start').fadeIn('slow');
          //get the user name from the input form
          setCookie("username", user, 1);
          $('#displayUserName').append("<h2>Welcome " +user+'</h2>');
          $('#displayUserName').append("<p>Place select only one answer of each question.</p>");
        }

      });
    }
  }
  //end of cookie checking
  //store user name by localstorage
  function storeLocalStorage() {
    if (typeof(Storage) !== "undefined") {
      var username = document.getElementById("username");
      var myUserName = username.value;
      localStorage.setItem("username", myUserName);
    } else {
      alert("Sorry!");
    }
  }

//start the real quiz
  function getAnswer() {//get the user's answer from the radio btu she selected.
    var tempChoiceValue = null;
    for (var j = 0; j < radiobtn.length; j++) {
      if (radiobtn[j].checked) {
        tempChoiceValue = radiobtn[j].value;
      }
      radiobtn[j].checked = false;//clear all the btns ready for next question to display.
    }
    return tempChoiceValue;
  }
  function showNext(ev) {//show next question
    var userAnswer = getAnswer();//get the user's answer before move it to the next question
    currentPage++;
    startPage.style.display = "none";//hide the startPage
    wrapper.style.display = "block";//show the question page
    if (currentPage > 0) {//not the startpage
      resultArr[currentPage - 1] = userAnswer;//put user's answer to the resultArr
    }
    if (currentPage > 0 && (userAnswer === null)) {//not start page and user's answer didn't select anything
      currentPage--;
      alert("Please select one at a time.");
      return;//stop the code
    } else {
      if (currentPage == 0) {//for startpage, hide the prev button
        prevbtn.style.display = "none";
      } else {
        prevbtn.style.display = "inline-block";//show prev btn
      }
      if (currentPage == 9) {//if it is the last question page, change the btn value from "next" to "submit"
        this.value = "Submit";
        this.style.backgroundColor = "#E3879E";
        this.style.border = "none";
      }
      if (currentPage == 10) { //show the result
        this.onclick = showResult();
      }
    }
    //display the questions and choices
    questions.innerHTML = allQuestions[currentPage].question;
    for (var i = 0; i < optionDescript.length; i++) {
      optionDescript[i].innerHTML = allQuestions[currentPage].choices[i];
    }
    //store the user's answer for nav back and force with btns
    restorePreviousAnswer();
  }
  var restorePreviousAnswer = function() {
    if (resultArr[currentPage] != null) {
      radiobtn[resultArr[currentPage]].checked = true;
    }
  };
  function showPrev() {//show the prev question
    var userAnswer = getAnswer();
    if (userAnswer != null) {
      resultArr[currentPage] = userAnswer;
    }
    currentPage = currentPage - 1;
    if (currentPage == 0) {
      prevbtn.style.display = "none";//hide the prev btn for the start page
    }
    if (currentPage != 9) {//change btn value to 'next' if it is not the last question page
      nextbtn.value = "Next";
      nextbtn.style.backgroundColor = "#a653f4";
    }
    //show questions and choices
    questions.innerHTML = allQuestions[currentPage].question;
    for (var i = 0; i < optionDescript.length; i++) {
      optionDescript[i].innerHTML = allQuestions[currentPage].choices[i];
    }
    restorePreviousAnswer();
  }
//page to show the result
  var resultPage = document.getElementById("resultPage");
  function showResult() {
    wrapper.style.display = "none";//hide the questions pages.
    var temp = 0;
    var h2 = document.createElement("h2");
    for (var q = 0; q < correct.length; q++) {
      if (resultArr[q] == correct[q]) {//calculate the score
        temp++;
      }
    }
    var finalscore = temp*100/correct.length;
    console.log(finalscore);
    var h2Text = document.createTextNode("Your final score is: " + finalscore + "/100");
    h2.appendChild(h2Text);
    resultPage.appendChild(h2);
  }
});
