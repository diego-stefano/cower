//código do carro

let velocidadeCarro = [2,3,2.5,3.5,4,5];
let xCarro = [440, 440, 440, 500, 440, 440];
let yCarro = [40, 100, 155, 210, 265, 320];
let comprimentoCarro = 50;
let alturaCarro = 30;

function mostraCarro() {
  
  for (let i = 0; i < imagemCarros.length; i++) {
    
    image(imagemCarros[i], xCarro[i], yCarro[i], comprimentoCarro, alturaCarro);
    
  }

}

function movimentaCarro() {
  
  for (let i = 0; i < xCarro.length; i++) {
    
    xCarro[i] -= velocidadeCarro[i];
  }
  
}
  
 
function retornaCarroProInicio() {
  
  for (let i = 0; i < xCarro.length; i++) {
    if (passouTodaATela(xCarro[i])) {
     xCarro[i] = 600;
   }
    
  }

}
  
function passouTodaATela(xCarro) {
  return xCarro < -50;
}

