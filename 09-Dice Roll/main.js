
let interval;

document.getElementById('shuffle-button').addEventListener('click', () => {
  document.getElementById('img-id').src = "assets/dice-roll.gif"
  setTimeout(rollDice, 500)
  
  

})


function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1
  const image = `assets/${randomNumber}.png`
  document.getElementById('img-id').src = image
}