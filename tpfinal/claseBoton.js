class Boton {
  constructor(x, y, ancho, alto, numTexto) {
    this.numTexto = numTexto;
    this.x = x;
    this.y=y;
    this.ancho=ancho;
    this.alto=alto;
    this.estado=0;
    this.texto=[];
    this.cargarTexto();
    this.colorBoton=255;
  }


  dibujar() {
    noStroke();
    fill(this.colorBoton);
    rect(this.x, this.y, this.ancho, this.alto, 3);
    fill(0);
    textAlign(CENTER);
    textSize(10);
    text(this.texto[this.numTexto], this.x+this.ancho/2, this.y+this.alto/1.8);
  }

  cargarTexto() {
    this.texto[0]="iniciar";
    this.texto[1]="Avanzar";
    this.texto[2]="Retroceder";
    this.texto[3]="Contarle a las niñas";
    this.texto[4]="No contarles nada a las niñas";
    this.texto[5]="Final Alternativo 1";
    this.texto[6]="Final Alternativo 2";
    this.texto[7]="Créditos";
    this.texto[8]="Jugar";
    this.texto[9]="Volver";
    this.texto[10]="Reintentar";
    this.texto[11]="Continuar";
    this.texto[12]="Menú";
    this.texto[13]="Dormir en Familia";
  }

  detectarBoton(mousePosX, mousePosY) {
    return mousePosX>this.x && mousePosY>this.y && mousePosX<this.x+this.ancho && mousePosY<this.y+this.alto;
  }
}
