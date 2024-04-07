var eyeLX = 130;
var eyeRX = 240;
var glassesY = 195;
var pointX = 330;
var pointY = 250;
var t = 15;
var move1;
var move2;
var move3;
var move4;
var move5;
var textMove;




function setup() {
    createCanvas(400, 400);

    var move1 = Math.floor(Math.random() * 10) + 1;
    var move2 = Math.floor(Math.random() * 10) + 1;
    var move3 = Math.floor(Math.random() * 10) + 1;
    var move4 = Math.floor(Math.random() * 10) + 1;
    var move5 = Math.floor(Math.random() * 10) + 1;
    var textMove = Math.floor(Math.random() * 10) + 1;
  }
  
  function draw() {
   
    background(220);
    noStroke();
    //back hair
    fill(0,0,0);
    rect(90,40,100,160);
    //head and neck base
    fill(350,235,230);
     ellipse(200, 130, 200, 175);
    rect(110, 150, 200, 100);
    rect(100,200,220,70);
    rect(110,250,200,50);
    rect(130,270,150,60);
    ellipse(280,200,100,250);
    rect(170,300,120,100);
    //hair
    fill(0,0,0);
    rect(275,80,60,100);
   rect(100,40,235,70);
    triangle(300,150,250,50,200,100);
    triangle(280,100,320,100,270,250);
    //ear
        fill(350,235,230);
    ellipse(330,220,70,90);
    //makeup
    fill(70,35,30);
    ellipse(130,190,55,50);
   ellipse(240,190,55,50);
    fill(500,500,500);
    ellipse(eyeLX,195,52,40);
    ellipse(eyeRX,195,52,40);
    fill(0,0,0);
    circle(eyeLX,195,35);
     circle(eyeRX,195,35);
    fill(500,500,500);
  circle(eyeLX,195,10);
    circle(eyeRX,195,10);
    fill(70,35,30);
    //lips
    ellipse(185,270,70,30);
    fill(350,235,230);
    triangle(165,245,185,265,200,245)
    //glasses
    noFill();
    stroke(300,200,0);
    strokeWeight(3);
    circle(130,glassesY,80);
    circle(240,glassesY,80);
    line(170,glassesY,200,glassesY);
    strokeWeight(10);
    point(pointX,pointY);
     //title and signature
  fill(0,0,0);
  textSize (t);
    text('portrait', 10, 20);
  textSize (15);
  text('Megan Muyres', 300,370);

  //movement
  if (eyeLX >= 400 || eyeLX <= 400){
    move1 *= -1;
  }
    eyeLX += move1;

    if (eyeRX >= 400 || eyeRX <= 400){
        move2 *= -1;
      }
        eyeRX += move1;

        if (glassesY >= 400 || glassesY  <= 400){
            move3 *= -1;
          }
          glassesY += move3;

          if (pointX >= 400 || pointX  <= 400){
            move4 *= -1;
          }
          pointX += move4;

          if (pointY >= 400 || pointY  <= 400){
            move5 *= -1;
          }
          pointY += move5;

          if (t <= 20 || t>= 10){
            textMove *= -1;

          }
          t += textMove;
  }