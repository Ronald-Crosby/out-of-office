let font;
let graphic;

var canvasDiv = document.getElementById("canvas-container");
let width = canvasDiv.offsetWidth;

function preload() {
  font = loadFont("spacegrotesk-medium.otf");
}

function setup() {
  var sketchCanvas = createCanvas(width, 600);
  sketchCanvas.parent("canvas-container");

  graphic = createGraphics(1200, 600);
  graphic.textFont(font);
  graphic.textSize(500);
  graphic.textAlign(CENTER, CENTER);
  graphic.fill("#ffffff");
  graphic.text("ooo", 600, 260);
}

function draw() {
  background("#000000");
  tileSize = 50;

  for (let i = 0; i < 12; i++) {
    // this will be between 0 and 1 depending on the x position of the mouse across the screen
    let mousePosition = winMouseX / windowWidth;
    mousePosition = easeInOutQuint(mousePosition);

    const sx = 0;
    const sy = i * tileSize * mousePosition;
    const sw = 1200;
    const sh =
      tileSize * mousePosition + (600 - tileSize) * (1 - mousePosition);

    const dx = 0;
    const dy = i * tileSize;
    const dw = 1200;
    const dh = tileSize;

    image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
  }
}

const easeInOutQuint = function (t) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
};
