let secondElapsed = 0;
let interval = null;

const time = document.getElementById('time')

function padStarts(value) {
 return String(value).padStart(2,"0")
}

function setTime() {
  const minutes = Math.floor(secondElapsed / 60)
  const seconds = Math.floor(secondElapsed % 60)
  time.innerHTML = `${padStarts(minutes)}:${padStarts(seconds)}`
}

function timer() {
  secondElapsed += 1
  setTime()
  
}

document.getElementById('start').addEventListener('click', () => {
  if (interval) {
    reset()
  } 
  interval = setInterval(timer, 1000)
  
  

  
});


function reset() {
  stop()
  secondElapsed = 0;
  setTime()

}


function stop() {
  clearInterval(interval)
  
}
