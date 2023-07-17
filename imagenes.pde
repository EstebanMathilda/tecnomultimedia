//funcion para avanzar en la historia
int avanzar(int indice) {
  //botones a y b 1
  if (indice == 2) {
    int x= 280;
    int y1= 200;
    int y2= 400;
    int tam= 50;
    
    if (mouseX > x && mouseX < x + tam && mouseY > y1 && mouseY < y1 + tam)
      return 3;
    if (mouseX > x && mouseX < x + tam && mouseY > y2 && mouseY < y2 + tam)
      return 10;
    return -1;
    //botones a y b 2
  } else if (indice == 4) {
    int x= 280;
    int y1= 200;
    int y2= 400;
    int tam= 50;
    
    if (mouseX > x && mouseX < x + tam && mouseY > y1 && mouseY < y1 + tam)
      return 5;
    if (mouseX > x && mouseX < x + tam && mouseY > y2 && mouseY < y2 + tam)
      return 6;
    return -1;
  } else if (indice == 13) {
    return -1;
    //finales posibles
  } else if(indice== 5 || indice==9 || indice== 12){ 
    return -1;
    //botones menu
  } else if( indice==0){
    int x= 200;
    int y1= 200;
    int y2= 400;
    int tam = 60;
    
    if (mouseX > x && mouseX < x + x && mouseY > y1 && mouseY < y1 + tam)
      return 1;
    if (mouseX > x && mouseX < x + x && mouseY > y2 && mouseY < y2 + tam)
      return 13;
     return -1;
     //Que avance +1 en el array
  } else {
    return indice + 1;
  } 
}
