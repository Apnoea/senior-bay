import header from '../header/header'
import letters from '../letters/letters'
import { showCards } from '../card/card'
import joinUs from '../join-us/join-us'

export default function mainBlock() {
  joinUs()
  header()
  setTimeout(() => {
    letters('#mainBlock')
    showCards('#mainBlock')
  }, 500)
}
