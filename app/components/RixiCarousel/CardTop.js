import styled from 'styled-components';

const CardTop = styled.div.attrs({ className: 'carousel__card-top' })`
  position: relative;

  i {
    cursor: pointer;
  }

  i.rate-icon {
    font-size: 24px;
    position: absolute;
    right: 8px;
    top: 8px;

    &:hover {
      color: red;
    }
  }

  i.play-icon {
    font-size: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &:hover {
      color: green;
    }
  }

  transition: all 180ms ease-in;

  &:hover {
    transition: all 180ms ease-in;
    transform: scale(1.1);
  }
`;

export default CardTop;
