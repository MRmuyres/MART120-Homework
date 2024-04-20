var mousex;
var mousey;
var playerx = 300;
var playery = 300;
var obstaclex = 100;
var obstacley = 100;
var movementx;
var movementy;

function setup() {
    createCanvas(600, 600);
    movementx = Math.floor(Math.random() * 10) + 1;
    movementy = Math.floor(Math.random() * 10) + 1;
}

function player(red, green, blue, playerx, playery,size){
    fill(red, green, blue);
    noStroke();
    circle(playerx, playery, size);
}


function movingObstacle(red, green, blue, obstaclex, obstacley, size){
    fill(red, green, blue);
    square(obstaclex, obstacley, size);
    }

    function clickedObstacle(red, green, blue, mousex, mousey, width, height){
        fill(red, green, blue);
        rect(mousex, mousey, width, height);
        }

function draw() {
    background(0);
    
    player(173, 69, 22, playerx, playery, 25);

    movingObstacle(64, 127, 4, obstaclex, obstacley, 50);

    movingObstacle(172, 86, 189,obstaclex,obstacley, 50);
    
    clickedObstacle(188, 188, 74, mousex, mousey, 50, 100);

    // Goal
    fill (200, 200, 200);
    rect (200, 10, 100, 50);
    
    // Movement and Boundary Check for Moving Obstacle
    if (obstaclex <= 600 && obstaclex >= 0) {
        movementx *= -1;
    } 
    if (obstaclex >= 600) {
        obstaclex = 1;
    } 
    if (obstaclex <= 0) {
        obstaclex = 599;
    }

    obstaclex += movementx;

    if (obstacley <= 600 && obstacley >= 0) {
        movementy *= -1;
    } 
    if (obstacley >= 600) {
        obstacley = 1;
    } 
    if (obstacley <= 0) {
        obstacley = 599; 
    }

    obstacley += movementy;

    // Player Movement
    if (keyIsDown(37)) {
        playerx -= 5;
    } 
    if (keyIsDown(39)) {
        playerx += 5;
    } 
    if (keyIsDown(38)) {
        playery -= 5; 
    } 
    if (keyIsDown(40)) {
        playery += 5; 
    }
}

function mouseClicked() {
    mousex = mouseX;
    mousey = mouseY;
}

// Win Condition
if (200 < playerx > 100 && 50 < playery > 10){
    movementx = 0;
    movementy = 0;
    obstaclex = 0;
    obstacley = 0;
    textSize (100);
    text ('YOU WIN!', 300, 400);
}