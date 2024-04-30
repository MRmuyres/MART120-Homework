var textCount; 
//Character displayed determines scene
var sceneCount = 0;
var temperamentC;
var temperamentH;
var buttonPressed = false;
var buttonCount = 0;
const button = document.getElementById('redButton');

function setup(){
    //Textbox setup and intro
    buttonOne.textFont = "DotMatrix";
    buttonOne.textSize = 30;
    buttonOne.textColor = "white";
    buttonOne.color = "#A388D563"
    buttonOne.text = "Welcome to the EGOIST compliance study. Thank you for your invaluable participation.";
    buttonTwo = new Clickable();
    buttonTwo.color = "#A388D563"
    buttonTwo.textFont = "DotMatrix";
    buttonTwo.textSize = 30;
    buttonTwo.textColor = "white";
    buttonTwo.text = "Please listen attentively to the following instructions.";
    frameRate(15);
    textCount = 0;

    //Temperament check
    temperamentC = Math.floor(Math.random() * 5) + 1;
    temperamentH = Math.floor(Math.random() * 10) + 1;
}

//basic textbox
function textbox(lineNumber, message){
    if(textCount == lineNumber){
      myButton.draw();
      scribble.scribbleRoundedRect(width/2,height/2+215,580,150,20);
      myButton.text = message;
}
}

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
    alert(buttonPressed = true);
});

function draw(){
    //textbox appearance
    fill(0);
  textSize(24);
  textAlign(CENTER);
  myButton.draw();
  myButton.locate(10,height/2+140);
  myButton.resize(580,150);
  myButton.strokeWeight = 0;
  stroke(255);
  var scribble = new Scribble();

  myButton.onPress = function(){  
    //When myButton is pressed, the text will be cycled through
    textCount++;
  }
    if(sceneCount >= 0){
        imageMode(CENTER);
        myButton.textFont = "DotMatrix";
        myButton.textSize = 30;
        myButton.textColor = "white";
        myButton.color = "#A388D5";
        myButton.draw();
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


    if (buttonPressed = true){
        textbox (5, "Assesment complete. You may exit now. Thank you for your participation.");
        sceneCount = 1;
    }
    else if (buttonPressed = false){
        textCount = 6;
        textbox (6, "Your time is up. You may exit now. Thank you for your participation.");
        sceneCount = 1;
    }
}

// Reset the text to change the scene
    setTimeout (textCountReset, 5000);


}