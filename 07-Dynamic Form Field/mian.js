// window.onload( () => {

// })

const inputEment = document.querySelectorAll('#input-element')

// const section = document.querySelector('.section')
const container = document.getElementById('inputs-container')

document.querySelector('.js-add').addEventListener('click', () => {
  container.appendChild(createIinput())
  
})


document.querySelector('.js-remove').addEventListener('click', () => {
  const  input_tags = container.getElementsByTagName('input');
  
  if (input_tags.length <= 2) {
    document.getElementById("remove").style.visibility="hidden";
  }
  container.removeChild(input_tags[input_tags.length-1])


})


function createIinput() {
  
  const input = document.createElement('input')
  input.type = "text"
  input.placeholder = "Another Field"
  input.className = "all-the-inputs"
  
  return input;
}


// function removeInput() {
//   const  input_tags = container.getElementsByTagName('input');
  
//   return input_tags;
  
  
// }