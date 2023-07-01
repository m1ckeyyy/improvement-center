import { animateScroll } from 'react-scroll';

export const scrollTo = () => {
  animateScroll.scrollTo(0, {
    duration: 1000,
    smooth: 'easeInOutQuint',
  });
};
