class Principal {
  constructor() {
    this.juego= new Juego();
    this.pantalla = [];
    this.cargarPantallas();
    this.pantallaActual = 0;
    this.boton=[];
    this.cargarBotones();
  }
  dibujarPantalla() {

    textAlign(CENTER);
    if (this.pantallaActual === 0) {             //Pantalla 0 INICIO (iniciar y creditos)
      this.pantalla[0].dibujar();
      this.boton[0].dibujar(); //inicio
      this.boton[7].dibujar(); //creditos
      textStyle(BOLD);
      
    } else if (this.pantallaActual === 1) {          // PANTALLA 1
      this.pantalla[1].dibujar();
      this.boton[1].dibujar(); //avanzar
      this.boton[2].dibujar(); //retroceder
      
    } else if (this.pantallaActual === 2) {          // PANTALLA 2
      this.pantalla[2].dibujar();
      this.boton[1].dibujar(); //avanzar
      this.boton[2].dibujar(); //retroceder
      
    } else if (this.pantallaActual === 3) {          // PANTALLA 3
      this.pantalla[3].dibujar();
      this.boton[1].dibujar(); //avanzar
      this.boton[2].dibujar(); //retroceder
      
    } else if (this.pantallaActual === 4) {          // PANTALLA 4 //boton jugar
      this.pantalla[4].dibujar();
      this.boton[1].dibujar(); //avanzar
      this.boton[2].dibujar(); //retroceder
      
    } else if (this.pantallaActual === 5) {       //Pantalla JUEGO (si GANA avanza, si PIERDE no avanza) AGREGAR BOTONES Y PANTALLAS
      this.juego.accionarJuego(true);
      this.juego.display();
      if (this.juego.ganaste === true) {       //ganaste
        this.pantallaActual=6;
        this.juego.reiniciar();
      } else if (this.juego.perdiste === true) {       //perdiste
        this.pantallaActual=4;
        this.juego.reiniciar();
      }
    } else if (this.pantallaActual === 6) {       // PANTALLA 5
      this.pantalla[5].dibujar();
      this.boton[1].dibujar(); //avanzar
      
    } else if (this.pantallaActual === 7) {          // PANTALLA 6
      this.pantalla[6].dibujar();
      this.boton[1].dibujar(); //avanzar
      this.boton[2].dibujar(); //retroceder
      
    } else if (this.pantallaActual === 8) {          // PANTALLA 7
      this.pantalla[7].dibujar();
      this.boton[1].dibujar(); //avanzar
      this.boton[2].dibujar(); //retroceder
      fill(255);
      
    } else if (this.pantallaActual === 9) {          // PANTALLA 8 bifurcacion
      this.pantalla[8].dibujar();
      this.boton[3].dibujar(); // contarle
      this.boton[4].dibujar(); // no ccontarle
      fill(255);
      
    } else if (this.pantallaActual === 10) {          // PANTALLA 9 bifurcacion de final original
      this.pantalla[9].dibujar();
      this.boton[1].dibujar(); //avanzar
      this.boton[2].dibujar(); //retroceder
      fill(255);
      
    } else if (this.pantallaActual === 11) {          // PANTALLA 10 final original
      this.pantalla[10].dibujar();
      this.boton[7].dibujar(); //creditos
      this.boton[5].dibujar(); //final alternativo 1
      this.boton[6].dibujar(); //final alternativo 2
      
    } else if (this.pantallaActual === 12) {          // PANTALLA 11 bifurcacion 1
      this.pantalla[11].dibujar();
      this.boton[13].dibujar(); //final en familia
      this.boton[2].dibujar(); //retroceder

      
    } else if (this.pantallaActual === 13) {          // PANTALLA 12 final 2
      this.pantalla[12].dibujar();
      this.boton[7].dibujar(); //creditos
      
    } else if (this.pantallaActual === 14) {          // PANTALLA 13 final alternativo 1
      this.pantalla[13].dibujar();
      this.boton[7].dibujar(); //creditos
      
    } else if (this.pantallaActual === 15) {          // PANTALLA 14 final alternativo 2
      this.pantalla[14].dibujar();
      this.boton[7].dibujar(); //creditos
      
    } else if (this.pantallaActual === 16) {          // PANTALLA 15 creditos
      this.pantalla[15].dibujar();
      this.boton[12].dibujar();  // boton menu
      
    }
  }

  cargarPantallas() {
    this.pantalla[0]= new Pantalla(0, 0, 400, 85, 300, 26);
    for (let i=1; i<16; i++) {
      this.pantalla[i]= new Pantalla(i, i, 400, 130, 150, 11);
    }
  }
  cargarBotones() {
    //parametros(x, y, ancho, alto, numTexto)
    this.boton[0]= new Boton(width/2-50, height/2, 100, 50, 0);//inicio
    this.boton[1]= new Boton(width/1.42, height/1.25, 100, 50, 1);//anvanzar
    this.boton[2]= new Boton(width/8, height/1.25, 100, 50, 2);//retroceder
    this.boton[3]= new Boton(width/1.42, height/2, 100, 50, 3);//contarle a las niñas
    this.boton[4]= new Boton(width/8, height/2, 150, 50, 4);//no contarle a las niñas
    this.boton[5]= new Boton(width/20, height/2, 100, 50, 5); //final alternativo 1
    this.boton[6]= new Boton(width/1.5, height/2, 100, 50, 6);//final alternativo 2
    this.boton[7]= new Boton(width/2-50, height/1.50, 100, 50, 7);//creditos
    this.boton[8]= new Boton(width/1.42, height/1.25, 100, 50, 8);//jugar
    this.boton[9]= new Boton(width/8, height/1.25, 100, 50, 9);//Volver
    this.boton[10]= new Boton(width/8, height/1.25, 100, 50, 10);//Reintentar
    this.boton[11]= new Boton(width/1.42, height/1.25, 100, 50, 11);//Continuar
    this.boton[12]= new Boton(width/2-50, height/1.15-50, 100, 50, 12);//Menu
    this.boton[13]= new Boton(width/1.42, height/1.25, 100, 50, 13);//final en familia
  }

  keyPresionada(mover) {
    if (mover===true) {
      this.teclaPresionada(keyCode);
    }
  }

  teclaPresionada(keyCode) {
    this.juego.teclaPresionada(keyCode) ;
  }

  accionarBoton(posMouseX, posMouseY) {
    if (this.boton[0].detectarBoton(posMouseX, posMouseY) && (this.pantallaActual ===0)) {  //pantalla inicio / INICIO
      this.pantallaActual ++;
    }
    if (this.boton[7].detectarBoton(posMouseX, posMouseY) && this.pantallaActual ===0) {  //pantalla inicio / CREDITOS
      this.pantallaActual = 16;
    }

    //antes del juego
    if (this.boton[1].detectarBoton(posMouseX, posMouseY) && this.pantallaActual > 0 && this.pantallaActual < 5) {
      this.pantallaActual ++;
    }
    if (this.boton[2].detectarBoton(posMouseX, posMouseY) && this.pantallaActual > 0 && this.pantallaActual < 5) {
      this.pantallaActual --;
    }
    //// despues del juego
    if (this.boton[1].detectarBoton(posMouseX, posMouseY) && this.pantallaActual > 5 && this.pantallaActual < 9) {
      this.pantallaActual ++;
    }
    if (this.boton[2].detectarBoton(posMouseX, posMouseY) && this.pantallaActual > 6 && this.pantallaActual < 9) {
      this.pantallaActual --;
    }

    // bifurcacion opcion derecha
    if (this.boton[3].detectarBoton(posMouseX, posMouseY) && this.pantallaActual ===9) {   //opcion 1
      this.pantallaActual = 12;
    }

    if (this.boton[13].detectarBoton(posMouseX, posMouseY) && this.pantallaActual ===12) {   //opcion 1
      this.pantallaActual=13;
    }
    if (this.boton[2].detectarBoton(posMouseX, posMouseY) && this.pantallaActual ===12) {   //opcion 1
      this.pantallaActual =9;
    }

    // bifurcacion opcion izquierda
    if (this.boton[4].detectarBoton(posMouseX, posMouseY) && this.pantallaActual ===9) { //opcion 2
      this.pantallaActual = 10 ;
    }
    if (this.boton[1].detectarBoton(posMouseX, posMouseY) && this.pantallaActual ===10) {   //opcion 2
      this.pantallaActual =11;
    }
    if (this.boton[2].detectarBoton(posMouseX, posMouseY) && this.pantallaActual ===10) {   //opcion 2
      this.pantallaActual =9;
    }

    //finales dirigidos a creditos
    if (this.boton[7].detectarBoton(posMouseX, posMouseY) && (this.pantallaActual ===11||this.pantallaActual===13||this.pantallaActual===14||this.pantallaActual===15)) {
      this.pantallaActual = 16;
    }

    // en final original bifurcacion a finales alternativos
    if (this.boton[5].detectarBoton(posMouseX, posMouseY) && this.pantallaActual ===11) {
      this.pantallaActual =14;
    }
    if (this.boton[6].detectarBoton(posMouseX, posMouseY) && this.pantallaActual ===11) {
      this.pantallaActual =15;
    }
    if (this.boton[12].detectarBoton(posMouseX, posMouseY) && this.pantallaActual ===16) { // VOLVER AL MENU
      this.pantallaActual =0;
    }
  }
}
