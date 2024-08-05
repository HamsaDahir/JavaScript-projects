let score = 0;

document.getElementById('add').addEventListener('click', ()=> {
  score++
  document.getElementById('p-0').innerHTML = score
})


document.getElementById('minus-button').addEventListener('click', ()=> {
  score--

  document.getElementById('p-0').innerHTML = score
})


document.getElementById('reset-button').addEventListener('click', ()=> {
  score = 0
  document.getElementById('p-0').innerHTML = score
})


document.getElementById('save-button').addEventListener('click', ()=> {


  const numberSaved = document.querySelector('.number-saved-section')
  const hElement = document.createElement('h6')
  hElement.innerHTML = score
  hElement.classList.add('the-number-saved')
  numberSaved.appendChild(hElement)

})

