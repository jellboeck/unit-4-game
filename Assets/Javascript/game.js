
//Variables
var win = 0;
var lose = 0;
var ranNumber = [];
var userScore = 0;

//Crystal Variables
var crystal1 = [];
var crystal2 = [];
var crystal3 = [];
var crystal4 = [];

$("#win").html(win);
$("#lose").html(lose);
$("#user_score").html(userScore);


function gameReset() {


    //reset the variables    

    ranNumber = [];
    userScore = 0;
    $("#user_score").html(userScore);
    crystal1 = [];
    crystal2 = [];
    crystal3 = [];
    crystal4 = [];
    $("#message").text("");
   

    //choose the random number between 19 and 120
    ranNumber = Math.floor(Math.random() * 120) + 20;
    $("#ran_number").text(ranNumber)
    console.log(ranNumber)

    //choose the values of the crystals
    crystal1 = Math.floor(Math.random() * 10) + 5;
    console.log(crystal1)

    crystal2 = Math.floor(Math.random() * 8) + 1;
    console.log(crystal2)

    crystal3 = Math.floor(Math.random() * 3) + 1;
    console.log(crystal3)

    crystal4 = Math.floor(Math.random() * 9) + 3;
    console.log(crystal4)


}



$(".btn-lg").on("click", function () {
gameReset()

})


$("#crystal_1").on("click", function () {
    userScore += crystal1;
    $("#user_score").html(userScore);
    checkWin()

})

$("#crystal_2").on("click", function () {
    userScore += crystal2;
    $("#user_score").html(userScore);
    checkWin()

})


$("#crystal_3").on("click", function () {
    userScore += crystal3;
    $("#user_score").html(userScore);
    checkWin()

})


$("#crystal_4").on("click", function () {
    userScore = userScore + crystal4;
    $("#user_score").html(userScore);
    checkWin()

})

function checkWin() {

    if (userScore === ranNumber) {
        win++;
        $("#message").text("Wow! You did it! Congratulations!");
        console.log(userScore);
        $("#win").text(win);
  
    }

    else if (userScore > ranNumber) {
        $("#message").text("Oh no! You went over! Better luck next time");
        console.log(userScore);
        lose++;
        $("#lose").text(lose);
       

    }

}