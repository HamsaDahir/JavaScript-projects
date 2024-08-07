let hour = document.getElementById('hour')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

let interval = null;

const startButton = document.getElementById('js-start-button')
const reset = document.getElementById('reset');
const pause = document.getElementById('pause');

startButton.disabled = true;


[hour,minutes,seconds].forEach(input => {
  input.addEventListener('input', () => {
    if (hour.value > 0 || minutes.value > 0 || seconds.value > 0) {
      startButton.disabled = false;
    } else {
      startButton.disabled = true;
    }
  })
})


startButton.addEventListener('click', () => {
  pause.style.display = 'inline-block'
  reset.style.display = 'inline-block'
  startButton.disabled = true
  interval = setInterval(() => {
    timer()
  }, 1000)
})



pause.addEventListener('click', () => {
  stopInterval()
  pause.style.display = 'none'
  

  startButton.disabled = false

})


reset.addEventListener('click', () => {
  hour.value = 0;
  minutes.value = 0;
  seconds.value = 0;
  pause.style.display = 'none'
  reset.style.display = 'none'
  startButton.disabled = false
})

function timer() {
  if (Number(hour.value) === 0 && Number(minutes.value) === 0 && Number(seconds.value) === 0) {
    hour.value = 0;
    minutes.value = 0;
    seconds.value = 0;
  } else if (seconds.value != 0) {
    seconds.value--;
    seconds.innerHTML = seconds.value
    
  } else if (Number(minutes.value) != 0 && Number(seconds.value) === 0) {
    seconds.value = 59;
    minutes.value--
    
    
  } else if (Number(hour.value) != 0 && Number(minutes.value) === 0) {
    minutes.value = 60
    hour.value--
    hour.inert = hour.value
  }
  if (hour.value == 0 && minutes.value == 0 && seconds.value == 0) {
    startButton.disabled = true;
}
}

function stopInterval() {
  clearInterval(interval)
}