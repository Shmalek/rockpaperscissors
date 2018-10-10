// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES

/*global $ */


// DOCUMENT READY FUNCTION BELOW

$(document).ready(function() {

    $("#shoot").click(function(){

        var userChoice = $("#userChoice").text($("#input").val());
        
        var random = Math.random();
        var computerChoice;
        
        if(random > 0.3333 && random < .6666){
            
            computerChoice = "rock"
            
        } else if(random < .3333 && random > 0){
            
            computerChoice = "scissors"
            
        } else if(random > .6666 && random < 1){
            
            computerChoice = "paper"
        }

        $("#computerChoice").text(computerChoice);
        
        
        
        
    });    
    
    
    
    
});
