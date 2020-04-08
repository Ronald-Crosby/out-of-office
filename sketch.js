let font
let graphic

var canvasDiv = document.getElementById('canvas-container');
let width = canvasDiv.offsetWidth;

const waveSlider = document.querySelector('.wave-slider')
const inputLine1 = document.querySelector('.line1')
const inputLine2 = document.querySelector('.line2')
const xSlider = document.querySelector('.x-slider')
const ySlider = document.querySelector('.y-slider')

function preload() {
	font = loadFont('spacegrotesk-medium.otf')
}

function setup() {
	var sketchCanvas = createCanvas(width, 600);
	sketchCanvas.parent("canvas-container");

	createCopy()
}

function draw() {
	background('#ebe2d8')
	const tileSize = 10

	for (let x = 0; x < 120; x++) {
		for (let y = 0; y < 60; y++) {

			const wave = waveSlider.value
			const multiplerX = xSlider.value
			const multiplerY = ySlider.value

			const distortionX = sin((frameCount * wave) + (x * 0.5) + (y * 0.1)) * multiplerX
			const distortionY = sin((frameCount * wave) + (x * 0.3) + (y * 0.3)) * multiplerY

			const sx = x * tileSize + distortionX
			const sy = y * tileSize + distortionY
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

function createCopy() {
	var centreX = width / 2
	var centreY = canvasDiv.offsetHeight / 2

	graphic = createGraphics(width, 600)

	const text = `${inputLine1.value}\n${inputLine2.value}`

	graphic.textFont(font)
	graphic.fill('#ff0000')
	graphic.textSize(250)
	graphic.textAlign(CENTER, CENTER)
	graphic.textLeading(200)
	graphic.text(text, centreX, centreY)
}

inputLine1.addEventListener('input', () => {
	createCopy()
})

inputLine2.addEventListener('input', () => {
	createCopy()
})