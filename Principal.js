
class Principal {
  constructor() {
    // Astronauta
    this.crearAstronauta();
    // Meteoritos
    this.meteoritos = [];
    this.maxMeteo = 10;
    this.ultFramecount = 0;
    // Perdiste
    this.carteles = new Carteles(); 
  }

  dibujar() {
    //dibuja astronauta
    this.astronauta.dibujar();
    // Dibuja/actualiza meteorito
    if (!this.carteles.finJuego) {
      for (let i = this.meteoritos.length - 1; i >= 0; i--) {
        if (!this.meteoritos[i].desaparecer) {
          this.meteoritos[i].dibujar();
          this.meteoritos[i].movimiento();

          if (this.meteoritos[i].choque(this.astronauta)) {
            this.meteoritos[i].desaparecer = true;
            this.carteles.mostrar("Perdiste");
            this.carteles.finJuego = true;
          }
        }
      }

      let actualFramecount = frameCount;

      if (actualFramecount - this.ultFramecount >= 60) {        //crea nuevos meteoritos pero regulando hasta cuantos se vana crear
        if (this.meteoritos.length < this.maxMeteo) {
          let posy = random(height);
          this.meteoritos.push(new Meteorito(width, posy));
        }
        this.ultFramecount = actualFramecount;
      }
    } else {
      this.carteles.mostrar("Perdiste");
    }

    this.carteles.dibujar();
  }

  crearAstronauta() {
    this.astronauta = new Astronauta(80, 240, 17, 30);
  }

  tecla() {            //metodo que llama a metodo tecla de clase astronauta que indica como se mueve
    this.astronauta.tecla();
  }
}
