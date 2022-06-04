import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import header from '../header/header'
import letters from '../letters/letters'
import { showCards } from '../card/card'

export default function mainBlock() {
  const trigger = '#mainBlock'

  gsap.registerPlugin(ScrollTrigger)

  gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: 'center center',
      end: 'bottom center',
      markers: true,
      scrub: true
    }
  })
    .to('.join-us .join-us__background', { scale: 16 }, 0)

  setTimeout(() => {
    header()
    letters(trigger)
    showCards(trigger)
  }, 1000)
}
