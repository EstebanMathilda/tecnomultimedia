/*tp5
Mathilda Esteban 93509/6
Comision 1
Aventura grafica de tp3: 'Caleidoscopio' de Ray Bradbury
Enlace video explicativo: https://youtu.be/NkILYc9QzJc
*/

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
  if (juego.pantallaActual === 1) {
    // si se clickea en jugar
    if (juego.zonaMouse(200, 300, 380, 430)) {
      juego.pantallaActual = 2; //cambia a pantalla de juego
    }
  }
  if (juego.pantallaActual === 2) {
  if (juego.carteles.finJuego || juego.meteoritos.length === juego.maxMeteo) {      //reinica el juego al perder y al ganar
    if(juego.zonaMouse(350, 450, 400, 450)){  //se reinicia si tocas el boton de reinicio
    juego.pantallaActual = 1;
    juego.carteles.finJuego = false;
    juego.meteoritos = [];
    juego.crearAstronauta();
    juego.carteles.ocultar();
  }
  }
}
}
