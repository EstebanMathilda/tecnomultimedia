//tp3
//Mathilda Esteban
//Comision 1
//"Caleidoscopio" de Ray Bradbury

String[] nombresImagenes = {"menu.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image8.jpg", "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg", "image13.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "creditos.jpg"};
PImage[] imagenes = new PImage[nombresImagenes.length];
int indiceActual = 0;

void setup() {
  size(600, 600);
  for (int i = 0; i < imagenes.length; i++) {
    String nombre = nombresImagenes[i];
    imagenes[i] = loadImage(nombre);
  }
}

void draw() {
  image(imagenes[indiceActual], 0, 0, 600, 600);
  botones (indiceActual);
}
  
void mousePressed() {
  // Reinicia si se hace clic
  int resultadoReinicio = reinicio(indiceActual);
  if (resultadoReinicio != -2) {
    indiceActual = resultadoReinicio;
  }

  // Avanza si se hace clic
  int resultadoAvanzar = avanzar(indiceActual);
  if (resultadoAvanzar != -1) {
    indiceActual = resultadoAvanzar;
  }
}
