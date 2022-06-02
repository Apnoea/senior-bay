import $ from 'jquery'
import 'lazysizes'
import uiInput from '../blocks/_ui/ui-input/ui-input'
import uiSelect from '../blocks/_ui/ui-select/ui-select'
import uiTextarea from '../blocks/_ui/ui-textarea/ui-textarea'
import uiTooltip from '../blocks/_ui/ui-tooltip/ui-tooltip'
import about from '../blocks/about/about'
import card from '../blocks/card/card'
import mainBlock from '../blocks/main-block/main-block'

document.addEventListener('DOMContentLoaded', function () {
  uiInput()
  uiSelect()
  uiTextarea()
  uiTooltip()
  anchorsSoftScroll()
  about()
  card()
  mainBlock()
  animateLetters()
})

function anchorsSoftScroll() {
  $('a[href^="#"]').on('click', function () {
    const _href = $(this).attr('href')
    $('html, body').animate({
      scrollTop: `${$(_href).offset().top - 100}px`
    })
    return false
  })
}

function shuffle(o) {
  for (let j, x, i = o.length; i; j = Number.parseInt(Math.random() * i, 10), x = o[--i], o[i] = o[j], o[j] = x);
  return o
}

function animateLetters() {
  const letters = document.querySelectorAll('.word span')
  const letterArray = []
  for (const [index, letter] of letters.entries()) {
    letterArray.push(index)
  }
  shuffle(letterArray)
  for (const [index, item] of letterArray.entries()) {
    setTimeout(() => {
      letters[item].classList.add('active')
    }, 50 + index * 50)
  }
}
