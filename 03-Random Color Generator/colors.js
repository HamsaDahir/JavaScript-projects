window.onload = function () {
  addColor()
}


for (let i = 1; i < 10; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  document.querySelector('.container').appendChild(box);
  box.style.cursor = 'pointer';

  box.addEventListener('click', () => {
    console.log(box.innerHTML)
    navigator.clipboard.writeText(box.innerHTML)
    toastr.success('Now you can use it!', 'Copied to clipboard', {timeOut: 3000});
    

  })
}


const randomColorBlock = document.querySelectorAll('.box')


function RandomHexColorCode () {
  let chars = '0123456789abcdef';
  const colorLength = 6;
  let color = '';

  for (let i = 0; i < colorLength; i++) {
    randomColor = Math.floor(Math.random() * chars.length)
    color += chars.substring(randomColor, randomColor + 1)
  }
  return '#' + color
}



function addColor() {
  randomColorBlock.forEach((e) =>{
    const newColor = RandomHexColorCode()
    e.style.backgroundColor = newColor
    e.innerHTML = newColor
  })
}


