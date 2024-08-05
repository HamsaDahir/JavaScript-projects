document.getElementById('color-picker').addEventListener('input', () => {
  const color = document.getElementById('color-picker').value 
  document.body.style.backgroundColor = color
  

  console.log(color)
  hexToRGB(color)
})



function hexToRGB(input) {
  const hex = input.slice(1)
  let red = parseInt(hex.substring(0,2), 16)
  let green = parseInt(hex.substring(2,4), 16)
  let blue = parseInt(hex.substring(4,6), 16)

  const rgb = `rgb(${red},${green},${blue})`

  const r = red / 255
  const g = green / 255
  const b = blue / 255


  let min = 0;
  let max = 0;

  if (r < g && r < b) {
    min = r
  } else if (g < r && g < b) {
    min = g
  } else if (b < r && g) {
    min = b
  }

  
  if (r > g && r > b) {
    max = r
  } else if (g > r && g > b) {
    max = g
  } else if (b > r && b > g ) {
    max = b
  }


  const luminace  = Math.round(((min + max) / 2) * 100, 2)

  let Sat = 0;
  if ((min + max) / 2 < 0.5) {
    Sat = (max - min) / (max + min)
  } else {
    Sat = ( max-min) / (2.0 - max - min)
  }
  
  const saturation = Math.round(Sat * 100, 2)
  
  

  

  document.getElementById('hex-button').innerHTML = input
  document.getElementById('rgb-button').innerHTML = rgb
  document.getElementById('hsl-button').innerHTML = `251,${saturation}%,${luminace}`
}



document.getElementById('hex-button').addEventListener('click', (element) => {
  navigator.clipboard.writeText(document.getElementById('hex-button').innerHTML)
  toastr.success('Now you can use it!', 'Copied to clipboard', { timeOut: 3000 });

})

document.getElementById('rgb-button').addEventListener('click', (element) => {
  navigator.clipboard.writeText(document.getElementById('hex-button').innerHTML)
  toastr.success('Now you can use it!', 'Copied to clipboard', { timeOut: 3000 });

})

document.getElementById('hsl-button').addEventListener('click', (element) => {
  navigator.clipboard.writeText(document.getElementById('hex-button').innerHTML)
  toastr.success('Now you can use it!', 'Copied to clipboard', { timeOut: 3000 });

})