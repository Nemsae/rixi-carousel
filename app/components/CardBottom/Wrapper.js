import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fadeIn } from 'utils/KeyFrames';

const CardBottom = (props) => {
  const CardBottomPrimitive = styled.div`
    width: 224px;

    margin-left: 15px;
    margin-right: 15px;

    animation: ${fadeIn(props.direction)} 300ms ease-out;
  `;

  return <CardBottomPrimitive>{ props.children }</CardBottomPrimitive>;
};

CardBottom.propTypes = {
  direction: PropTypes.string,
  children: PropTypes.any,
};

export default CardBottom;
