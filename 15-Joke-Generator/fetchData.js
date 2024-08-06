const url = 'https://v2.jokeapi.dev/joke/Any?type=single';
const para = document.getElementById('joke')

export function display() {
  fetch(url).then((response) => {
  console.log('promise resolved')
  return response.json()
}).then((data) => {
  para.innerHTML = data.joke
  console.log(data.joke)
}).catch((err) => {
  console.log('error occured', err)
})

}
