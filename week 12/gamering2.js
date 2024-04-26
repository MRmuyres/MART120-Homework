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

// Draw player
function player(red, green, blue, playerx, playery, size) {
    fill(red, green, blue);
    noStroke();
    circle(playerx, playery, size);
}

// Draw moving obstacle
function movingObstacle(red, green, blue, obstaclex, obstacley, size) {
    fill(red, green, blue);
    square(obstaclex, obstacley, size);
}

// Draw clicked obstacle
function clickedObstacle(red, green, blue, mousex, mousey, width, height) {
    fill(red, green, blue);
    rect(mousex, mousey, width, height);
}

// Draw goal
function makeGoal(red, green, blue, x, y, width, height) {
    fill(red, green, blue);
    rect(x, y, width, height);
}

// Move obstacle and check boundary
function obstacleMove(leftBoundary, rightBoundary, topBoundary, bottomBoundary) {
    if (obstaclex <= leftBoundary || obstaclex >= rightBoundary) {
        movementx *= -1;
    }

    if (obstacley <= topBoundary || obstacley >= bottomBoundary) {
        movementy *= -1;
    }

    obstaclex += movementx;
    obstacley += movementy;
}

// Move player with arrow keys
function playerMove(speed) {
    if (keyIsDown(37)) {
        playerx -= speed;
    } 
    if (keyIsDown(39)) {
        playerx += speed;
    } 
    if (keyIsDown(38)) {
        playery -= speed; 
    } 
    if (keyIsDown(40)) {
        playery += speed; 
    }
}

// Check win condition
function winCondition(leftBoundary, rightBoundary, topBoundary, bottomBoundary, textSize, textx, texty) {
    if (playerx > leftBoundary && playerx < rightBoundary && playery > topBoundary && playery < bottomBoundary) {
        movementx = 0;
        movementy = 0;
        textSize(textSize);
        text('YOU WIN!', textx, texty);
    }
}

// Draw border
function makeBorder(red, green, blue, weight, value1, value2) {
    fill(red, green, blue);
    strokeWeight(weight);
    line(value1, value1, value1, value2);
    line(value1, value1, value2, value1);
    line(value2, value1, value2, value2);
    line(value1, value2, value2, value2);
}

function draw() {
    background(0);

    makeBorder(300, 300, 300, 10, 0, 600);

    player(173, 69, 22, playerx, playery, 25);

    movingObstacle(64, 127, 4, obstaclex, obstacley, 50);

    movingObstacle(172, 86, 189, obstaclex, obstacley, 50);

    clickedObstacle(188, 188, 74, mousex, mousey, 50, 100);

    obstacleMove(0, 600, 0, 600);

    playerMove(5);

    winCondition(200, 400, 10, 50, 50, 300, 400);
}

function mouseClicked() {
    mousex = mouseX;
    mousey = mouseY;
}
