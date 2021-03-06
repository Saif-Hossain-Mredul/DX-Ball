const canvas = document.querySelector('canvas')
let dxPad = document.getElementById('dx-pad')
let dxPadPosition = 0

const bodyWidth = document.querySelector('body').clientWidth

document.addEventListener('mousemove', (event) => {
	const mousePosition = parseInt(event.clientX) - 100

	if (mousePosition < 0) {
		dxPadPosition = 0
	} else if (mousePosition > bodyWidth - 200) {
		dxPadPosition = bodyWidth - 200
	} else {
		dxPadPosition = mousePosition
	}

	dxPad.style.left = `${dxPadPosition}px`
})
