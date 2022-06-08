const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;   

//  AGREGAR VARIABLES PARA backgroundImg Y towerImage
var backgroundImg,towerImage;

//  DECLARAR VARIABLES PARA canvas, angle, tower, ground, cannon
var canvas, angle, tower, ground, cannon;

//  DECLARAR VARIABLE PARA score E INICIALIZARLA
var score = 0;

function preload() {
  //  CARGAR IMAGEN EN backgroundImg
 backgroundImg = loadImage("./assets/background.gif");

  //  CARGAR IMAGEN EN towerImage
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  //  DECLARAR VARIABLE options COMO JSON Y AGREGARLE PROPIEDAD PARA SER ESTÁTICO
 var options = {
   isStatic : true
 };

 //  INICIALIZAR ground Y tower COMO Bodies.rectangle, Y AGREGARLOS AL MUNDO
ground = Bodies.rectangle(0,height-1,width*2,1,options);
World.add(world,ground);

tower = Bodies.rectangle(160,350,160,310,options);
World.add(world,tower);

  //  INICIALIZAR cannon COMO new Cannon
  cannon = new Cannon(180, 110, 130, 100, angle);


}

function draw() {
  image(backgroundImg,0,0,width,height); //  CAMBIAR POR IMAGEN
 
  Engine.update(engine);
  //  CREAR EL SUELO COMO UN RECTÁNGULO
  rect(ground.position.x,ground.position.y,width*2,1);

  //  DIBUJAR RECTÁNGULO DESDE EL CENTRO, PARA LA TORRE ENTRE push y pop
 push();
imageMode(CENTER);
image(towerImage,tower.position.x,tower.position.y,160,310);

 pop();

  //  DESPLEGAR cannon
  cannon.display();
}
