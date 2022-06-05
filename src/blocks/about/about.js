import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { showCards } from '../card/card'
import letters from '../letters/letters'

export default function about() {
  let paddingValue
  if (window.innerWidth > 1919) {
    paddingValue = '0 90px'
  } else if (window.innerWidth > 1279) {
    paddingValue = '0 70px'
  } else if (window.innerWidth > 743) {
    paddingValue = '0 40px'
  } else if (window.innerWidth > 320) {
    paddingValue = '0'
  }

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
    .to('#about .inner', { padding: paddingValue }, 0)

  window.addEventListener('scroll', () => {
    if (document.querySelector('#about .card--text').classList.contains('card--visible')) {
      letters('#about')
    }
  })
}
