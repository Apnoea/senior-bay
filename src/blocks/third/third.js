import letters from '../letters/letters';
import { throttle } from 'lodash';

const third = () => {
  const third = document.getElementById('third');

  // letters
  const getThirdRect = () => third.getBoundingClientRect();

  const checkOutsideThird = () => {
    const thirdRect = getThirdRect();

    if (thirdRect.top > innerHeight || thirdRect.bottom < 0) {
      return true;
    }

    return false;
  };

  const startLetters = () => letters('#third');

  const waitLetters = throttle(() => {
    if (!checkOutsideThird()) {
      window.removeEventListener('scroll', waitLetters);

      startLetters();
    }
  }, 1000 / 2);

  const initLetters = () => {
    if (!checkOutsideThird()) {
      startLetters();
    } else {
      window.addEventListener('scroll', waitLetters);
    }
  };

  // all
  initLetters();
};

export { third };
