class Juego {
  constructor() {
    this.per = new Personaje(width/8, height/8);
    this.pantalla = new Pantalla();
    this.elem = [];
    this.mueble = [];
    this.tiempo=60;
    this.encontrados=0;
    this.crearMuebles();
    this.cargarElementos();
    this.iniciar=false;
    this.ganaste=false;
    this.perdiste=false;
  }

  display() {

    this.iniciarJuego();//controlar Tiempo
    if (this.iniciar) {
      this.inGame();
    }

    if (this.tiempo===0) {
      this.perdiste=true;
    }
    if (this.encontrados===10) {
      this.ganaste=true;
    }
  }
  accionarJuego(comenzar) {
    this.iniciar=comenzar;
  }
  inicio() {
    this.pantalla.pantallaInicio();
  }

  finalBueno() {
    this.pantalla.pantallaGanaste();
    this.reiniciar();
  }

  finalMalo() {
    this.pantalla.pantallaPerdiste();
    this.reiniciar();
  }

  inGame() {
    this.iniciarJuego();
    this.recolectando();
    this.objetosEncontrado();
    this.pantalla.dibujarSuelo();

    for (let i=0; i<12; i++) {
      this.mueble[i].mostrar();
    }
    for (let i=0; i<10; i++) {
      if (this.elem[i].visible) {
        this.elem[i].mostrar();
      }
    }

    this.per.mostrar();
    textAlign(CORNER);
    textSize(15);
    fill(255);
    text('Tiempo: '+this.tiempo, 50, 50);
    text('Recolectados: '+ this.encontrados, 400, 50);
    fill(0, 100, 100);
    text("¡Desbloquea la historia encontrando los elementos!", width / 2+2, height / 20+2);
    textSize(10);
    text("Presiona las flechas para mover al jugador y asi recolectar los elementos antes que acabe el tiempo", width / 2+2, height / 1.09+2);
    textSize(15);
    fill(255);
    text("¡Desbloquea la historia encontrando los elementos!", width / 2, height / 20);
    textSize(10);
    text("Presiona las flechas para mover al jugador y asi recolectar los elementos antes que acabe el tiempo", width / 2, height / 1.09);
  }



  iniciarJuego() {
    if (this.iniciar && frameCount%60===0 && this.tiempo>0) {//presiona una tecla o click que convierta en true
      this.tiempo--;
    }
  }

  reiniciar() {
    //  this.inicio=false;
    this.pantalla.dibujarSuelo();
    this.iniciar=false;
    this.ganaste=false;
    this.perdiste=false;
    this.tiempo=60;
    this.encontrados=0;
    this.crearMuebles();
    this.cargarElementos();
    this.per = new Personaje(width/8, height/8);
  }



  puedeMover(px, py) {
    for (let i = 0; i < 10; i++) {
      if (this.per.colisionMueble(px, py, this.mueble[i].x, this.mueble[i].y, this.mueble[i].ancho, this.mueble[i].alto)) {
        return false; // Hay colisión, no permitir movimiento en esta dirección
      }
    }
    return true; // No hay colisión, permitir movimiento en esta dirección
  }

  recolectando() {
    for (let i=0; i<10; i++) {
      if (this.recolecta( this.per.x, this.per.y, this.per.tam, this.elem[i].x, this.elem[i].y, this.elem[i].tam)) {
        this.elem[i].visible = false;
      }
    }
  }

  recolecta(px, py, pTam, ex, ey, eTam) {
    return px+pTam>ex && py+pTam>ey && px<ex+eTam && py<ey+eTam ;
  }

  objetosEncontrado() {
    let encontre = 0;
    for (let i=0; i<10; i++) {
      if (!this.elem[i].visible) {
        encontre++;
      }
    }
    this.encontrados = encontre;
  }

  cargarElementos() {
    this.elem[0] = new Elemento(random(10, 400), 250, 25, 0);
    this.elem[1] = new Elemento(random(10, 45), random(40, 450), 25, 1);
    this.elem[2] = new Elemento(random(10, 450), random(10, 70), 25, 2);
    this.elem[3] = new Elemento(random(100, 320), random(320, 370), 25, 3);
    this.elem[4] = new Elemento(random(10, 350), random(200, 300), 25, 4);
    this.elem[5] = new Elemento(random(10, 50), random(50, 470), 25, 5);
    this.elem[6] = new Elemento(random(300, 350), random(250, 320), 25, 6);
    this.elem[7] = new Elemento(random(50, 100), random(170, 350), 25, 7);
    this.elem[8] = new Elemento(random(250, 300), random(10, 250), 25, 8);
    this.elem[9] = new Elemento(random(400, 450), random(10, 200), 25, 9);
  }

  crearMuebles() {
    this.mueble[0] = new Mueble(400, 250, 50, 70, 0);
    this.mueble[1] = new Mueble(150, 150, 80, 60, 1);
    this.mueble[2] = new Mueble(50, 400, 80, 60, 2);
    this.mueble[3] = new Mueble(250, 300, 50, 40, 3);
    this.mueble[4] = new Mueble(400, 450, 60, 40, 4);
    this.mueble[5] = new Mueble(350, 350, 50, 70, 5);
    this.mueble[6] = new Mueble(100, 150, 25, 50, 6);
    this.mueble[7] = new Mueble(350, 100, 50, 40, 7);
    this.mueble[8] = new Mueble(70, 350, 40, 40, 8);
    this.mueble[9] = new Mueble(350, 150, 50, 40, 9);
    this.mueble[10] = new Mueble(60, 0, 90, 40, 10);
    this.mueble[11] = new Mueble(0, 0, 60, 40, 11);
  }
  teclaPresionada(keyCode) {
    let posX = this.per.x;
    let posY = this.per.y;

    if (keyCode === UP_ARROW) {
      posY = this.per.y - this.per.alto * 0.5;
    } else if (keyCode === DOWN_ARROW) {
      posY = this.per.y + this.per.alto * 0.5;
    } else if (keyCode === RIGHT_ARROW) {
      posX = this.per.x + this.per.ancho * 0.5;
    } else if (keyCode === LEFT_ARROW) {
      posX = this.per.x - this.per.ancho * 0.5;
    }

    if (this.puedeMover(posX, posY)) {
      this.per.teclaPresionada(keyCode);
    }
  }
}
