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
