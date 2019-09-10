function setup() {
  // put setup code here
  createCanvas(500,500);
  background(0,255,0);
}

function draw() {
  // put drawing code here
strokeWeight(1);
  ellipse(60,60,40,40);//left eye

  ellipse(80,50,12,12);//right eye

  rect(40,100,50,15);//mouth

strokeWeight(6);
point(40,160);//mole

strokeWeight(2);
line(50,130,60,125);//mouth split

//width and height
//console.log("width " + width);
//console.log("height" + height);

triangle(width/2,height/2,width/2 + 10, height/2 +10, width/2 - 10, height/2+10)

arc(300,300,50,50,0,PI);
arc(400,400,50,50,PI+HALF_PI,0);
arc(300,150,50,50,0,TWO_PI);


}//end of draw
var eyeSize = 40;
