import dayjs from 'https://cdn.skypack.dev/dayjs';




let divElment = document.querySelector('.container')

setInterval( () => {
  let hour = dayjs().hour()
  let minute =  dayjs().minute()
  let second = dayjs().second()
  
  if (minute < 10) {
    minute = `0${minute}`
  }

  if (second < 10) {
    second = `0${second}`
  }
  
  

  if (hour >= 0 && hour < 12) {
    divElment.innerHTML = `${hour}:${minute}:${second} AM`
  } else {
    divElment.innerHTML = `${hour}:${minute}:${second} pm`
  }

  
  
  
}, 1000)