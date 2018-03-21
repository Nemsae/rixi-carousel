import { keyframes } from 'styled-components';

const directionTransform = (direction) => {
  switch (direction) {
    case 'right':
      return 'transform: translate3d(100%, 0, 0);';
    case 'left':
      return 'transform: translate3d(-100%, 0, 0);';
    case 'up':
      return 'transform: translate3d(0, 100%, 0);';
    case 'down':
      return 'transform: translate3d(0, -100%, 0);';
    default:
      return 'transform: translate3d(100%, 0, 0);';
  }
};

export const fadeIn = (direction) => {
  const fade = keyframes`
    from {
      ${directionTransform(direction)}
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  `;

  return fade;
};

export const fadeInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeInLeft = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export default {
  fadeIn,
  fadeInRight,
  fadeInLeft,
};
