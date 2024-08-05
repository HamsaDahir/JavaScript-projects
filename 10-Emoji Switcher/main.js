

let apiKey = 'b3d524eff3aada3b2de2ac5a51b086794c57716c'

let url = 'https://emoji-api.com/emojis?access_key='

// function fetchData() {
//   fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error))
// }


let emoji = [];

async function fetchData()  {
  const response = await fetch(`${url}${apiKey}`)
  if (response.status !== 200) {
    throw new Error('cannot fetch data')
  }
  const data = await response.json()
  return data
}  






fetchData().then((data) => {
  data.forEach(element => {
    const newEmoji = element.character
    emoji.push(newEmoji)
  });
  // console.log(data[0].character)
}).catch((error) => {
  console.log(error.message)
})



document.getElementById('the-emoji').addEventListener('mouseover', ()=> {
  const randomNumber = Math.floor(Math.random() * emoji.length)
  document.getElementById('p-image').innerHTML = emoji[randomNumber]
  document.getElementById('the-emoji').src = ''
  console.log(emoji[0])
})