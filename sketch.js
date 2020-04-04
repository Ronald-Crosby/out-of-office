let spaceGrotesk
let graphic

function preload() {
	spaceGrotesk = loadFont('./spacegrotesk-medium.otf')
}

function setup() {
	createCanvas(600, 600);

	graphic = createGraphics(600, 600)
	graphic.textFont(spaceGrotesk);
	graphic.textSize(800)
	graphic.fill('#222222')
	graphic.textAlign(CENTER, CENTER)
	graphic.text('e', 300, 218);
}

function draw() {
	const tileSize = 50
	background('#cccccc')

	for (let x = 0; x < 12; x++) {
		for (let y = 0; y < 12; y++) {
			const distortion = sin(frameCount * 0.03 + (x * 0.3) + (y * 0.3)) * 50

			const sx = x * tileSize + distortion
			const sy = y * tileSize + distortion
			const sw = tileSize
			const sh = tileSize

			const dx = x * tileSize
			const dy = y * tileSize
			const dw = tileSize
			const dh = tileSize

			image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
		}


	}
}