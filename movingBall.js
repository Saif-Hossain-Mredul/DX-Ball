const canvas = document.querySelector('canvas')
const windowHeight = window.innerHeight - 21
const windowWidth = window.innerWidth - 1

canvas.height = windowHeight
canvas.width = windowWidth

let context = canvas.getContext('2d')

let x = windowWidth / 2
let y = windowHeight / 2
let vx = 4
let vy = 4
let radius = 10

move()

function move() {
	requestAnimationFrame(move)

	context.clearRect(0, 0, innerWidth, innerWidth)

	context.beginPath()
	context.strokeStyle = 'black'
    context.arc(x, y, radius, 0, Math.PI * 2, false)
    context.stroke()

    if (radius + x > windowWidth) {
        vx = -vx
    } 

    if (x - radius < 0) {
        vx = -vx
    }

    if ( y + radius > windowHeight) {
        vy = -vy
    }

    if (y - radius < 0) {
        vy = -vy
    }

    x = x+vx
    y = y+vy
}
