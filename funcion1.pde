void dibujoptico(color color1, color color2){
  
  int cantidad = 4;
  int tam = 100;
  
//cuadrados
for (int x=4; x<width; x++){
  for (int y=0; y<cantidad; y++){
    if((x+y)%2==0) {
      fill(color1);
    } else{
      fill(color2);
    }
    rect(x*tam, y*tam, tam, tam);
  }
  }
  
//rombos
for (int x=4; x<width; x++){
  for (int y=0; y<cantidad; y++){
    if((x+y)%2==0) {
      fill(color2);
    } else{
      fill(color1);
    }
    quad(x*tam+tam/2, y*tam, x*tam+tam, y*tam+tam/2, x*tam+tam/2, y*tam+tam, x*tam, y*tam+tam/2);
  }
  }
}
