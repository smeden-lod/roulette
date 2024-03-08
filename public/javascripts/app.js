const B = document.getElementById('B')
const H = document.getElementById('H')

let url_h = H.textContent.split(",").map((x) => '/static/images/H/'+ x)
let url_b = B.textContent.split(",").map((x) => '/static/images/B/'+ x)
let zone_h = 0
let zone_b = 0


function preload(){
  img_h = url_h.map(x => loadImage(x))  
  img_b = url_b.map(x => loadImage(x))
}

function setup() {
  createCanvas(350, 600)
}

function draw() {
  // Displays the image at its actual size at point (0,0)

  // Affiche l'image dans sa taille réelle avec le coin supérieur gauche
  // sous le curseur
  background(255)
  let ih = img_h[zone_h]
  let ib = img_b[zone_b] 
  image(ih, 0, height/2 - ih.height);
  image(ib, 0, height/2);
}

function mousePressed(){
  if (mouseY < height / 2){
      zone_h = (zone_h + 1) % url_h.length 
  } else {
      zone_b = (zone_b + 1) % url_b.length
  }
}