class Personaje {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alto=50;
    this.ancho=35;
    this.dire=0;
    this.tam=50;
    this.imagen=[];
    this.cargarImagen();
  }

  mostrar() {
    image(this.imagen[this.dire], this.x, this.y, this.ancho, this.alto);
  }

  cargarImagen() {
    for (let i=0; i <4; i++) {
      this.imagen[i] = loadImage("data/per"+i+".png");
    }
  }

  teclaPresionada(keyCode) {
 
      if (keyCode===UP_ARROW && this.y>0) {
        this.moverArriba();
      } else  if (keyCode===DOWN_ARROW && this.y+this.tam*1.5<height) {
        this.moverAbajo();
      } else  if (keyCode===RIGHT_ARROW && this.x+this.tam*1.5<width) {
        this.moverDerecha();
      } else  if (keyCode===LEFT_ARROW &&  this.x>0) {
        this.moverIzquierda();
      }
    }
  
  colisionMueble(px, py, mx, my, mAncho, mAlto) {
    return ((px + this.ancho > mx) && (py + this.alto > my) && (px < mx + mAncho) && (py < my + mAlto));
  }

  moverArriba() {
    this.y-=this.alto * 0.5;
    this.dire=0;
  }

  moverDerecha() {
    this.x+=this.ancho * 0.5;
    this.dire=1;
  }

  moverAbajo() {
    this.y+=this.alto * 0.5;
    this.dire=3;
  }

  moverIzquierda() {
    this.x-=this.ancho * 0.5;
    this.dire=2
  }
}
