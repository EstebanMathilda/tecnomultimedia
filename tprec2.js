//tp4
//Mathilda Esteban 93509/6
//Comision 1
//Juego: 'Gun Fight'
//Enlace video explicativo: https://youtu.be/BcM-mVQTFEo

//arreglo de pantallas para menu y creditos
let imagenes = [];
let menuImagen;
let creditosImagen;

let pantallaActual = 1;

//variables para contar los disparos exitosos
let exitosPj1 = 0;
let exitosPj2 = 0;

 //variables personajes
let rectX1;
let rectX2;
let posY1;
let posY2;
let velocidad = 5;

//variables bala
let disparos1 = []; //arreglo de balas de pj1
let disparos2 = []; //arreglo de balas de pj2
let velx = 10;

// carga las imagenes
function preload() {
  menuImagen = loadImage('data/menu.jpg'); //(puse data/ porque si no ponia la ubicación de la carpeta en donde se encuentran las imagenes me daba error)
  creditosImagen = loadImage('data/creditos.jpg'); 
  instruccionesImagen = loadImage('data/instrucciones.jpg');
}

function setup() {
  createCanvas(500, 500);
  
  //agrega menu y creditos al final del arreglo de imagenes
  imagenes.push(menuImagen); 
  imagenes.push(creditosImagen);
  imagenes.push(instruccionesImagen);
  
  //pjs
  rectX1 = 100;
  rectX2 = 380;
  posY1 = 220;
  posY2 = 220;
 
  }
  
function draw() {
    background(0);
      
    //pantallas y sus contenidos
    if (pantallaActual === 1) {
    image(imagenes[0], 0, 0, width, height); //mostrar la imagen de inicio
    botonesinicio(200, 280, 110, 50, "Jugar");
    botoncreditos(200, 380, 110, 50, "Creditos") 
    } else if (pantallaActual === 2) {
    image(imagenes[1], 0, 0, width, height); //mostrar imagen de creditos
    botonesinicio(380, 400, 60, 35, "Volver"); //boton de volver al inicio
  } else if (pantallaActual === 3) {    //mostrar instrucciones
    image(imagenes[2], 0, 0, width, height);
    botonesinicio(200, 400, 80, 40, "Cerrar"); //boton para comenzar el juego
  } else if (pantallaActual === 4) {
    jugar();
    contarDispExitosos();
    mostrarGanador(); 
  }
}

function personaje1(py, somX, naX, braX, armaX, armaX2){
  fill(255, 255, 0);
  noStroke();
  rect(naX, py+20, 10, 8);    //nariz
  rect(somX, py+10, 45, 10);  //sombrero
  rect(braX, py+35, 20, 10);     //brazo
  rect(armaX, py+25, 10, 20);     //arma
  rect(armaX2, py+25, 10, 10);
  rect(rectX1, py, 20, 60);  //cuerpo
}

function personaje2(py, somX, naX, braX, armaX, armaX2){
  fill(255, 255, 0);
  noStroke();
  rect(naX, py+20, 10, 8);    //nariz
  rect(somX, py+10, 45, 10);  //sombrero
  rect(braX, py+35, 20, 10);     //brazo
  rect(armaX, py+25, 10, 20);     //arma
  rect(armaX2, py+25, 10, 10);
  rect(rectX2, py, 20, 60);  //cuerpo
}

function movimiento() {    //movimiento de los pjs
  if (keyIsDown(87)) {    //tecla w
    posY1 -= velocidad;
  }
  
  if (keyIsDown(83)) {    //tecla s
    posY1 += velocidad;
  }
  
  if (keyIsDown(UP_ARROW)) {    //flecha arriba
    posY2 -= velocidad;
  }
  
  if (keyIsDown(DOWN_ARROW)) {    //flecha abajo
    posY2 += velocidad;
  }
}

//funcion que delimita en que zona se encuentra el mouse
function zonaMouse(x1, x2, y1, y2) {
  return (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2)
}

function mousePressed(){
  //al clickear cambie d pantalla
   if (pantallaActual === 1) {
    // si se clickea en creditos
    if (zonaMouse(200, 310, 380, 430)) {
      pantallaActual = 2; //cambia a pantalla de créditos
    }
    // si se clickea jugar
    if (zonaMouse(200, 310, 280, 330)) {
      pantallaActual = 3; //cambia a pantalla de instruccion
    } 
  } if (pantallaActual === 2) {
    // si se clickea volver
    if (zonaMouse(380, 440, 400, 435)) {
      pantallaActual = 1; //vuelve a inicio
    }
}   if (pantallaActual === 3) {  //al clickear cambia a juego
    if (zonaMouse(200, 280, 400, 440)){
      pantallaActual = 4; //
    }
} else if (pantallaActual === 4) {
    // Reiniciar el juego si se presiona el botón de reinicio
    if (zonaMouse(200, 310, 380, 430)) {
      reiniciarJuego();
      pantallaActual = 1; // Volver a la pantalla de inicio
    }
  }
}

function keyPressed(){
  //al presionar espacio pj1 dispara
  if (keyCode === 32){
    let nuevaBala = {
      x: 150,                 // asigna la primera posicion de la bala
      y: posY1 + 30
    };
    disparos1.push(nuevaBala);  //agrega una nueva bala al final del arreglo
  }
  
  //al presionar enter pj2 dispara
  if (keyCode === 13){
    let nuevaBala = {
      x: 340,                
      y: posY2 + 30
    };
    disparos2.push(nuevaBala);   
  }
  
  
}
