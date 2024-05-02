
//variables
var line; 
var temperamentC;
var temperamentH;
var isButtonPressed;
var buttonCount;
var sceneCount;
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
        buttonCount ++;
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

function repeatEnding(){
    
    setTimeout(function() {
        // Check if the button has not been clicked
        if (!isButtonPressed) {
            line =8;
            textbox (8, "Your time is up. You may exit now. Thank you for your participation.");
            sceneCount ++;
        }
    }, timeLimit);

    // Add click event listener to the button
    document.getElementById('redButton').addEventListener('click', function() {
        // Set buttonPressed to true when the button is clicked
        isButtonPressed = true;
        buttonCount ++;
        line = 7;
        textbox (7, "Assesment complete. You may exit now. Thank you for your participation.");
        sceneCount ++;
    });

}

function setup(){
    //Variable values
    line = 1;
    sceneCount = 0;
    isButtonPressed = false;
    buttonCount = 0;

     //Temperament check
        temperamentC = Math.floor(Math.random() * 5) + 1;
        temperamentH = Math.floor(Math.random() * 10) + 1;
}

function draw(){

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