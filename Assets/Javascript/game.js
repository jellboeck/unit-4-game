
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


function gameReset() {


    //reset the variables    

    ranNumber = [];
    userScore = 0;
    $("#user_score").html(userScore);
    crystal1 = [];
    crystal2 = [];
    crystal3 = [];
    crystal4 = [];

    //choose the random number between 19 and 120
    ranNumber = Math.floor(Math.random() * 120) + 19;
    $("#ran_number").text(ranNumber)
    console.log(ranNumber)

    //choose the values of the crystals
    crystal1 = Math.floor(Math.random() * 10) + 5;
    console.log(crystal1)

    crystal2 = Math.floor(Math.random() * 6) + 1;
    console.log(crystal2)

    crystal3 = Math.floor(Math.random() * 3) + 1;
    console.log(crystal3)

    crystal4 = Math.floor(Math.random() * 9) + 3;
    console.log(crystal4)


}

gameReset()


$("#crystal_1").on("click", function(){
    crystal1 = parseInt(crystal1);
    userScore += crystal1;
    $("#user_score").html(userScore);
    checkWin ()

})

$("#crystal_2").on("click", function(){
    crystal2 = parseInt(crystal2);
    userScore += crystal2;
    $("#user_score").html(userScore);
    checkWin()

})


$("#crystal_3").on("click", function(){
    crystal3 = parseInt(crystal3);
    userScore += crystal3;
    $("#user_score").html(userScore);
    checkWin()

})


$("#crystal_4").on("click", function(){
    crystal4 = parseInt(crystal4);
    userScore = userScore + crystal4;
    $("#user_score").html(userScore);
    checkWin()

})

function checkWin () {

if (userScore === ranNumber){
    alert("You Win");
    console.log(userScore);
    $("#win").text(win);
    gameReset()
}

else if (userScore > ranNumber){
    alert("You Lose!");
    console.log(userScore);
    lose++;
    $("#lose").text(lose);
    gameReset()

}

}