
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinkos=[]
var divisions=[]
var particles=[]
//var divisionHeight=300;
var gr1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
gr1=new Plo(400,690,800,10)
	//Create the Bodies Here.
for(var j =20;j<900;j=j+90){

	plinkos.push(new Pp(j,75))
}
for(var j =30;j<890;j=j+70){

	plinkos.push(new Pp(j,145))
}
for(var j =40;j<880;j=j+80){

	plinkos.push(new Pp(j,215))
}
for(var j =40;j<830;j=j+60){

	plinkos.push(new Pp(j,285))
}
for(var j =40;j<800;j=j+80){

	plinkos.push(new Pp(j,355))
}
 





for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Plo(k,625, 10, 300));
   }


   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
gr1.display()  



for(var j=0;j<plinkos.length;j++){ 
	plinkos[j].display();
	}
	for(var p=0;p<particles.length;p++){ 
	particles[p].display();
	}
	if(frameCount%60===0){
     particles.push(new Particle(random(10,900), 10,10));
    
   }
 

 for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  drawSprites();
 
}



