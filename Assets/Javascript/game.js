
//Variables

var win=0;
var lose=0;
var ranNumber= randomNumber();
var userScore=[];

//Crystal Variables

var crystal1 = [];
var crystal2 = [];
var crystal3 = [];
var crystal4 = [];


//function to choose the random number between 19 and 120

function randomNumber() {
    return Math.floor(Math.random() * 120) +19;
    
};

randomNumber()
console.log(ranNumber)