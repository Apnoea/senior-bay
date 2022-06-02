import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import header from '../header/header'

export default function mainBlock() {
  gsap.registerPlugin(ScrollTrigger)
  // consistentlyAnimations([header, 'mainTitle', 'mainCard'])

  gsap.timeline({
    scrollTrigger: {
      trigger: '#mainBlock',
      start: 'center center',
      end: 'bottom center',
      markers: true,
      scrub: true
    }
  })
    .to('.join-us .join-us__background', { scale: 20 }, 0)

  header()
}

// function consistentlyAnimations(elements) {
//   for (const [index, element] of elements.entries()) {
//     setTimeout(() => {
//       console.log(index, element)
//     }, 500 + index * 1000)
//   }
// }
