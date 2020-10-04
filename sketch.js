const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1;
var box2;
var ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);

    ground1 = new Ground(200,390,400,20);

    /*
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }


box1=new  Box();   

    

    
    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
    
    
*/
}

function draw(){
    background(0);
    Engine.update(engine);

    //console.log(ground);
    box1.display();
    box2.display();

    ground1.display();

}

