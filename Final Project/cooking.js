
//variables
var line; 
var temperamentC;
var temperamentH;
var isButtonPressed;
var isSecondButtonPressed;
var buttonCount;
var sceneCount;
var buttonTimer;
var myTimer = 30000; 
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

/* function repeatEnding(){
    
    setTimeout(function() {
        // Check if the button has not been clicked
        if (!isButtonPressed) {
            line =8;
            textbox (8, "Your time is up. You may exit now. Thank you for your participation.");
            sceneCount ++;
        }
         // Add click event listener to the button
    document.getElementById('redButton').addEventListener('click', function() {
        // Set buttonPressed to true when the button is clicked
        if (isButtonPressed){ 
            buttonCount ++;
            line = 7;
            textbox (7, "Assesment complete. You may exit now. Thank you for your participation.");
            sceneCount ++;
        }
       
    });
    }, timeLimit);

}

*/

function repeatEnding(){
    document.getElementById('redButton').addEventListener('click', function(){
        isButtonPressed = true;
    });

    document.getElementById('goodButton').addEventListener('click', function(){
        isSecondButtonPressed = true;
    });

    setTimeout(function(){
        const button = document.getElementById('redButton');
        button.style.display = 'none';
        buttonTimer = true;
        
    }, timeLimit);

    if(isButtonPressed && !isSecondButtonPressed){
        alert('Assesment complete. You may exit now. Thank you for your participation.');
        window.location.replace ("goodEnding.html");
    } 
    if (buttonTimer) {
        alert ('Your time is up. You may exit now. Thank you for your participation.')
        window.localStorage.replace ("badEnding.html");
    }

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