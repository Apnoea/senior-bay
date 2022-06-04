import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { showCards } from '../card/card'
import letters from '../letters/letters'

export default function about() {
  gsap.registerPlugin(ScrollTrigger)

  gsap.timeline({
    scrollTrigger: {
      trigger: '#about',
      start: 'top center',
      end: '25% center',
      markers: true,
      scrub: true,
      onLeave: () => showCards('#about')
    }
  })
    .to('#about .inner', { padding: '0 90px' }, 0)

  window.addEventListener('scroll', () => {
    if (document.querySelector('#about .card--text').classList.contains('card--visible')) {
      letters('#about')
    }
  })
}
