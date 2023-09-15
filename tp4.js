//tp4
//Mathilda Esteban
//Comision 1
//Juego: 'Gun Fight'

let pantallaActual = 1;

 //variables personajes
let rectX1;
let rectX2;
let posY1;
let posY2;
let velocidad = 5;

//variables bala
let disparos = [];
let velx = 2;

function setup() {
  createCanvas(500, 500);
  
  //pjs
  rectX1 = 100;
  rectX2 = 380;
  posY1 = 220;
  posY2 = 220;
 
  }
  
function draw() {
    background(0);
    
    if (pantallaActual === 1) {
    menu(); // Ejecuta la primera función
  } else if (pantallaActual === 2) {
    jugar(); // Ejecuta la segunda función
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

function mousePressed(){
  //al clickear cambie d pantalla
  if (pantallaActual === 1) {
    pantallaActual = 2; // Cambia al estado 2
  }
}

function keyPressed(){
  //al presionar espacio pj1 dispara
  if (keyCode === 32){
    let nuevaBala = {
      x: 150,                 // asigna la primera posicion de la bala
      y: posY1+30
    };
    disparos.push(nuevaBala);
  }
  
  
}
