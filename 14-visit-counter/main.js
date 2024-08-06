
let count = localStorage.getItem('value') || 0

document.addEventListener('DOMContentLoaded', () => {
  count++
  localStorage.setItem('value', count)
  document.getElementById('h4').innerHTML = count
})

