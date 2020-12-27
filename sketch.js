const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var topBord,rightBord,leftBord,bottomBord;
var ground;

var particles= [];
var plinkos= [];
var divisions= [];

var divisionHeight=300;
var divisionsVar;

function setup() {
  createCanvas(700,650);
  engine = Engine.create();
  world = engine.world;

 

ground=new Ground(400,650,1000,10);

     for (var j = 50; j <=width; j+=50){ 
       plinkos.push(new Plinko(j,75));
     }
     for (var j = 50/2; j <=width-10; j+=50){ 
       plinkos.push(new Plinko(j,175));
     } 
     for (var j = 75-25; j <=width; j+=50){ 
       plinkos.push(new Plinko(j,275));
     }
     for (var j = 50-25; j <=width-10; j+=50){ 
       plinkos.push(new Plinko(j,375)); 
     }


  for (var k = 0; k <=width; k += 80) {
    divisions.push(new Divisions(k, height-divisionHeight/8, 10, divisionHeight));
  }
  }


function draw() {
  background(0);
  Engine.update(engine);
 
  // ground.display(); 
  //plinkos.display();
  drawSprites();
  for (var i = 0; i < plinkos.length; i++){ 
    plinkos[i].display(); 
  }
  for (var s = 0; s < divisions.length; s++) {
     divisions[s].display(); 
    }
   if(frameCount%60===0){ 
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
   }
      for (var j = 0; j < particles.length; j++) {
         particles[j].display();
      } 
      for (var k = 0; k < divisions.length; k++) { 
         divisions[k].display();
      } 
    ground.display();

}
