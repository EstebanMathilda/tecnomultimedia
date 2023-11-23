//funcion que dibuja los botones
function botonesinicio(rectx, recty, rectAncho, rectAlto, texto){
  
  fill(255, 255, 0);
  rect(rectx, recty, rectAncho, rectAlto, 10);
  
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(texto, rectx + rectAncho / 2, recty + rectAlto / 2);
}

function botoncreditos(rectx, recty, rectAncho, rectAlto, texto){
  
  fill(255, 255, 0);
  rect(rectx, recty, rectAncho, rectAlto, 10);
  
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(texto, rectx + rectAncho / 2, recty + rectAlto / 2);
}
