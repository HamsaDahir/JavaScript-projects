const numberSpeed = document.getElementById('js-input')
const textPara = document.getElementById('js-para')
const outputText = '30 Days of JavaScripts';
let speed = 300 / numberSpeed.value
let startingNumber = 1;

writeText()

function writeText() {
  textPara.innerHTML = outputText.slice(0,startingNumber)
  startingNumber++
  if (startingNumber > outputText.length) {
    startingNumber = 1
  }

  setTimeout(writeText, speed)
}


numberSpeed.addEventListener('input', (element) => {
  speed = 300 / element.target.value
})

