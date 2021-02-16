var ho,min,sec;
var a,b,c;






function setup() {
  createCanvas(displayWidth,displayHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);
  sec=second();
  min=minute();
  ho=hour();
  
  a=map(sec,0,60,0,360);
  b=map(min,0,60,0,360);
  c=map(ho%12,0,12,0,360);

  push();
  rotate(a);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push()
  rotate(b);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(c);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  point(0,0);
  strokeWeight(10);
  noFill();

  stroke(255,0,0);
  arc(0,0,300,300,0,a);

  stroke(0,255,0);
  arc(0,0,280,280,0,b);

  stroke(0,0,255);
  arc(0,0,260,260,0,c);
}
