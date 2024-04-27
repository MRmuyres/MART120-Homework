var textCount; 
//Character displayed determines scene
var sceneCount = 0;

//Textbox setup and intro
function setup(){
    buttonOne.textFont = "DotMatrix";
    buttonOne.textSize = 30;
    buttonOne.textColor = "white";
    buttonOne.color = "#A388D563"
    buttonOne.text = "Welcome to the EGOIST project. Thank you for your participation.";
    buttonTwo = new Clickable();
    buttonTwo.color = "#A388D563"
    buttonTwo.textFont = "DotMatrix";
    buttonTwo.textSize = 30;
    buttonTwo.textColor = "white";
    buttonTwo.text = "Please listen attentively to the following instructions.";
    frameRate(15);
    textCount = 0;
}

//basic textbox
function textbox(text, message){
    if(textCount == text){
      myButton.draw();
      scribble.scribbleRoundedRect(width/2,height/2+215,580,150,20);
      myButton.text = message;
}
}

function draw(){
    fill(0);
  textSize(24);
  textAlign(CENTER);
  myButton.draw();
  myButton.locate(10,height/2+140)
  myButton.resize(580,150)
  myButton.strokeWeight = 0;
  stroke(255);
  var scribble = new Scribble();

  myButton.onPress = function(){  
    //When myButton is pressed, the text will be cycled through
    textCount++;
  }
    if(sceneCount == 0){
        imageMode(CENTER);
        myButton.textFont = "DotMatrix";
        myButton.textSize = 30;
        myButton.textColor = "white";
        myButton.color = "#A388D5";
        myButton.draw();
    }
}