// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES

/*global $ */


// DOCUMENT READY FUNCTION BELOW

$(document).ready(function() {

    $("#shoot").click(function(){

        var userChoice =$("#input").val();
         $("#userChoice").text(userChoice);
        var random = Math.random();
        var computerChoice;
        
        if(random > 0.3333 && random < .6666){
            computerChoice = "rock"
        } else if(random < .3333){
            computerChoice = "scissors"
        } else if(random > .6666 && random < 1){
            computerChoice = "paper"
        }
        
        
        if(userChoice === "rock"||userChoice === "paper"||userChoice === "scissors"){
            
            if(userChoice === computerChoice){
                $("#result").text("Tie");
            } else if(userChoice === "rock" && computerChoice === "paper"){
                $("#result").text("Computer Wins");
            } else if(userChoice === "rock" && computerChoice === "scissors"){
                $("#result").text("User Wins");
            } else if(userChoice === "paper" && computerChoice === "scissors"){
                $("#result").text("Computer Wins");
            } else if(userChoice === "paper" && computerChoice === "rock"){
                $("#result").text("User Wins");
            } else if(userChoice === "scissors" && computerChoice === "rock"){
                $("#result").text("Computer Wins");
            } else if(userChoice === "scissors" && computerChoice === "paper"){
                $("#result").text("User Wins");
            }
            
        } else if(userChoice !== "rock" || userChoice !== "scissors" || userChoice !== "paper"){
            alert("Please type rock, paper, or scissors");
            $("#userChoice").text("");
        }
        

        $("#computerChoice").text(computerChoice);
        
        
    });    
    
    
    
    
});
