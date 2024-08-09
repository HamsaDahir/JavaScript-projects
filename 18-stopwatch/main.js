

const hoursEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')

const startButton = document.getElementById('start')
const lapButton = document.getElementById('lap')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')

let interval = null;

startButton.addEventListener('click',() => {
  interval = setInterval(udpateTime,1000)
  udpateTime()
})

lapButton.addEventListener('click', addLapTime)


stopButton.addEventListener('click',() => {
  stopInterval()
})

resetButton.addEventListener('click', () => {
  stopInterval()
  hoursEl.innerHTML = '00'
  minuteEl.innerHTML = '00'
  secondEl.innerHTML = '00'
  const lapTimes = document.getElementById('js-lapbox')
  lapTimes.replaceChildren();
})


function udpateTime() {
  secondEl.innerHTML ++
  
  if (secondEl.innerHTML < 10 ) {
    secondEl.innerHTML = `0${secondEl.innerHTML++}`
  } else if (minuteEl.innerHTML < 10 ) {
    minuteEl.innerHTML = `0${minuteEl.innerHTML++}`
  } else if (hoursEl.innerHTML < 10 ) {
    hoursEl.innerHTML = `0${hoursEl.innerHTML++}`
  }
  
  if (secondEl.innerHTML == 59) {
    minuteEl.innerHTML++
    secondEl.innerHTML = 0
  } else if (minuteEl.innerHTML == 60) {
    hoursEl.innerHTML++
    minuteEl = 0
  }

  
}




function addLapTime() {
  const div = document.getElementById('js-lapbox')
  div.classList.add('js-lapbox')
  const lap = document.createElement('p')
  lap.classList.add('each-lap')
  lap.innerHTML = `${hoursEl.innerHTML}:${minuteEl.innerHTML}:${secondEl.innerHTML}`
  div.appendChild(lap)
}

function stopInterval() {
  clearInterval(interval)
}