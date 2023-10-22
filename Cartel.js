
class Carteles {
  constructor() {
    this.texto = "";
    this.visible = false;
    this.finJuego = false;
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

  ocultar() {
    this.texto = "";
    this.visible = false;
  }
}
