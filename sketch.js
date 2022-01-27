var torreImg, torre;
var portaImg, porta, grupoPorta;
var climberImg, climber, grupoClimber;
var fantasma, fantasmaImg;
var grupoBlocoInvisivel, blocoInvisivel;
var estadoJogo = "play"
var somAssustador;

function preload() {
    torreImg = loadImage("tower.png");
    portaImg = loadImage("door.png");
    climberImg = loadImage("climber.png");
    fantasmaImg = loadImage("ghost-standing.png");
    somAssustador = loadSound("spooky.wav");

    grupoClimber = new Group();
    grupoPorta = new Group();
    grupoBlocoInvisivel = new Group();

}

function setup() {
    createCanvas(600, 600);
    torre = createSprite(300, 300);
    torre.addImage("torre", torreImg);
    torre.velocityY = 1;

    somAssustador.loop();
    fantasma = createSprite(200, 200, 50, 50);
    fantasma.addImage(fantasmaImg);
    fantasma.scale = 0.3;

    edges = createEdgeSprites();
}

function draw() {
    background(200);

    if (estadoJogo === "play") {





        gerarPortas();
        drawSprites();


    }
    if (estadoJogo === "end") {
        background(0);
        // ghost.destroy();
        fill("yellow")
        textSize(70)
        text("VOCÊ PERDEU", 30, 200);

    }

}


function gerarPortas() {

    if (frameCount % === 0) {
        porta = createSprite(200, -50);
        porta.addImage(portaImg);

        porta.x =
            porta.velocityY = ;
        porta.lifetime = ;

        climber = createSprite(posicaoX, 10);
        climber.addImage(climberImg);
        climber.velocityY = ;
        climber.lifetime = ;
        fantasma.depth = climber.depth + 1;

        blocoInvisivel = createSprite(, 15, , 2);
        blocoInvisivel. = ;



        blocoInvisivel. = false;
        blocoInvisivel.debug = true;

        grupoBlocoInvisivel.add(blocoInvisivel);


    }


}