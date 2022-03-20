//código do ator
let yAtor = 366;
let xAtor = 100;
let colisao = false;
let pontos = 0;
let vidas = 3;

function mostraAtor() {
  
  image(imagemDoAtor,xAtor, yAtor, 25, 25);
  
}

function movimentaAtor(){
  
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 2;
  }
  
  if  (keyIsDown(DOWN_ARROW)) {
    if(podeSeMover()) {
    yAtor += 2;
     }
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 2;
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 2;
  }
}

function verificaColisao(){
  
  for(let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarro[i], yCarro[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao==true) {
      colidiu();
    }
  }
}

function colidiu () {
  yAtor = 370;
  vidas--;
  somDaColisao.play();
  
}


function incluiPontos(){
  
  text(("Pontos: " + pontos), width / 5, 27.5);
  fill(255,105,180);
  textSize(25);
  textAlign(CENTER);
  textStyle(BOLD);
  text(("Vidas: " + vidas), 350, 27.5);
}

function marcaPonto() {
  if(yAtor <= 10){
    pontos++;
    somDoPonto.play();
    yAtor = 366;
  }
}

function gameOver() {
  if(vidas < 1) {
    fill(255,0,0);
    text("GAME OVER", width/2 , 200);
    textAlign(CENTER);
    xAtor=700;
    yAtor=700;
    somDaTrilha.stop();
  }
}

function podeSeMover() {
  return yAtor < 366;
}



