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
