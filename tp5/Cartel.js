//tp5
//ganaste - perdiste cartel
class Carteles {
  constructor() {
    this.texto = "";
    this.visible = false;    //si esta true se dibuja el cartel
    this.finJuego = false;   //indica que termino el juego
    
  }

  dibujar() {
    if (this.visible) {
      fill(255);
      textSize(32);
      textAlign(CENTER, CENTER);
      text(this.texto, width / 2, height / 2);
    }
  }

  mostrar(texto) {
    this.texto = texto;
    this.visible = true;
  }

  ocultar() {    //saca el cartel
    this.texto = "";
    this.visible = false;
  }
}
