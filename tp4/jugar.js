function jugar(){
  
  //pjs
    personaje1(posY1, 88, 116, 120, 140, 150);
    personaje2(posY2, 368, 374, 360, 350, 340);
    movimiento();
  
  //disparos pj1
  for (let i = 0; i < disparos1.length; i++) {  //para que recorra todos los disparos que hay
    let balax1 = disparos1[i].x;
    let balay1 = disparos1[i].y;
    ellipse(balax1, balay1, 7, 7);
    disparos1[i].x += velx;
  } 
  
  //disparos pj2
  for (let i = 0; i < disparos2.length; i++) {  //lo mismo
    let balax2 = disparos2[i].x;
    let balay2 = disparos2[i].y;
    ellipse(balax2, balay2, 7, 7);
    disparos2[i].x -= velx;
  } 
  
}

function reiniciarJuego() {
  //reinicia el juego una vez que uno gana
  exitosPj1 = 0;
  exitosPj2 = 0;
  disparos1 = [];
  disparos2 = [];
  posY1 = 220;
  posY2 = 220;
}

//funcion que cuenta los disparos exitosos
function contarDispExitosos() {
  for (let i = 0; i < disparos1.length; i++) {   
    if (disparos1[i].x >= rectX2 && disparos1[i].y >= posY2 && disparos1[i].y <= posY2 + 60) {  //calcula si el disparo del pj1 toca al pj2
      exitosPj1++;   
      disparos1.splice(i, 1); // Eliminar la bala que toca al pj2 (la ultima bala del arreglo)(i)
      i--;
    }
  }
  
  for (let i = 0; i < disparos2.length; i++) {
    if (disparos2[i].x <= rectX1 + 20 && disparos2[i].y >= posY1 && disparos2[i].y <= posY1 + 60) {    // lo mismo pero al reves
      exitosPj2++;
      disparos2.splice(i, 1); 
      i--;
    }
  }
}
