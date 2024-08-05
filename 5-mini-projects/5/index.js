let itemsInList = []

document.getElementById('add-item-button').addEventListener('click', ()=> {
  const theItem = document.getElementById('item-input')
  itemsInList.push(theItem.value)
  const div = document.getElementById('items')
  let html = ``;
  itemsInList.forEach((item, index) =>{
     html += `
      <div id="plus">${item} <button id="${index}" onclick="deleteItem(${index},)">Delete</button></div>
    `
  })
  div.innerHTML = html;
  theItem.value = '';
  
});

function deleteItem(index) {
  itemsInList.forEach((item,indexx) => {
    if (indexx === index) {
      itemsInList.splice(indexx, 1)
    }
  })

  const div = document.getElementById('items')
  let html = ``;
  itemsInList.forEach((item, index) =>{
     html += `
      <div id="plus">${item} <button id="${index}" onclick="deleteItem(${index},)">Delete</button></div>
    `
  })
  div.innerHTML = html;


  
};