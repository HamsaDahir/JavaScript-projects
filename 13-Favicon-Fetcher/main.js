const url = 'https://www.google.com/s2/favicons?sz=32&domain_url=';

document.getElementById('input').addEventListener('keydown', () => {
  const web = document.getElementById('input')
  let logo = `${url}${web.value}`
  let img = document.getElementById('img')
  img.src = logo
 
})


// function favicon() {
//   const url = 'https://www.google.com/s2/favicons?sz=32&domain_url=';
//   const web = document.getElementById('input')
//   console.log('hh')
// }