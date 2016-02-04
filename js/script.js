answer = 0;

$(document).on('click', "#newGame", function() {
	start();

});

function start() {
	answer = 1;
}

function nextRound() {
	$("#round").text(answer++);
}

function checkAnswer() {

}