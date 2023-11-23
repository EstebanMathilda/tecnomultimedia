//tp5
class Astronauta {
  constructor(posx, posy, ancho, alto) {
    this.posx = posx;
    this.posy = posy;
    this.ancho = ancho;
    this.alto = alto;
  }

  dibujar() {
    fill(255);
    rect(this.posx, this.posy, this.ancho, this.alto);
  }

  tecla() {
    if (keyIsDown(87)) {        //(letra W) si esta presionada se mueve para arriba
      if (this.posy > 10) {     //limita el movimiento que no sea fuera de la pantalla
      this.moverArriba();      //metodo que indica el comportamiento
      }
    } else if (keyIsDown(83)) {      //(letra S) si esta presionada se mueve para abajo
      if (this.posy < 460){
      this.moverAbajo();    
    }
  }
  }

  moverArriba() {
    this.posy -= 10;
  }

  moverAbajo() {
    this.posy += 10;
  }
}
