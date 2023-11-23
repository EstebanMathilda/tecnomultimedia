//tp5
class Principal {
  constructor() {
    //pantalla y carga de imagen de instrucciones
    this.pantallaActual = 1;
    this.imagen = loadImage('data/instrucciones.jpg');
    // Astronauta
    this.crearAstronauta();
    // Meteoritos
    this.meteoritos = [];
    this.maxMeteo = 15;
    this.ultFramecount = 0;
    // carteles
    this.carteles = new Carteles(); 
  }

  dibujar() {
    //pantalla de instrucciones
    if (this.pantallaActual === 1) {
    image(this.imagen, 0, 0, width, height); //mostrar la imagen de instrucciones
    this.boton(200, 380, 100, 50, "Jugar", 225, 410);  //boton de jugar
    } else if (this.pantallaActual === 2) {  //lo que muestra si cambia a juego
    //dibuja astronauta
    this.astronauta.dibujar();
    // Dibuja/actualiza meteorito
    if (this.carteles.finJuego === false) {        //si no perdiste el juego...
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
      if (frameCount - this.ultFramecount >= 60) {        //crea nuevos meteoritos cada 60frames pero regulando hasta cuantos se van a crear (15)
        if (this.meteoritos.length < this.maxMeteo) {
          let posy = random(height);
          this.meteoritos.push(new Meteorito(width, posy));
        }
        this.ultFramecount = frameCount;
      }
    } else {
      this.carteles.mostrar("Perdiste");   //si carteles.finjuego = true si se muestra que perdiste
    } if(this.meteoritos.length >= this.maxMeteo){  //si ya pasan los 15 meteritos y no te pegó ganas
      this.carteles.mostrar("Ganaste"); //cartel de que ganas
      this.carteles.finJuego = true;   //termina el juego
    }
    this.carteles.dibujar();
    }
    if(this.carteles.finJuego === true){   //si termina el juego muestra el boton de reinicio
    this.boton(350, 400, 100, 50, 'Reiniciar', 400, 430);
  }
  }

  crearAstronauta() {
    this.astronauta = new Astronauta(80, 240, 17, 30);
  }
  
  boton(rectx, recty, rectAncho, rectAlto, texto, tx, ty) {    //boton para jugar y reinicio
    this.rectx = rectx;
    this.recty = recty;
    this.rectAncho = rectAncho;
    this.rectAlto = rectAlto;
    this.texto = texto;
    this.tx = tx;
    this.ty = ty;
   
   fill(255);
   rect(rectx, recty, rectAncho, rectAlto, 10);
   
   fill(0);
   textSize(20);
   text(this.texto, this.tx , this.ty);
  }
  
  zonaMouse(x1, x2, y1, y2) {   //metodo q detecta en que zona esta el mouse
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
  return (mouseX > this.x1 && mouseX < this.x2 && mouseY > this.y1 && mouseY < this.y2)
}

  tecla() {            //metodo que llama a metodo tecla de clase astronauta que indica como se mueve
    this.astronauta.tecla();
  }
}
