function setup() {
  // put setup code here
  createCanvas(500,500);
  background(0,255,0);
}

function draw() {
  // put drawing code here
strokeWeight(1);
  ellipse(50,200,40,40);//left eye

  ellipse(150,200,40,40);//right eye

  rect(60,240,60,60);//mouth

strokeWeight(5);
point(100,250);//mole

strokeWeight(1);
line(130,220,200,120);//mouth split

//width and height
//console.log("width " + width);
//console.log("height" + height);


arc(90,280,50,50,0,PI);
arc(40,40,50,50,PI+HALF_PI,0);
arc(50,200,15,15,0,TWO_PI);


}//end of draw
var eyeSize = 40;
