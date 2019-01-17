var brightgreen=255
var brightred=100
function setup() {
createCanvas(1000, 1000);
//game board
background(0);
//game board color
}
function draw() {
fill(0, 255, 0);
//bright greem
rect(10, 10, 700, 90);
rect(700, 700, 90, 90);
rect(700, 10, 90, 600);
rect(10, 700, 700, 90);
rect(10, 190, 90, 600);
rect(10, 350, 600, 90);
rect(350, 10, 90, 90);
rect(350, 230, 90, 250);
rect(350, 650, 90, 90);
rect(700, 350, 90, 90);
rect(175, 45, 90, 190);
rect(525, 275, 90, -330);
rect(525, 525, 90, 90);
rect(175, 525, 615, 90);
//the walls
fill(255, 255, 0);
ellipse(657, 130, 20, 20);
//coin
fill(brightgreen,0,0);
//bright red
ellipse(mouseX, mouseY, 10, 10);
//you
textSize(32);
text('Start', 10, 150);
text('Finish', 700, 670);
text('1. Reach the end of the maze without touching the walls', 10, 830);
text('2. Retrive the hidden coin', 10, 870);
fill(brightred);
//rules
if (mouseX> 700&&mouseX<700+50&&mouseY>670&&mouseY<670+15){
  background(0);
}
}
