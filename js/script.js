var game = {
    answer: 0,
    chances: 3,
}

$(document).ready(function() {
    $("input[type=button], input[type=text]").attr('disabled', true);
    $("#newGame").click(function() {
        $("input[type=text]").val("");
        $("input[type=button], input[type=text]").removeAttr('disabled');
        $(this).animate({
            "right": "0"
        }, {
            duration: 400
        });
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
    if (game.chances > 1) {
        if (calc.display.value.length < 7) {
            $("#error").show().delay(200).fadeOut();;
        } else if (calc.display.value == game.answer) {
            calc.display.value = eval(calc.display.value);
        } else {
            $("#chances").text(--game.chances);
        }
    } else {
        //gameover
    }
}

$("#body").click(function() {
    $("#error").hide();
});

