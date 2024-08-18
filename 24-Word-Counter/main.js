const input = document.getElementById('js-input-text')
const characters = document.getElementById('characters')
const words = document.getElementById('words')
const sentences = document.getElementById('sentences')
const paragraphs = document.getElementById('paragraphs')




input.addEventListener('keyup', (event) => {
  let output = ''
  output += input.value
  characters.innerHTML = `Characters:${output.length + 1}`

  const wordCount = input.value.match(/\b[-?(\w+)?]+\b/gi)

  if (wordCount) {
    words.innerHTML = `words:${wordCount.length + 1}`
  } 

  if (wordCount) {
    const sentencesCount = input.value.match(/[.|!|?]+/g);
    console.log(sentencesCount.length);
    sentences.innerHTML = `Sentences:${sentencesCount.length + 1}`
    
  }

  if (wordCount) {
    const paragraphsCount = input.value.replace(/\n$/gm, '').split(/\n/);
    paragraphs.innerHTML = `paragraphs:${paragraphsCount.length + 1}`
  }
})

