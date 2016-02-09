var game = {
    answer: 0,
    chances: 3,
    previousAnswer: 0,
}

$(document).ready(function() {
    $("input[type=button], input[type=text]").attr('disabled', true);
    $("#newGame").click(function() {
        $("input[type=text]").val("");
        $("input[type=button], input[type=text]").removeAttr('disabled');
        $(this).animate({"right": "0"}, {duration: 400});
        start();
    });
});

function start() {
    $("#newGame").text("Restart");
    $("#round").text(game.answer = 1);
    $("#error").hide('slow/400/fast', function() {

    });
    $("#round").show();
    nextRound();
}

function nextRound() {
    $("#chances").text(game.chances = 3);
    $("[round]").text(++game.answer);
}

function checkAnswer() {
	/*
	if (calc.display.value == game.previousAnswer) {
}
	else {
		$("input[type=text]").val("");
}
*/
	$("#guess").text(eval(calc.display.value));
    if (game.chances > 1) {
        if (calc.display.value.length < 7) {
            $("#error").show().delay(400).fadeOut();
        } else if (eval(calc.display.value) == game.answer) {
            calc.display.value = eval(calc.display.value);
            nextRound();
        } else {
            $("#chances").text(--game.chances);
        }
    } else {
        gameOver();
    }
}

function gameOver() {
	$("round").hide();
	$("guess").text("?");

}


