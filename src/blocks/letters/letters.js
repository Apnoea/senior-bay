export default function letters(triggerBlock) {
  const lettersBlocks = document.querySelector(triggerBlock).querySelectorAll('.letters')
  for (const lettersBlock of lettersBlocks) {
    const letterElements = lettersBlock.querySelectorAll('span')
    const letterArray = []
    for (const [index, letter] of letterElements.entries()) {
      letterArray.push(index)
    }
    shuffle(letterArray)
    for (const [index, item] of letterArray.entries()) {
      setTimeout(() => {
        letterElements[item].classList.add('active')
      }, 50 + index * 50)
    }
  }
}

function shuffle(o) {
  for (let j, x, i = o.length; i; j = Number.parseInt(Math.random() * i, 10), x = o[--i], o[i] = o[j], o[j] = x);
  return o
}
