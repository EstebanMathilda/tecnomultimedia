//funcion para visualización de los botones
void botones(int indice) {
  //botones del inicio
  if(indice==0){
    fill(255);
    noStroke();
    rect(200, 200, 200, 60, 20);
    rect(200, 400, 200, 60, 20);
    fill(0);
    textSize(30);
    text("Iniciar", 265, 240);
    text("Créditos", 250, 440);
  }
  //boton de volver
  if(indice == 5 || indice == 12 || indice == 13 || indice == 9){
   fill(255);
   noStroke();
   rect(500, 550, 100, 50, 15);
   fill(0);
   textSize(20);
   text("Volver", 525, 580);
  }
  //botones de A y B
  if (indice == 2 || indice == 4) {
    int x= 280;
    int y1= 200;
    int y2= 400;
    int tam= 50;
    //botones
    fill(255);
    stroke(0);
    rect(x, y1, tam, tam, 10);
    rect(x, y2, tam, tam, 10);
    
    fill(0);
    text("A", 297, 235);
    text("B", 297, 435);  
}
//texto creditos
  if(indice == 13){
    fill(255);
    noStroke();
    rect(250, 50, 100, 60, 20);
    fill(0);
    textSize(20);
    text("Créditos", 265, 85);
    
    fill(255);
    noStroke();
    rect(100, 150, 400, 300, 20);
    fill(0);
    textSize(27);
    text("Director:\n Mathilda Esteban\n Artista:\n BlueWillow AI\n Programador:\n Mathilda Esteban", 140, 200);
  }
    
}
