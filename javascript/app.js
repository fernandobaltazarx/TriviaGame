
var timerLive = true;

var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 120;
function countTimer() {
--totalSeconds;


if (timerLive){

	if (totalSeconds == 0) {
		window.location.href = "outOfTime.html";
	}

	document.getElementById("timer").innerHTML = totalSeconds;
	}

}

function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}

var questionsCount=4;
var questionsButtonsClicked=0;


function handleClick()
  {         
var answers = ["q1-d", "q2-d", "q3-d", "q4-d"]
var amountCorrect = 0;          
for(var i = 1; i <= 45; i++) {
  var radios = document.getElementsByName('q'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if (radio.checked) {
    	++questionsButtonsClicked;
    }
    // console.log(radio.value);
    if(contains(answers, radio.value) && radio.checked) {
      amountCorrect++;
    }
  }
 }  
 	timerLive = false;
    console.log("Correct Responses: " + amountCorrect);
	document.getElementById("quiz").style.display="none";
	document.getElementById("RESULTS").innerHTML = "All Done!<br>Correct Answers: " 
		+ amountCorrect + "<br>Incorrect Answers: "
		+ (questionsCount - amountCorrect) + "<br>Unanswered: "
		+ (questionsCount - questionsButtonsClicked);
  }

