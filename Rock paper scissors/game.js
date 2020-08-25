var choices = ["rock","paper","scissors"];
var computerChoice = randomChoiceFunction(3);
var userChoice = randomChoiceFunction(3);

function randomChoiceFunction(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function play(computerChoice, userChoice){
    if(computerChoice==0){
        computerChoice=choices[0];
    } else if(computerChoice==1){
        computerChoice=choices[1];
    } else {
        computerChoice=choices[2];
    }
    
    if(userChoice==0){
        userChoice=choices[0];
    } else if(userChoice==1){
        userChoice=choices[1];
    } else {
        userChoice=choices[2];
    }
    
    console.log("The computer has chosen " + computerChoice);
    console.log("You have chosen " + userChoice);
    
    if(computerChoice===userChoice){
        return("It`s a tie!");
    }
    
    if(computerChoice===choices[0]){
        if(userChoice===choices[1]){
            return("Yho have won!");
        } else{
            return("The computer has won!");
        }
    }
    
    if(computerChoice===choices[1]){
        if(userChoice===choices[0]){
            return("The computer has won!");
        } else{
            return("You have won!");
        }
    }
    
    if(computerChoice===choices[2]){
        if(userChoice===choices[0]){
            return("You have won!");
        } else {
            return("The computer has won!");
        }
    }

}

console.log(play(computerChoice, userChoice));