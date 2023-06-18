//Esteban Mathilda
//tp2 comision 1
//https://youtu.be/HAj4DeqTSeQ

PImage arteop;
color colorA = color(255);
color colorB = color(0);

void setup() {
  size(800, 400);
  arteop = loadImage("arte op.jpeg");
  image(arteop, 0, 0, 400, 400);
  
}

void draw() {
  dibujoptico(colorA, colorB);
  if(tocar()){
   colorB = color(random(255), random(255), random(255));
   colorA = color(0, random(255), random(255));
  }
  if(reiniciar()){
    colorA = color(255);
    colorB = color(0);
  }
  
  //cartel reinicio
  fill(255);
  rect(410, 360, 170, 30);
  fill(0);
  text("presionar R para reiniciar", 430, 380);
}
