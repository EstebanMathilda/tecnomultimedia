/*
tpfinal
comision 1
Loreley Joray 77302/9
Mathilda Esteban 93509/6
*/

function setup() {
  createCanvas(500, 500);
  p = new Principal();
}


function draw() {
  background(0);
  p.dibujarPantalla();
}

function mousePressed() {
  p.accionarBoton(mouseX, mouseY);
}

function keyPressed() {
  p.keyPresionada(true);
}

function keyReleased() {
  p.keyPresionada(false);

}
