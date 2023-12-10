class Pantalla {
  constructor(numPantalla, numText, anchorect, altorect, transp, tamtext) {

    this.x =0;
    this.y = 0;
    this.numPantalla = numPantalla;
     this.numText = numText;
    //rect
    this.anchorect = anchorect;
    this.altorect= altorect;
    this.transp= transp;

    //texto
    this.tamtext = tamtext;

    this.dialogos=[];
    this.imagen=[];
    this.cargarTexto();
    this.cargarImagenes();
  }

  dibujar() {
    image(this.imagen[this.numPantalla], 0, 0, 500, 500);
    fill(0, 50, 100, this.transp);
    rect(50, 50, this.anchorect, this.altorect, 30);
    fill(255);
    textSize(this.tamtext);
    text(this.dialogos[this.numText], width/6, height/8, width/1.5, height/4);
  }
  cargarImagenes() {
    //arreglo de imagenes para pantallas
    for (let i=0; i < 16; i++) {
      this.imagen[i]= loadImage("data/escena"+i+".png");
    }
    this.imagen[16] = loadImage("data/fondo0.png");
    this.imagen[17] = loadImage("data/fondo1.png");
    this.imagen[18] = loadImage("data/suelo.png");
  }


  cargarTexto() {
    this.dialogos[0]="La última noche del mundo";
    this.dialogos[1]= "¿Qué harías si supieras que esta es la última noche del mundo?\n -¿Qué haría? ¿Lo dices en serio?\n -Sí, en serio.\n -No lo sé. Nunca lo habia pensado.";
    this.dialogos[2]= "Soñé que todo iba a terminar. Uno voz me lo decia. Una voz irreconocible, pero una voz de todos modos. Y me decía que todo iba a detenerse en la Tierra";
    this.dialogos[3]= "Fui a la oficina y a media tarde sorprendí a Stan Willis mirando por la ventana, y le pregunté: \n\"¿Qué piensas, Stan?\", y él me dijo: ''Tuve un sueño anoche''. Antes de que me lo contara yo ya sabía qué sueño era ese. Podía habérselo dicho. Pero dejé que me lo contara.\n -¿Era el mismo sueño? \n -Idéntico. Le dije a Stan que yo había soñado lo mismo. No pareció sorprenderse.";
    this.dialogos[4]= "-¿Y todos habían soñado? \n -Todos. El mismo sueño, exactamente.\n -¿Crees que será cierto?\n -Sí, nunca estuve más seguro.";
    this.dialogos[5]= "La mujer asintió.\n -No quise decirte nada. Fue anoche. Y hoy las vecinas hablaban de eso entre ellas. Todas soñaron lo mismo. Pensé que era solo una coincidencia-la mujer levantó de la mesa el diario de la tarde-.\n Los periódicos no dicen nada.\n -Todo el mundo lo sabe. No es necesario";
    this.dialogos[6]= "-Claro, eso es; pues si no estaríamos haciéndolo. Me imagino que hoy, por primera vez en la historia del mundo, todos saben qué van a hacer de noche.\n -Me pregunto, sin embargo, qué harán los otros, esta tarde, y durante las próximas horas.\n -Ir al teatro, escuchar la radio, mirar la televisión, jugar a las cartas, acostar a los niños, acostarse. Como siempre.";
    this.dialogos[7]= "-¿Por qué crees que será esta noche?\n -Porque sí.\n -¿Por qué no alguna otra noche del siglo pasado, o de hace cinco siglos o diez?\n -Quizá porque nunca fue 19 de octubre de 2069, y ahora sí. Quizá porque esa fecha significa más que ninguna otra. Quizá porque este año las cosas son como son, en todo el mundo, y por eso es el fin.\n";
    this.dialogos[8]= "A las ocho y media acostaron a las niñas y les dieron el beso de buenas noches\n -¿Lo sabrán también las chicas?\n -No, naturalmente que no.";
    this.dialogos[9]= "-Nos hemos llevado bien, después de todo -dijo la mujer.\n -¿Tienes ganas de llorar? -le preguntó el hombre.\n -Creo que no.";
    this.dialogos[10]= "El hombre oyó que su mujer se levantaba y entraba en la cocina. Un momento después estaba de vuelta.\n -Me había olvidado de cerrar los grifos. El hombre se rió y la mujer también. Al fin dejaron de reírse, inmóviles en la noche, tomados de la mano y con las cabezas muy juntas.\n-Buenas noches -dijo el hombre después de un rato.\n -Buenas noches -dijo la mujer.";
    this.dialogos[11]= "El hombre y la mujer le contaron a las niñas ";
    this.dialogos[12]= "y pasaron la noche en familia aceptando el fin.";
    this.dialogos[13]= "Al dia siguiente despertaron y todo seguia con normalidad";
    this.dialogos[14]= "En fin, podria ser una buena historia...\n A veces el mundo necesita creer, aunque el final sea inevitable y terrorifico, necesitamos tener esperanza";
    this.dialogos[15]= " Tpfinal \n La última noche del mundo - Ray Bradbury\n Joray Loreley 77302/9 Mathilda Esteban 93509/6-";
    this.dialogos[16]= "Presiona las flechas para mover al jugador y asi recolectar los elementos antes que acabe el tiempo";
    this.dialogos[17]="CLICK para iniciar";
    this.dialogos[18]= " Desbloquea la historia";
    this.dialogos[19]= "Historia DESBLOQUEADA";
  }


  dibujarSuelo() {
    for (let i=0; i<5; i++) {
      for (let j=0; j<10; j++) {
        image(this.imagen[18], i*200, j*50, 200, 50);
      }
    }
  }

}
