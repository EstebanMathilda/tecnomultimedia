class Mueble {
  constructor(x, y, ancho, alto,tipo) {
    this.tipo=tipo;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.imagen =[];
    this.cargarImagen();
  }

  mostrar() {
   image(this.imagen[this.tipo], this.x, this.y, this.ancho, this.alto);
  }
  cargarImagen() {
    for (let i=0; i <12; i++) {
      this.imagen[i] = loadImage("data/mueble"+i+".png");
    }
  }
}
