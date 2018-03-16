import styled from 'styled-components';

const CarouselUX = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 100%;

  .arrow {
    font-size: 48px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: font-size 250ms;

    &:hover {
      font-size: 58px;
      ${'' /* transform: scale(1); */}
    }
  }
  .right {
    right: -60px;
  }
  .left {
    left: -60px;
  }
`;

export default CarouselUX;
