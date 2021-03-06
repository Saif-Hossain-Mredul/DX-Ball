const canvas = document.querySelector('canvas')
let dxPad = document.getElementById('dx-pad')

document.addEventListener('mousemove', (event) => {
    console.log(event.clientX);

    dxPad.style.left = `${event.clientX}px`;
})
