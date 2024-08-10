const divContainer = document.getElementById('container')

let item = 0;


while (item < 300) {
  let randomColor = '#'
  const letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];
  randomColor += letters[Math.floor(Math.random()  * letters.length)]
  
  const node = document.createElement('div')
  node.addEventListener('mouseover', () => {
    node.style.backgroundColor = randomColor
  })
  
  node.addEventListener('mouseout', () => {
    node.style.backgroundColor = ''
  })

  node.classList.add('square')

  divContainer.appendChild(node)
  item++
}