var canvas;
var music;
var box1,box2,box3,box4; 
var ball;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces



    //create box sprite and give velocity
ball=createSprite(random(10,750),300,20,20);
ball.shapeColor="white";
ball.velocityX=-3;
ball.velocityY=3;

box1=createSprite(100,590,180,20);
box1.shapeColor="red";

box2=createSprite(300,590,180,20);
box2.shapeColor="blue";

box3=createSprite(500,590,180,20);
box3.shapeColor="green";

box4=createSprite(700,590,180,20);
box4.shapeColor="yellow";



}

function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);



if(ball.x<0){
    music.stop();
    ball.velocityX=-3
}
else if(ball.x>800){
    music.stop();
    ball.velocityX=-3
}
if(box1.isTouching(ball)){
    music.stop();
    ball.shapeColor="red";
    ball.bounceOff(box1);

}
else if(box2.isTouching(ball)){
music.stop();
ball.shapeColor="blue";
ball.bounceOff(box2);
}
else if(box3.isTouching(ball)){
    music.stop();
    ball.shapeColor="green";
    ball.bounceOff(box3);
    }
    else if(box4.isTouching(ball)){
        music.stop();
        ball.shapeColor="yellow";
        ball.bounceOff(box4);
        }
        
if(ball.y<0){
    music.stop();
    ball.velocityY=3;
}


drawSprites();
    
}
