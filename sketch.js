const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    
    box1 = new Box(700,320,50,50);
    box2 = new Box(900,320,50,50);
    pig1 = new Pig (800,320);
    log1 = new Log (800,250,250,PI/2);
    
    box3 = new Box(700,230,50,50);
    box4 = new Box(900,230,50,50);
    pig2 = new Pig (800,230);
    log2 = new Log (800,200,250,PI/2);

    box5 = new Box(800,170,50,50);
    log3 = new Log(750,150,100,PI/7);
    log4 = new Log(850,150,100,-PI/7);

    bird1 = new Bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    ground.display();
    bird1.display();
}