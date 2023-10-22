//tp5 - Mathilda Esteban - Comision 1 - Aventura grafica de tp3: 'Caleidoscopio' de Ray Bradbury

/*Instrucciones:
Eres un astronauta que quedó extraviado en el espacio, debes esquivar los meteoritos utilizando las teclas 'W' y 'S' para ganar, si un meteorito te choca pierdes el juego, y si sobrevives a todos ganas
*Si pierdes haciendo click en la pantalla reinicias el juego, si ganas tambien podes reiniciarlo haciendo click en la pantalla*/

let juego;

function setup() {
  createCanvas(500, 500);
  juego = new Principal();
}

function draw() {
  background(10, 0, 70);
  juego.dibujar();
  juego.tecla();
}

function mousePressed() {
  if (juego.carteles.finJuego || juego.meteoritos.length === juego.maxMeteo) {        //reinica el juego al perder y al ganar
    // reinicia el juego si perdes o si ganas
    juego.carteles.finJuego = false;
    juego.meteoritos = [];
    juego.crearAstronauta();
    juego.carteles.ocultar();
  }
}
