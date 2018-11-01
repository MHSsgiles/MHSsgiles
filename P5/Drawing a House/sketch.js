var houseWidth = 500;

function setup() {

createCanvas (1000,1000);

}

function draw() {

rect(width/3, height/4, houseWidth, houseWidth/2);

var doorWidth = 200;

rect(width/1.7, height/2.9, doorWidth, doorWidth/1.3);

var windowWidth = 100

rect(width/2.5, height/3, windowWidth, windowWidth/1.2);

line(270,258,1500,90);

ellipse(620, 430, 20, 20);

line(width/3+houseWidth,height/4,width/3+houseWidth,height/5.3-6.3);

}
