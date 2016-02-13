var game = {
    answer: 0,
    chances: 3,
}

$(document).ready(function() {
    $("input[type=button], input[type=text]").attr('disabled', true);
    $("#newGame").click(function() {
        $("form[name='calc']").show('slow/400/fast');
        $("input[type=text]").val("");
        $("input[type=button], input[type=text]").removeAttr('disabled');
        $(this).animate({"right": "0"}, {duration: 400});
        start();
    });
});

function start() {
    $("#newGame").text("Restart");
    $("#guess").show('slow/400/fast');
    $("#round").text(game.answer = 0);
    $("#error").hide('slow/400/fast');
    $("#round").show();
    nextRound();
}

function nextRound() {
    $("input[type=text]").val("");
    $("#chances").text(game.chances = 3);
    $("#round").text(++game.answer);
}

function checkAnswer() {
    var result = eval(calc.display.value);
    
    if (game.chances > 1) {
        $("#guess").text(result);

        if (calc.display.value.length < 7) {
            $("#error").show().delay(400).fadeOut();

        } else if (result == game.answer) {
            calc.display.value = result;
            nextRound();

        } else {
            $("input[type=text]").val("");
            $("#chances").text(--game.chances);
        }

    } else {
        gameOver();
    }
}

function gameOver() {
	$("form[name='calc']").hide('slow/400/fast');
    $("round").hide();
    $("guess").text("?");

}



