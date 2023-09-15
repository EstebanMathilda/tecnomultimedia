function jugar(){
  
  //pjs
    personaje1(posY1, 88, 116, 120, 140, 150);
    personaje2(posY2, 368, 374, 360, 350, 340);
    movimiento();
  
  //disparos pj1
  for (let i = 0; i < disparos.length; i++) {  //para que recorra todos los disparos que hay
    let balax1 = disparos[i].x;
    let balay1 = disparos[i].y;
    ellipse(balax1, balay1, 7, 7);
    disparos[i].x += velx;
  }
  
  
}
