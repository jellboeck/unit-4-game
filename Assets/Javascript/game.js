
//Variables
var win = 0;
var lose = 0;
var ranNumber = [];
var userScore = 0;
gameOver = false;

//Crystal Variables
var crystal1 = [];
var crystal2 = [];
var crystal3 = [];
var crystal4 = [];
var value = 0;

$("#win").html(win);
$("#lose").html(lose);
$("#user_score").html(userScore);


function gameReset() {

    //reset the variables    
    gameOver = false;
    userScore = 0;
    $("#user_score").html(userScore);
    $("#message").text("");

    //choose the random number between 19 and 120
    ranNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#ran_number").text(ranNumber)
    console.log(ranNumber)

    //choose the values of the crystals
    crystal1 = Math.floor(Math.random() * 3) + 4;
    console.log(crystal1)

    crystal2 = Math.floor(Math.random() * 3) + 1;
    console.log(crystal2)

    crystal3 = Math.floor(Math.random() * 3) + 7;
    console.log(crystal3)

    crystal4 = Math.floor(Math.random() * 3) + 10;
    console.log(crystal4)

}

//start_game button calls the reset function
$("#start_game").on("click", function () {
    gameReset()

})

$("#crystal_1").on("click", function () {
    value = crystal1;
    checkWin()
})

$("#crystal_2").on("click", function () {
    value = crystal2;
    checkWin()
})

$("#crystal_3").on("click", function () {
    value = crystal3;
    checkWin()
})

$("#crystal_4").on("click", function () {
    value = crystal4;
    checkWin()
})

//Checks to see is the game is over, if not, then the the users click value is added to the userscore
//then we check for a win or loss check
function checkWin() {

    if (!gameOver) {
        userScore = userScore + value;
        $("#user_score").html(userScore);


        if (userScore === ranNumber) {
            win++;
            $("#message").text("Wow! You did it! Congratulations!");
            console.log(userScore);
            $("#win").text(win);
            gameOver = true;

        }

        else if (userScore > ranNumber) {
            $("#message").text("Oh no! You went over! Better luck next time");
            console.log(userScore);
            lose++;
            $("#lose").text(lose);
            gameOver = true;


        }

    }

}

