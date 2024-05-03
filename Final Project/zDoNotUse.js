var textCount; 
//Character displayed determines scene
var sceneCount = 0;

var temperamentC;
var temperamentH;
var buttonPressed;
var buttonCount;
var textBoxes = [];

const button = document.getElementById('redButton');

function setup(){
     //Variable values
     textCount = 0;
     sceneCount = 0;
     buttonPressed = false;
     buttonCount = 0;

     // Create text boxes
 textBoxes.push(new TextBox("Welcome to the EGOIST compliance study. Thank you for your invaluable participation.", 700, 200));

    //Temperament check
    temperamentC = Math.floor(Math.random() * 5) + 1;
    temperamentH = Math.floor(Math.random() * 10) + 1;
}
 
//basic textbox
function textbox(lineNumber, message){
      if(textCount == lineNumber){
        for (let textBox of textBoxes) {
            if (textBox.lineNumber === lineNumber) {
                textBox.display(message);
            }
        }
    }
}


//check temperament
function temperamentCheck(variable){
    if (variable >= 5){
        buttonPressed = true;
        buttonCount ++;
    } else {
        buttonPressed = false;
    }
}

//Changing messages based on time
function textCountTimer (){
    textCount ++;
}

function textCountReset (){
    textCount = 0;
}

//Image button 
const imageButton = document.getElementById('redButton');
imageButton.addEventListener('click', function() {
    buttonPressed = true;
});

function draw(){
        //textbox appearance
        fill(0);
        textSize(24);
        textAlign(CENTER);
        for (let textBox of textBoxes) {
            textBox.draw();
        }

  myButton.onPress = function(){  
    //When myButton is pressed, the text will be cycled through
    textCount++;
  }
    //Scene 1
if (sceneCount == 0){
    textbox (1, "In the room next to you, there is a deathrow crimimal.");
    textbox (2, "One the timer begins, you will have 30 seconds to press the button in front of you. This will administer a non-lethal shock to the criminal.");
    textbox(3, "Please understand that this is essential for our research. The shocks may cause discomfort, but they are necessary to ensure the accuracy of our findings.");
    textbox (4, "You may begin now. Thank you for your cooperation.");


    setTimeout (textCountTimer, 30000);

    button.addEventListener('click', function(){
        buttonPressed = true;
        buttonCount ++;
        textCount = 5;
    });


    if (buttonPressed){
        textbox (5, "Assesment complete. You may exit now. Thank you for your participation.");
        sceneCount = 1;
    }
    else
        textCount = 6;
        textbox (6, "Your time is up. You may exit now. Thank you for your participation.");
        sceneCount = 1;
    }

//Scene 2
if (sceneCount == 2){

}

//Scene 3
if (sceneCount == 3){

}

// Reset the text to change the scene
    setTimeout (textCountReset, 5000);


    class TextBox {
        constructor(message, x, y) {
            this.message = message;
            this.x = x;
            this.y = y;
            this.width = 700; 
            this.height = 200; 
            this.lineNumber = -1; // Default value
        }
    
        display(message) {
            this.message = message;
        }
    
        draw() {
            fill(255);
            rectMode(CENTER);
            rect(this.x, this.y, this.width, this.height);
            fill(0);
            textAlign(CENTER, CENTER);
            text(this.message, this.x, this.y);
        }
}
}

window.onload = function() {
    setup();

    textCount = 0; 
    draw();
}
