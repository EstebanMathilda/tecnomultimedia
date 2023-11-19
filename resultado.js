//muestra el mensaje del resultado del juego
function mostrarGanador() {
  if (exitosPj1 === 5) {
    background(0);
    fill(255, 255, 0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Jugador 1 gana", width / 2, height / 2 - 50);
    textSize(20);
    botonesinicio(200, 380, 110, 50, "Reiniciar");
  } else if (exitosPj2 === 5) {
    background(0);
    fill(255, 255, 0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Jugador 2 gana", width / 2, height / 2 - 50);
    textSize(20);
    botonesinicio(200, 380, 110, 50, "Reiniciar");
  }
}
