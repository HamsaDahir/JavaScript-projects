
document.getElementById('check').addEventListener('click', () => {
  const element = document.getElementById('user-input').value
  const wordArray = element.split("").reverse();
  const reverseWord = wordArray.join('');
  let html;
  if (reverseWord === element) {
    document.getElementById('container').innerHTML = `<div class="tyeo">${element} is palindrome word</div>`
    document.getElementById('user-input').value = ''
  } else {
    document.getElementById('container').innerHTML = `<div>${element} is not palindrome word</div>`
    document.getElementById('user-input').value = ''
  }
  
  
});
