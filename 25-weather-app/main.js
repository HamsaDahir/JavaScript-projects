

const weatherApi = {
  key: "bc776c5d67fb27f9aefd667eb77a380b",
  weatherurl: "https://api.openweathermap.org/data/2.5/weather?",
  latLongurl: "http://api.openweathermap.org/geo/1.0/direct?"
}

const city = document.getElementById('location')
const searchBtn = document.getElementById('search')
const container = document.getElementById('container')

const dateOfTheMonth = dayjs().format('DD')
const currentDay = dayjs().format('dddd')
const currentYear = dayjs().format('dddd')
const month = dayjs().format('MMMM')

searchBtn.addEventListener('click', () => {
  const cityName = city.value 
  fetchData(cityName)
  .then((data) => {
    // changed the backgrund image accrording to the out of data
    
    const dateOfTheMonth = dayjs().format('DD')
    const currentDay = dayjs().format('dddd')
    const currentYear = dayjs().format('dddd')
    const month = dayjs().format('MMMM')

    const weatherData = data.weather[0].main
    if (weatherData === "Clouds") {
      const thediv = document.querySelector('.temp-details')
      
      if (thediv) {
        thediv.remove()
        const nameOfCity = data.name
        const country = data.sys.country
        const temp =  (Number(data.main.temp) - 273.15).toFixed(0)
        const tempMax = (Number(data.main.temp_max) - 273.15).toFixed(0)
        const temMin = (Number(data.main.temp_min) - 273.15).toFixed(0)
        const windSpeed = data.wind.speed
        const humidity = data.main.humidity
        document.body.style.backgroundImage  = "url('assets/weathers/clouds.jpg')"
        const infoDiv = document.createElement('div')
        infoDiv.classList.add('temp-details')
        
        let newInfo = 
          `
            <p class="the-city-name">${nameOfCity},${country}</p>
            <p class="date">${dateOfTheMonth} (${month}) (${currentDay}), ${currentYear}</p>
            <h2 class="tempeture">${temp}°C</h2>
            <p class="temp-min-max">${temMin}°C (min) / ${tempMax}°C (max)</p>
            <p class="clouds">Clouds</p>
            <div class="image-holder">
              <img class="gauge" src="assets/gauge (1).png" alt="">
              <h3>${humidity}%</h3>
            </div>
            <div class="image-holder">
              <img class="wind" src="assets/icons8-wind-64.png" alt="">
              <h3>${windSpeed} kmph</h3>
            </div>
            <div class="image-holder">
              <img class="bar" src="assets/icons8-humidity-64.png" alt="">
              <h3>1004 bar</h3>
            </div>
          `
        infoDiv.innerHTML = newInfo
        container.classList.add('new-container')
        container.style.opacity = '0.9'
        document.getElementById('input-holder').style.backgroundColor = 'white'
        container.appendChild(infoDiv)

      } else {
        
        
        const nameOfCity = data.name
        const country = data.sys.country
        const temp =  (Number(data.main.temp) - 273.15).toFixed(0)
        const tempMax = (Number(data.main.temp_max) - 273.15).toFixed(0)
        const temMin = (Number(data.main.temp_min) - 273.15).toFixed(0)
        const windSpeed = data.wind.speed
        const humidity = data.main.humidity
        document.body.style.backgroundImage  = "url('assets/weathers/clouds.jpg')"
        const infoDiv = document.createElement('div')
        infoDiv.classList.add('temp-details')
        
        let newInfo = 
          `
            <p class="the-city-name">${nameOfCity},${country}</p>
            <p class="date">${dateOfTheMonth} (${month}) (${currentDay}), ${currentYear}</p>
            <h2 class="tempeture">${temp}°C</h2>
            <p class="temp-min-max">${temMin}°C (min) / ${tempMax}°C (max)</p>
            <p class="clouds">Clouds</p>
            <div class="image-holder">
              <img class="gauge" src="assets/gauge (1).png" alt="">
              <h3>${humidity}%</h3>
            </div>
            <div class="image-holder">
              <img class="wind" src="assets/icons8-wind-64.png" alt="">
              <h3>${windSpeed} kmph</h3>
            </div>
            <div class="image-holder">
              <img class="bar" src="assets/icons8-humidity-64.png" alt="">
              <h3>1004 bar</h3>
            </div>
          `
        infoDiv.innerHTML = newInfo
        container.classList.add('new-container')
        container.style.opacity = '0.9'
        document.getElementById('input-holder').style.backgroundColor = 'white'
        container.appendChild(infoDiv)

      }
      
      
      
    } else if (weatherData === 'Rain') {
      
      const thediv = document.querySelector('.temp-details')
      if (thediv) {
        thediv.remove()
        const nameOfCity = data.name
        const country = data.sys.country
        const temp =  (Number(data.main.temp) - 273.15).toFixed(0)
        const tempMax = (Number(data.main.temp_max) - 273.15).toFixed(0)
        const temMin = (Number(data.main.temp_min) - 273.15).toFixed(0)
        const windSpeed = data.wind.speed
        const humidity = data.main.humidity
        document.body.style.backgroundImage  = "url('assets/weathers/rain.jpg')"
        const infoDiv = document.createElement('div')
        infoDiv.classList.add('temp-details')
        
        let newInfo = 
          `
            <p class="the-city-name">${nameOfCity},${country}</p>
            <p class="date">${dateOfTheMonth} (${month}) (${currentDay}), ${currentYear}</p>
            <h2 class="tempeture">${temp}°C</h2>
            <p class="temp-min-max">${temMin}°C (min) / ${tempMax}°C (max)</p>
            <p class="clouds">Clouds</p>
            <div class="image-holder">
              <img class="gauge" src="assets/gauge (1).png" alt="">
              <h3>${humidity}%</h3>
            </div>
            <div class="image-holder">
              <img class="wind" src="assets/icons8-wind-64.png" alt="">
              <h3>${windSpeed} kmph</h3>
            </div>
            <div class="image-holder">
              <img class="bar" src="assets/icons8-humidity-64.png" alt="">
              <h3>1004 bar</h3>
            </div>
          `
        infoDiv.innerHTML = newInfo
        container.classList.add('new-container')
        container.style.opacity = '0.9'
        document.getElementById('input-holder').style.backgroundColor = 'white'
        container.appendChild(infoDiv)

      } else {
        
        const nameOfCity = data.name
        const country = data.sys.country
        const temp =  (Number(data.main.temp) - 273.15).toFixed(0)
        const tempMax = (Number(data.main.temp_max) - 273.15).toFixed(0)
        const temMin = (Number(data.main.temp_min) - 273.15).toFixed(0)
        const windSpeed = data.wind.speed
        const humidity = data.main.humidity
        document.body.style.backgroundImage  = "url('assets/weathers/rain.jpg')"
        const infoDiv = document.createElement('div')
        infoDiv.classList.add('temp-details')
        
        let newInfo = 
          `
            <p class="the-city-name">${nameOfCity},${country}</p>
            <p class="date">${dateOfTheMonth} (${month}) (${currentDay}), ${currentYear}</p>
            <h2 class="tempeture">${temp}°C</h2>
            <p class="temp-min-max">${temMin}°C (min) / ${tempMax}°C (max)</p>
            <p class="clouds">Clouds</p>
            <div class="image-holder">
              <img class="gauge" src="assets/gauge (1).png" alt="">
              <h3>${humidity}%</h3>
            </div>
            <div class="image-holder">
              <img class="wind" src="assets/icons8-wind-64.png" alt="">
              <h3>${windSpeed} kmph</h3>
            </div>
            <div class="image-holder">
              <img class="bar" src="assets/icons8-humidity-64.png" alt="">
              <h3>1004 bar</h3>
            </div>
          `
        infoDiv.innerHTML = newInfo
        container.classList.add('new-container')
        container.style.opacity = '0.9'
        document.getElementById('input-holder').style.backgroundColor = 'white'
        container.appendChild(infoDiv)

      }
      
    } else if (weatherData === 'Snow') {
      

      const thediv = document.querySelector('.temp-details')
      if (thediv) {
        thediv.remove()
        const nameOfCity = data.name
        const country = data.sys.country
        const temp =  (Number(data.main.temp) - 273.15).toFixed(0)
        const tempMax = (Number(data.main.temp_max) - 273.15).toFixed(0)
        const temMin = (Number(data.main.temp_min) - 273.15).toFixed(0)
        const windSpeed = data.wind.speed
        const humidity = data.main.humidity
        document.body.style.backgroundImage  = "url('assets/weathers/snow.jpg')"
        const infoDiv = document.createElement('div')
        infoDiv.classList.add('temp-details')
        
        let newInfo = 
          `
            <p class="the-city-name">${nameOfCity},${country}</p>
            <p class="date">${dateOfTheMonth} (${month}) (${currentDay}), ${currentYear}</p>
            <h2 class="tempeture">${temp}°C</h2>
            <p class="temp-min-max">${temMin}°C (min) / ${tempMax}°C (max)</p>
            <p class="clouds">Clouds</p>
            <div class="image-holder">
              <img class="gauge" src="assets/gauge (1).png" alt="">
              <h3>${humidity}%</h3>
            </div>
            <div class="image-holder">
              <img class="wind" src="assets/icons8-wind-64.png" alt="">
              <h3>${windSpeed} kmph</h3>
            </div>
            <div class="image-holder">
              <img class="bar" src="assets/icons8-humidity-64.png" alt="">
              <h3>1004 bar</h3>
            </div>
          `
        infoDiv.innerHTML = newInfo
        container.classList.add('new-container')
        container.style.opacity = '0.9'
        document.getElementById('input-holder').style.backgroundColor = 'white'
        container.appendChild(infoDiv)

      } else {
        
        const nameOfCity = data.name
        const country = data.sys.country
        const temp =  (Number(data.main.temp) - 273.15).toFixed(0)
        const tempMax = (Number(data.main.temp_max) - 273.15).toFixed(0)
        const temMin = (Number(data.main.temp_min) - 273.15).toFixed(0)
        const windSpeed = data.wind.speed
        const humidity = data.main.humidity
        document.body.style.backgroundImage  = "url('assets/weathers/snow.jpg')"
        const infoDiv = document.createElement('div')
        infoDiv.classList.add('temp-details')
        
        let newInfo = 
          `
            <p class="the-city-name">${nameOfCity},${country}</p>
            <p class="date">${dateOfTheMonth} (${month}) (${currentDay}), ${currentYear}</p>
            <h2 class="tempeture">${temp}°C</h2>
            <p class="temp-min-max">${temMin}°C (min) / ${tempMax}°C (max)</p>
            <p class="clouds">Clouds</p>
            <div class="image-holder">
              <img class="gauge" src="assets/gauge (1).png" alt="">
              <h3>${humidity}%</h3>
            </div>
            <div class="image-holder">
              <img class="wind" src="assets/icons8-wind-64.png" alt="">
              <h3>${windSpeed} kmph</h3>
            </div>
            <div class="image-holder">
              <img class="bar" src="assets/icons8-humidity-64.png" alt="">
              <h3>1004 bar</h3>
            </div>
          `
        infoDiv.innerHTML = newInfo
        container.classList.add('new-container')
        container.style.opacity = '0.9'
        document.getElementById('input-holder').style.backgroundColor = 'white'
        container.appendChild(infoDiv)

      }
    } else if (weatherData === 'Clear') {
      document.body.style.backgroundImage  = "url('assets/weathers/sunny.jpg')"
      const thediv = document.querySelector('.temp-details')
      if (thediv) {
        thediv.remove()
        const nameOfCity = data.name
        const country = data.sys.country
        const temp =  (Number(data.main.temp) - 273.15).toFixed(0)
        const tempMax = data.main.temp_max
        const temMin = data.main.temp_min
        const windSpeed = data.wind.speed
        const humidity = data.main.humidity
        
        const infoDiv = document.createElement('div')
        infoDiv.classList.add('temp-details')
        
        let newInfo = 
          `
            <p class="the-city-name">${nameOfCity},${country}</p>
            <p class="date">${dateOfTheMonth} (${month}) (${currentDay}), ${currentYear}</p>
            <h2 class="tempeture">${temp}°C</h2>
            <p class="temp-min-max">${temMin}°C (min) / ${tempMax}°C (max)</p>
            <p class="clouds">Clouds</p>
            <div class="image-holder">
              <img class="gauge" src="assets/gauge (1).png" alt="">
              <h3>${humidity}%</h3>
            </div>
            <div class="image-holder">
              <img class="wind" src="assets/icons8-wind-64.png" alt="">
              <h3>${windSpeed} kmph</h3>
            </div>
            <div class="image-holder">
              <img class="bar" src="assets/icons8-humidity-64.png" alt="">
              <h3>1004 bar</h3>
            </div>
          `
        infoDiv.innerHTML = newInfo
        container.classList.add('new-container')
        container.style.opacity = '0.9'
        document.getElementById('input-holder').style.backgroundColor = 'white'
        container.appendChild(infoDiv)

      } else {
        
        const nameOfCity = data.name
        const country = data.sys.country
        const temp =  (Number(data.main.temp) - 273.15).toFixed(0)
        const tempMax = data.main.temp_max
        const temMin = data.main.temp_min
        const windSpeed = data.wind.speed
        const humidity = data.main.humidity
        
        const infoDiv = document.createElement('div')
        infoDiv.classList.add('temp-details')
        
        let newInfo = 
          `
            <p class="the-city-name">${nameOfCity},${country}</p>
            <p class="date">${dateOfTheMonth} (${month}) (${currentDay}), ${currentYear}</p>
            <h2 class="tempeture">${temp}°C</h2>
            <p class="temp-min-max">${temMin}°C (min) / ${tempMax}°C (max)</p>
            <p class="clouds">Clouds</p>
            <div class="image-holder">
              <img class="gauge" src="assets/gauge (1).png" alt="">
              <h3>${humidity}%</h3>
            </div>
            <div class="image-holder">
              <img class="wind" src="assets/icons8-wind-64.png" alt="">
              <h3>${windSpeed} kmph</h3>
            </div>
            <div class="image-holder">
              <img class="bar" src="assets/icons8-humidity-64.png" alt="">
              <h3>1004 bar</h3>
            </div>
          `
        infoDiv.innerHTML = newInfo
        container.classList.add('new-container')
        container.style.opacity = '0.9'
        document.getElementById('input-holder').style.backgroundColor = 'white'
        container.appendChild(infoDiv)

      }
    }
    
  })
  .catch(err => console.log('error occured', err.message))

})

async function fetchData(cityName) {
  // fetch lat and lon first
  const responsegoe = await fetch(`${weatherApi.latLongurl}q=${cityName}&appid=${weatherApi.key}`)
  if (responsegoe.status != 200) {
    throw new Error('cannot fetch data')
  }
  const data = await responsegoe.json()
  const lat = data[0].lat
  const lon = data[0].lon
  
  const responseweather = await fetch(`${weatherApi.weatherurl}lat=${lat}&lon=${lon}&appid=${weatherApi.key}`)
  if (responseweather.status != 200) {
    throw new Error('cannot fetch data 2')
  }

  const weatherData = await responseweather.json()
  return weatherData 

}


