import letters from '../letters/letters'

export default function card() {
  const cards = document.querySelectorAll('.card')
  for (const cardItem of cards) {
    const closeButton = cardItem.querySelector('.card__close')
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        cardItem.classList.add('card--hidden')
      })
    }
  }
}

export function showCards(element) {
  const targetBlock = document.querySelector(element)
  const cardBlocks = targetBlock.querySelectorAll('.card')
  for (const [index, cardItem] of cardBlocks.entries()) {
    setTimeout(() => {
      const promise = new Promise((resolve, reject) => {})
      cardItem.classList.add('card--visible')
      promise.then(letters(element))
    }, 500 + index * 500)
  }
}
