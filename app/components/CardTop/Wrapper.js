import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fadeIn } from 'utils/KeyFrames';

const Wrapper = (props) => {
  const WrapperPrimitive = styled.div.attrs({ className: 'carousel__card-top' })`
  position: relative;
  margin-left: 15px;
  margin-right: 15px;

  ${'' /* animation: ${fadeIn(props.direction)} 300ms ease-out; */}

  ${'' /* https://www.w3schools.com/css/css3_animations.asp
  animation: ${fadeInRight};
  animation-duration: 250ms;
  animation-iteration-count: 0;
  animation-direction: normal;
  animation-timing-function: ease-out;
  animation-direction: forwards; */}

  a {
    color: #fff;
    :hover {
      color: #fff;
    }
  }

  i {
    cursor: pointer;
    z-index: 1;
    text-shadow: 0px 1px 8px rgba(0, 0, 0, 0.8);
    transition: all 180ms;
  }

  i.rate-icon {
    font-size: 24px;
    position: absolute;
    right: 8px;
    top: 8px;

    &:hover {
      color: red;
      transform: scale(1.5);
    }
  }

  i.play-icon {
    font-size: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &:hover {
      color: red;
    }
  }

  transition: all 180ms ease-in;

  &:hover {
    transition: all 180ms ease-in;
    transform: scale(1.1);

    .card-image__shadow {
      box-shadow: none;
    }
  }
  `;

  return <WrapperPrimitive>{ props.children }</WrapperPrimitive>;
};

Wrapper.propTypes = {
  direction: PropTypes.string,
  children: PropTypes.any,
};

export default Wrapper;
