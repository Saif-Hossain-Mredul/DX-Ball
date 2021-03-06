const canvas = document.querySelector('canvas')
const windowHeight = window.innerHeight - 21
const windowWidth = window.innerWidth - 1
let isStarted = false

canvas.height = windowHeight
canvas.width = windowWidth

let context = canvas.getContext('2d')

let x = dxPadPosition
let y = windowHeight - 10.3
let vx = 0
let vy = 0
let radius = 10
const speed = 5

// This function is for generate vy auto

function generateVY(hypotenuse, base) {
	return Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(base, 2))
}

document.addEventListener('click', (e) => {
	// Here if the game has started or not is being checked
	// If its only for first time, then it will auto generate the game with a
	// arbitrary direction and then the flag variable is switched to false

	if (!isStarted) {
		vx = Math.random() * 3 + 1
		vy = generateVY(speed, vx)

		const randomNum = Math.ceil(Math.random() * 10)
		randomNum > 5 ? (vx = -vx) : (vx = vx)
	}
	isStarted = true
})

move()

// This function is for the movement of the ball
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
