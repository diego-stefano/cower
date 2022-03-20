//imagens e sons do jogo

let imagemCarros;
let imagemDaEstrada;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemDoAtor;
let somDaColisao;
let somDoPonto;
let somDaTrilha;


function preload() {
  
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  
  
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro2, imagemCarro3, imagemCarro1];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  somDaColisao = loadSound("sons/colidiu.mp3");
  

}

