export default function about() {
  const aboutBlock = document.querySelector('#about')
  const halfWindowHeight = window.innerHeight / 2
  window.addEventListener('scroll', () => {
    if (halfWindowHeight >= aboutBlock.getBoundingClientRect().top) {
      aboutBlock.classList.add('about--active')
    } else {
      aboutBlock.classList.remove('about--active')
    }
  })
}
