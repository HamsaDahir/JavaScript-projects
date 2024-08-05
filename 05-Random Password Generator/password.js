const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const symbol = ['\\', '/', ':', '*', '?', '@', '<', '>', '|']



// returns true or false
const lowercase = document.getElementById("includeLowercase")
const uppercase = document.getElementById("includeUppercase")
const symbols = document.getElementById("includeSymbols")
const numbers = document.getElementById("includeNumbers")
const numberChar = Number(document.querySelector('.js-char-input').value)
const create_pass = document.querySelector('.create_pass')



document.getElementById('generator-password').addEventListener('click', () => {

  let chars = '';

  function randomLetters() {
    
    for (let i = 0; i < numberChar; i++) {
      let t = letter[Math.floor(Math.random() * letter.length)]
      chars += t

    } 
    
  };

  function randomNumber() {
    let i = 0;
    while (i < 3) {
      chars += Math.floor(Math.random() * 9)
      i++
    }
  }



  function randomSymbol() {
    for (let i = 0; i < 2; i++) {
      let y = symbol[Math.floor(Math.random() * symbol.length)]
      chars += y
    }
    
  }



  function shuffle() {
    let f = chars.split("")
    f.sort(() => 0.5 - Math.random());
    
    const scrambled = f.join("");
    return scrambled

  }


  if (lowercase.checked && uppercase.checked && symbols.checked && numbers.checked) {
    randomLetters()
    randomNumber()
    randomSymbol()
    create_pass.value = shuffle()
  } else if (uppercase.checked) {
    randomLetters()
    create_pass.value = shuffle().toUpperCase()
  } else if (symbols.checked) {
    randomSymbol()
    create_pass.value = shuffle()
  } else if (numbers.checked) {
    randomNumber()
    create_pass.value = shuffle()
  } else if (lowercase.checked) {
    randomLetters()
    create_pass.value = shuffle()
  }



  
});
