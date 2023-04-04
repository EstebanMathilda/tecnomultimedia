//Esteban Mathilda
//tp0 comision 1

size(800, 400);
background(52, 202, 255);

//cielo naranja
fill(148, 232, 202);
noStroke();
rect(400, 130, 400, 20);
fill(255, 202, 88);
rect(400, 150, 400, 60);
fill(255, 153, 70);
rect(400, 200, 400, 40);
fill(222, 129, 92);
rect(400, 213, 400, 30);

//arbol
fill(54, 48, 43);
rect(595, 200, 10, 30);
fill(88, 78, 69);
ellipse(600, 180, 120, 50);
ellipse(600, 160, 70, 30);

//cesped
fill(138, 173, 115);
rect(400, 219, 400, 200);
fill(255, 222, 178);
rect(400, 350, 400, 100);
fill(255, 222, 178);
triangle(380, 350, 400, 320, 420, 350);
triangle(400, 350, 420, 320, 440, 350);
triangle(420, 350, 440, 320, 460, 350);
triangle(440, 350, 460, 320, 480, 350);
triangle(460, 350, 480, 320, 500, 350);
triangle(480, 350, 500, 320, 520, 350);
triangle(500, 350, 520, 320, 540, 350);
triangle(520, 350, 540, 320, 560, 350);
triangle(540, 350, 560, 320, 580, 350);
triangle(560, 350, 580, 320, 600, 350);
triangle(580, 350, 600, 320, 620, 350);
triangle(600, 350, 620, 320, 640, 350);
triangle(620, 350, 640, 320, 660, 350);
triangle(640, 350, 660, 320, 680, 350);
triangle(660, 350, 680, 320, 700, 350);
triangle(680, 350, 700, 320, 720, 350);
triangle(700, 350, 720, 320, 740, 350);
triangle(720, 350, 740, 320, 760, 350);
triangle(740, 350, 760, 320, 780, 350);
triangle(760, 350, 780, 320, 800, 350);
triangle(780, 350, 800, 320, 820, 350);

//personas
fill(44);
rect(595, 250, 3, 10);
rect(600, 252, 3, 8);

//luna
fill(235, 250, 252);
circle(600, 80, 15);
fill(52, 202, 255);
circle(602, 78, 15);

//foto paisaje
PImage paisaje;
paisaje = loadImage("paisaje.jpg");
image(paisaje, 0, 0, 400, 400);
