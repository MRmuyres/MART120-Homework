
//variables
var line; 
var temperamentC;
var temperamentH;
var isButtonPressed = false;
var isSecondButtonPressed;
var buttonCount;
var sceneCount;
var buttonTimer = false;
var myTimer = 30000; 
// Const variables for the button:



//onclick date.parce. > +30seconds 
// store date
//click button - check date > 30 seconds
// on click: another variable says "clicked"
// delayed pop-up based on click variable
//timeout - was button clicked?
// alert 
const timeLimit = 30000;
const imageButton = document.getElementById('redButton');

function textbox(instance, message){
    if (line = instance){
        alert(message);
        line ++;
    }

}

//check temperament
function temperamentCheck(variable){
    if (variable >= 5){
        isButtonPressed = true;
    } else {
        isButtonPressed = false;
    }
}

//Changing messages based on time
function textCountTimer (){
    line ++;
}

function textCountReset (){
    line = 0;
}


/*function repeatEnding(){
    document.getElementById('redButton').addEventListener('click', function(){
        isButtonPressed = true;
    });

    setTimeout(function(){
        buttonTimer = true;
        
    }, timeLimit);

    setInterval(function(){
        if(isButtonPressed){
            alert('Assessment complete. You may exit now. Thank you for your participation.');
            window.location.replace("goodEnding.html");
        } else if (buttonTimer) {
            alert('Your time is up. You may exit now. Thank you for your participation.');
            window.location.replace("badEnding.html");
        }
    }, 1000);
}
*/
function repeatEnding(){
    document.getElementById('redButton').addEventListener('click', function(){
        isButtonPressed = true;
    });

    setTimeout(function(){
        buttonTimer = true;
        
    }, timeLimit);

    var intervalId = setInterval(function(){
        if(isButtonPressed){
            alert('Assessment complete. You may exit now. Thank you for your participation.');
            window.location.replace("goodEnding.html");
            clearInterval(intervalId);
        } else if (buttonTimer) {
            alert('Your time is up. You may exit now. Thank you for your participation.');
            window.location.replace("badEnding.html");
            clearInterval(intervalId);
        }
    }, 1000);
}

function setup(){
    //Variable values
    line = 1;
    sceneCount = 0;
    isButtonPressed = false;
    isSecondButtonPressed = false;
    buttonCount = 0;
    buttonTimer = false;

     //Temperament check
        temperamentC = Math.floor(Math.random() * 5) + 1;
        temperamentH = Math.floor(Math.random() * 10) + 1;
}

function draw(){

    //desk scene 0
    if (sceneCount == 0){
        textbox(1, 'Welcome to EGOIST Labs and thank you for your cooperation.')
        textbox (2, "Today marks your first exam. Please relax and listen carefully to the following instructions.")
        textbox (3, "In the room next to you, there is a deathrow crimimal.");
        textbox (4, "One the timer begins, you will have 30 seconds to press the button in front of you. This will administer a non-lethal shock to the criminal.");
        textbox(5, "Please understand that this is essential for our research. The shocks may cause discomfort, but they are necessary to ensure the accuracy of our findings.");
        textbox (6, "You may begin now. Thank you once again for your cooperation.");
    
        

        repeatEnding();

    }
   
}

window.onload = function() {
    setup();
    draw();
}