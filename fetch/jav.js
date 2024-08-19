// fetch api

/*
const url = 'https://jsonplaceholder.typicode.com/todos/'

const getTodos = (resource ) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status ===  200) {

        const data = JSON.parse(request.responseText)
        
        resolve(data)
      
      } else if (request.readyState === 4) {
        
        reject('could not fetch data')
        
      }
      // console.log(request, request.readyState);
    });
    request.open('GET',resource)
    request.send()
  })
 

};

// getTodos('luigi.json',(err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//     getTodos('mario.json', (err, data) => {
//       if (err) {
//         console.log(err)
//       } else {
//         console.log(data)
//       }
//     })
//   }
// })


getTodos('luigi.json').then((data) => {
  console.log('promise 1 resolved',data);
  return getTodos('mario.json')
}).then((data) => {
  console.log('promise 2 resolved',data)
  return getTodos('shaun.json')
}).then((data) => {
  console.log('promise 3 resolved',data)
}).catch((err) => {
  console.log(err)
})


// promise exmpale 

*/


// fetch('luigi.json').then((response) => {
//   console.log('promise resolved')
//   return response.json()
// }).then((data) => {
//   console.log(data)
// }).catch((err) => {
//   console.log('error occured', err)
// })


const getTodos = async() => {

  const response = await fetch('luigi.json')
  if (response.status !== 200) {
    throw new Error('cannot fetch data1')
  }
  const data1 = await response.json()

  const response2 = await fetch('mario.json')
  if (response2.status !== 200) {
    throw new Error('cannot fetch data2')
  }
  const data2 = await response2.json()


  return data2
};

getTodos()
  .then(data => console.log(data))
  .catch(err => console.log('error occured', err.message))