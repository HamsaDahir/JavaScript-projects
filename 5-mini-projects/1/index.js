// document.querySelector('.green').addEventListener('click', () => {
  
//   if (document.querySelector('.green').classList.contains('js-green')) {
//     document.querySelector('.green').classList.remove('js-green')
//   } else {
//     document.querySelector('.green').classList.add('js-green')
//   }
// });


// document.querySelector('.red').addEventListener('click', () => {
  

//   if (document.querySelector('.red').classList.contains('js-red')) {
//     document.querySelector('.red').classList.remove('js-red')
//   } else {
//     document.querySelector('.red').classList.add('js-red')
//   }
  
// });

// document.querySelector('.blue').addEventListener('click', () => {
 

//   if (document.querySelector('.blue').classList.contains('js-blue')) {
//     document.querySelector('.blue').classList.remove('js-blue')
//   } else {
//     document.querySelector('.blue').classList.add('js-blue')
//   }
// });

// document.querySelector('.blue').addEventListener('click', () => {
//   document.querySelector('.blue').classList.add('js-green')
// });

const body = document.getElementsByTagName('body')[0]


// function changeColor() {
//   document.querySelector('.green').addEventListener('click', () => {
//   if (body.style.backgroundColor === 'green') {
//     body.style.backgroundColor = 'white'
//   } else {
//     body.style.backgroundColor = 'green'
//   }
  
//   });
// }


function randomColor() {
  const R = Math.floor(Math.random() * 255) + 1;
  const G = Math.floor(Math.random() * 255) + 1;
  const B = Math.floor(Math.random() * 255) + 1;

  const color = `rgb(${R}, ${G}, ${B})`
  console.log(color)
  body.style.backgroundColor = color
}


