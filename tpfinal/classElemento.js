class Elemento {
  constructor(x, y,tam, tipo) { 
    this.x = x;
    this.y = y;
    this.tam=tam;
    this.tipo = tipo;
    this. pos= [];
    this.visible=true;
    this.imagen = [];
    this.cargarImagen();
  }

  mostrar() {
    image(this.imagen[this.tipo], this.x, this.y, this.tam, this.tam);
  }

  cargarImagen() {
    for (let i=0; i <10; i++) {
      this.imagen[i] = loadImage("data/elemento"+i+".png");
    }
  }
}
