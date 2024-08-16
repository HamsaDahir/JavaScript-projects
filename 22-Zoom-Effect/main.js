
let zoomaffect = false
const body = document.getElementById('body')


body.addEventListener('click',() => {
  if (zoomaffect != true) {
    zoomaffect = true
  } else {
    zoomaffect = false
  }
})



window.addEventListener('keydown',(key) => {
  if (key.key === 'z' && zoomaffect === true) {
    zoomaffect = false
  }
})


window.addEventListener('mousemove',(mouse) => {
  if (zoomaffect === true) {
    body.style.transform = 'scale(2)';
    body.style.transformOrigin = `${mouse.clientX}px ${mouse.clientY}px`;
  } else {
    body.style.transform = 'none'
    body.style.transformOrigin = 'none'
  }
})


