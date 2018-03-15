import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CircleLink = (props) => {
  const CircleLinkPrimitive = styled.a`
    border: 1px solid #fff;
    border-radius: 10px;

    cursor: pointer;

    height: 10px;
    width: 10px;

    &:hover {
      background: #fff;
    }

    ${props.active && `
      background: #fff;
    `}
  `;

  return <CircleLinkPrimitive onClick={props.onClick} />;
};

CircleLink.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CircleLink;
