import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function joinUs() {
  gsap.registerPlugin(ScrollTrigger)

  gsap.timeline({
    scrollTrigger: {
      trigger: '#mainBlock',
      start: 'center center',
      end: 'bottom center',
      markers: true,
      scrub: true
    }
  })
    .to('.join-us .join-us__background', { scale: 16 }, 0)
}
