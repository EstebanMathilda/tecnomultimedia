
class Meteorito {
  constructor(posx, posy) {
    this.posx = posx;
    this.posy = posy;
    this.vel = 5;
    this.sucolor = color(128);
    this.desaparecer = false;
  }

  dibujar() {
    fill(this.sucolor);
    ellipse(this.posx, this.posy, 20, 20);
  }

  movimiento() {
    this.posx -= this.vel;
  }

  choque(astronauta) {                            //variables que indican la mitad de ancho y alto del astronauta
    let mitadAncho = astronauta.ancho / 2;
    let mitadAlto = astronauta.alto / 2;
    let centrox = this.posx;                      //variables que indican la mitad de ancho y alto de los meteoritos
    let centroy = this.posy;

    if (
      centrox + 15 > astronauta.posx - mitadAncho &&        //aca se calcula si desde cada lado del meteorito toca los bordes del astronauta
      centrox - 15 < astronauta.posx + mitadAncho &&
      centroy + 15 > astronauta.posy - mitadAlto &&
      centroy - 15 < astronauta.posy + mitadAlto
    ) {
      return true;
    } else {
      return false;
    }
  }
}
