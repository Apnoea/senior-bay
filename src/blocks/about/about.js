import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function about() {
  gsap.registerPlugin(ScrollTrigger)

  gsap.timeline({
    scrollTrigger: {
      trigger: '#about',
      start: 'top center',
      end: '25% center',
      markers: true,
      scrub: true,
      onLeave: () => showCards()
    }
  })
    .to('#about .inner', { padding: '0 90px' }, 0)
}

function showCards() {
  const cards = document.querySelectorAll('#about .card')
  for (const [index, card] of cards.entries()) {
    setTimeout(() => {
      card.classList.add('card--visible')
    }, 500 + index * 500)
  }
}
