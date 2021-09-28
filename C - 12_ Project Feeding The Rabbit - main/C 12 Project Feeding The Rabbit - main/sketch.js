//creating the variables

var garden,gardenImg;
var rabbit,rabbitImg;
var apples,applesImg;
var orangeLeaf,orangeLeafImg;
var redLeaf,redLeafImg;
var edges;

function preload()
{
  //pre loading the garden image, rabbit image, apples image, orange leaf image & red leaf image

  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  redLeafImg = loadImage("redImage.png");
}

function setup()
 {
  //creating the canvas

  createCanvas(400,400);

  //making the edges as sprites

  edges = createEdgeSprites();
    
  // creating the garden

  garden = createSprite(200,200);
  garden.addImage("garden",gardenImg);

  //creating the rabbit

  rabbit = createSprite(180,250,30,30);
  rabbit.addImage("sitting",rabbitImg);
  rabbit.scale =0.09;
 }

function draw()
 {
  //assigning the background color

  background(0);
  
  //colliding the rabbit with edges

  rabbit.collide(edges);

  // making the rabbit move with the mouse

  rabbit.x = mouseX;

  //resetting the rabbit's X position

  if((rabbit.x>390)||(rabbit.x<30))
  {
    rabbit.x = 180;
  }

 //calling apples, orange leaf & red leaf

 if(World.frameCount % 80 == 0)
 {
   var select_fruits = Math.round(random(1,3))

   if(select_fruits == 1)
   {
     spawnApples();
   }

   else if(select_fruits == 2)
   {
    spawnorangeLeaf ();
   }

   else
   {
     spawnredLeaf ();
   }
 }

  drawSprites();
 }

 //function to create the apples

 function spawnApples()
 {
   apples = createSprite(Math.round(random(20,160)),50,30,30);
   apples.addImage("falling",applesImg);
   apples.scale = 0.1
   apples.velocityY = 5;
   apples.lifetime = 80;
}

  //function to create the orange leaves

  function spawnorangeLeaf()
  {
    orangeLeaf = createSprite(Math.round(random(300,385)),50,30,30);
    orangeLeaf.addImage("falling",orangeLeafImg); 
    orangeLeaf.scale = 0.1
    orangeLeaf.velocityY = 4;
    orangeLeaf.lifetime = 100;
  }

   //function to create the red leaf

  function spawnredLeaf()
 {
    redLeaf = createSprite(Math.round(random(190,280)),50,30,30);
    redLeaf.addImage("falling",redLeafImg);
    redLeaf.scale = 0.1
    redLeaf.velocityY = 8;
    redLeaf.lifetime = 50;
  }