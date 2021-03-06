const canvas = document.querySelector('canvas')
const windowHeight = window.innerHeight - 21
const windowWidth = window.innerWidth - 1
let isStarted = false

canvas.height = windowHeight
canvas.width = windowWidth

let context = canvas.getContext('2d')

let x = dxPadPosition
let y = windowHeight - 10.5
let vx = 4
let vy = 4
let radius = 10

document.addEventListener('click', (e) => {
	isStarted = true
})

move()

function move() {
	requestAnimationFrame(move)

	context.clearRect(0, 0, innerWidth, innerWidth)

	context.beginPath()
	context.strokeStyle = 'black'
	context.arc(x, y, radius, 0, Math.PI * 2, false)
	context.stroke()

	if (isStarted) {
		if (radius + x > windowWidth) {
			vx = -vx
		}
	
		if (x - radius < 0) {
			vx = -vx
		}
	
		if (
			y + radius > windowHeight &&
			x >= dxPadPosition &&
			x <= dxPadPosition + 200
		) {
			vy = -vy
		} 
	
		if (y - radius < 0) {
			vy = -vy
		}
	
		x = x + vx
		y = y + vy
	} else {
		x = dxPadPosition + 100
	}
}
