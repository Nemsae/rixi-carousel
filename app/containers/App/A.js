import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const A = (props) => {
  const APrimitive = styled.a.attrs({ className: `${props.className ? props.className : ''}` })`
    display: flex;
    color: #000;

    &:visited {
      color: #000;
    }

    ${props.isActive && `
      color: #fff;
    `}
  `;

  return <APrimitive {...props}>{props.children}</APrimitive>;
};

A.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

export default A;
