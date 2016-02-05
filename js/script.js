var game = {
    answer: 0,
    chances: 3,
}

$(document).ready(function() {
    $("#newGame").click(function() {
        start();
    });
    });
    function start() {
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
    	if (calc.display.value.length < 7) {
    	$("#error").show();
    	}
    	else{
    	calc.display.value=eval(calc.display.value);
    	}
    }
    $("#body").click(function() {
    	$("#error").hide();
    });

