var canvas;
var music;
var ground1,ground2,ground3,geound4,ball
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    ground1 = createSprite(0,580,350,30)
    ground1.shapeColor = "red"

    ground2 = createSprite(295,580,200,30)
    ground2.shapeColor = "green"

    ground3 = createSprite(515,580,200,30)
    ground3.shapeColor = "yellow"

    ground4 = createSprite(740,580,200,30)
    ground4.shapeColor = "blue"



    //create box sprite and give velocity
    ball = createSprite(random(20,750),100,40,40)
    ball.shapeColor = "white";
    ball.velocityX =5
    ball.velocityY =10

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

 var edges = createEdgeSprites()
 ball.bounceOff(edges)

 if(ground1.isTouching(ball)&&ball.bounceOff(ground1)){
     ball.shapeColor ="red"
     music.play()
 }
     if(ground2.isTouching(ball)){
        ball.velocityX=0
        ball.velocityY=0
        ball.shapeColor ="green"
        music.stop()
     }
        if(ground3.isTouching(ball)&&ball.bounceOff(ground3)){
            ball.shapeColor ="yellow"
           
        }
            if(ground4.isTouching(ball)&&ball.bounceOff(ground4)){
                ball.shapeColor ="blue"
                
 }
    drawSprites()
    //add condition to check if box touching surface and make it box
    
}
