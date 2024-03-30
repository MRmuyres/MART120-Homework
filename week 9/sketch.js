function setup() {
    createCanvas(400, 400);
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
    ellipse(130,195,52,40);
    ellipse(240,195,52,40);
    fill(0,0,0);
    circle(130,195,35);
     circle(240,195,35);
    fill(500,500,500);
  circle(130,195,10);
    circle(240,195,10);
    fill(70,35,30);
    //lips
    ellipse(185,270,70,30);
    fill(350,235,230);
    triangle(165,245,185,265,200,245)
    //glasses
    noFill();
    stroke(300,200,0);
    strokeWeight(3);
    circle(130,195,80);
    circle(240,195,80);
    line(170,195,200,195);
    strokeWeight(10);
    point(330,250);
    
    
  }