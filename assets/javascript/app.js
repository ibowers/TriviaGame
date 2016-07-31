$(document).ready(function(){

//Hide quizForm and quizResults
$('#quizForm').hide();
$('#quizResults').hide();

//Press start removes the "Start" screen loads in the quiz and starts timer
$('#startButton').click(function(){
	$('#quizStart').hide();
	$('#quizForm').show();
	var timer = 30;
	var interval = setInterval (function () {
		timer--;
		$('#triviaTimer').text(timer);
		if (timer === 0) clearInterval(interval);
	}, 1000);
});

//Check if answers are correct and log correct, incorrect, and unanswered questions

//Load results page


});