import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MaterialIcon = (props) => {
  const MaterialIconPrimitive = styled.i.attrs({ className: `material-icons ${props.className}` })`
    ${props.color && `
      color: ${props.color}
    `}
  `;

  if (props.onClick) return <MaterialIconPrimitive onClick={props.onClick}>{ props.type }</MaterialIconPrimitive>;
  return <MaterialIconPrimitive>{ props.type }</MaterialIconPrimitive>;
};

MaterialIcon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default MaterialIcon;
