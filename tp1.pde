//Esteban Mathilda
//tp1 comision 1

PImage eiffel;
PImage notredame;
PImage louvre;
String pantalla;
int cuenta;
int pos, tama;
int posx;
int posy;
int px, py, ancho, alto;
PFont fuentenueva;

void setup () {
  size (640, 480);
  background(255);
  noStroke();
  
  //textos
  fuentenueva = loadFont("HighTower.vlw");
  textFont(fuentenueva);
  pantalla = "inicio";
  cuenta = 0;
  pos = 480;
  posx = 0;
  posy = 0;
  tama = 1;
  
  //imagenes
  eiffel = loadImage("eiffel.jpg");
  notredame = loadImage("notredame.jpg");
  louvre = loadImage("louvre.JPG");
  
  //boton
  px = 30;
  py = 30;
  ancho = 80;
  alto = 30;
  
}

void draw() {
  
  //cambio de imagenes
  if (cuenta <300) {
    image(eiffel, 0, 0, 640, 480);
  } else if (cuenta >=300 && cuenta < 600) {
    image(notredame, 0, 0, 640, 480);
  } else if (cuenta >=600 && cuenta < 1000) {
    image(louvre, 0, 0, 640, 480);
  } 
  
  //condicionales texto
  cuenta++;
  if (pantalla.equals("inicio")) { 
    textAlign(CENTER);
    textSize(25);
    text("Situada en el centro norte de Francia, \nParís es una de las ciudades más visitadas del mundo, \nademás de ser cuna de algunos movimientos vanguardistas. \nEs el destino preferido de los turistas por sus \nfantasticos monumentos como la Torre Eiffel", width/2, pos);
    pos--;
  } else if (pantalla.equals("segundo")) { 
    textSize(tama);
    text("La catedral de Notre Dame es una catedral de culto católico, \nsede de la archidiócesis de París, la capital de Francia. \nEs otro de los monumentos más populares de la capital francesa.", 300, 50);
    if (tama<20) {
      tama++;
    }
  } else if (pantalla.equals("tercero")) { 
    textAlign(CENTER);
    textSize(15);
    text("Por último, Paris tambien se destaca por el Museo del Louvre \nque es el museo nacional de Francia consagrado tanto a las bellas \nartes como a la arqueología y las artes decorativas anteriores al impresionismo.", posx, posy);
    posx++;
    posy++;   
}

  //cambio de texto + boton
  if (cuenta <300) {
    pantalla = "inicio";
  } else if (cuenta >=300 && cuenta < 600) {
    pantalla = "segundo";
  } else if (cuenta >=600 && cuenta < 1000) {
    pantalla = "tercero";
  } else {
    pantalla = "otra"; 
    fill(255);
    rect(px, py, ancho, alto);
    fill(0);
    textSize(15);
    text("reiniciar", 70, 50);
    fill(255);
  }
  
}
void mousePressed() {  
  if(mouseX>px && mouseX<px + ancho && mouseY>py && mouseY<py + alto && pantalla == "otra" && mousePressed == true){
    cuenta = 0;
    pantalla = "inicio";
    pos = 480;
    tama = 0;
    posx = 0;
    posy = 0;
  }
  
}
