var faceSize = 600; // Variable that all feature of the face rely on, this keeps the face in proportion if you change this one variable
var eyeColourR = 0;
var eyeColourG = 250;
var eyeColourB = 50;
var eyebrowColourR = 0;
var eyebrowColourG = 0;
var eyebrowColourB = 0;
var hairColourR = 0;
var hairColourG = 0;
var hairColourB = 0;
var faceColourR = 245; //Face colour start off beige
var faceColourG = 222;
var faceColourB = 179;

function setup() {
  createCanvas(2000,1000);
}
function draw() {
  //Michael made everything from here down
  background(0,120,30);
  textSize(30);
  fill(0);
  text("Press the 'a' key to change the colour of the hair", 1000, 550);
  text("Press 'h' to change the colour of the hair", 1000, 300);
  text("Press the 'e' key to change eyebrow colour", 1000, 350);
  text("Press the 'i' key to change the eye colour", 1000, 400);
  text("Press the 's' key to change the colour of the skin", 1000, 450);
  text("Click the mouse to change all the colours", 1000, 500);
  ellipse(850, 450, 200, 200);
  ellipse(880, 540, 100, 100);
  ellipse(345, 450, 200, 200);
  ellipse(315, 540, 100, 100);
  stroke(0);
  fill(faceColourR, faceColourG, faceColourB); //Makes the face a random colour
  ellipse(faceSize, faceSize/1.2,faceSize,(faceSize + faceSize/4)); //Make the face rely on the original faceSize variable and make it a bit taller than wider
  //Draw left eye
  fill(255,255,255); // Makes the eyes white
  ellipse(faceSize - (faceSize / 4.2), faceSize - (faceSize / 3), (faceSize/6), (faceSize/8));
  //Draw right eye
  ellipse(faceSize + (faceSize / 4.2), faceSize - (faceSize / 3), (faceSize / 6), (faceSize/8));
  //Draw the eye colour part
  fill(eyeColourR, eyeColourG, eyeColourB); //colour the eye to the random variable
  ellipse(faceSize + (faceSize / 4.2), faceSize - (faceSize / 3), (faceSize  / 10), faceSize / 10); //right eye
  ellipse(faceSize - (faceSize / 4.2), faceSize - (faceSize / 3), faceSize / 10, faceSize / 10); //left eye
  //Draw the left pupil
  fill(0); //Make the pupils black
  ellipse(faceSize - (faceSize / 4.2), faceSize - (faceSize / 3), (faceSize / 30), (faceSize / 30));
  //Draw the right pupil
  ellipse(faceSize + (faceSize / 4.2), faceSize - (faceSize / 3), (faceSize / 30), faceSize / 30);
  //Draw the eyebrows
  fill(eyebrowColourR, eyebrowColourG, eyebrowColourB); //The colour of the eyebrows
  rect(faceSize + (faceSize / 7), faceSize - (faceSize /2), faceSize / 6, faceSize / 56); //left eyebrow
  rect(faceSize - (faceSize / 7) - (faceSize / 6), faceSize - (faceSize / 2), faceSize / 6, faceSize / 56);
  //Draw the hair
  fill(hairColourR, hairColourG, hairColourB); //hair colour
  arc(faceSize, faceSize - faceSize / 1.8, faceSize - faceSize /4.5, faceSize/2, -PI, 0, CHORD); //Hair piece
  noStroke();
  ellipse(faceSize, faceSize - faceSize / 1.8, faceSize - faceSize / 1.2, faceSize - faceSize/2) //main extra hair piece
  ellipse(faceSize + faceSize / 10, faceSize - faceSize / 1.8, faceSize / 6.5, faceSize / 6.5); //medium left bit of hair piece
  ellipse(faceSize - faceSize / 10, faceSize - faceSize / 1.8, faceSize / 10, faceSize / 10); //small right bit of hair piece
  ellipse(faceSize + faceSize / 6, faceSize - faceSize /1.75, faceSize / 11, faceSize / 11)
    ellipse(faceSize +faceSize /48, faceSize, faceSize /25, faceSize/20);
}
function keyPressed(){ //When a key is pressed, do something depending on which key it is
  if (key == 'e'){ //If key is 'e' change the eyebrow colour
    eyebrowColourR = random(250);
    eyebrowColourG = random(250);
    eyebrowColourB = random(250);
  }else if (key == 'h'){ //If key is 'h' change the hair colour
      hairColourR = random(250);
      hairColourG = random(250);
      hairColourB = random(250);
  }else if (key == 'i'){ //If key is 'i' change the eye colour
    eyeColourR = random(250);
    eyeColourG = random(250);
    eyeColourB = random(250);
  }else if (key == 's'){ //if key is 's' change the face colour
    faceColourR = random(250);
    faceColourG = random(250);
    faceColourB = random(250);
  }else if (key == 'a'){ //if key is 'a' change the ear colour
    earColourR = random(250);
    earColourG = random(250);
    earColourG = random(250);
  }


}
function mouseClicked(){ //When the mouse is clicked, change all the colours
  eyebrowColourR = random(250); //Eyebrow colours
  eyebrowColourG = random(250);
  eyebrowColourB = random(250);
  hairColourR = random(250); //Hair colours
  hairColourG = random(250);
  hairColourB = random(250);
  eyeColourR = random(250); //Eye colours
  eyeColourG = random(250);
  eyeColourB = random(250);
  faceColourR = random(250); //Face colours
  faceColourG = random(250);
  faceColourB = random(250);
  earColourR = random(250); //Ear colours
  earColourG = random(250);
  earColourG = random(250)
ellipse(faceSize +faceSize /48, faceSize, faceSize /25, faceSize/20);
//



}
