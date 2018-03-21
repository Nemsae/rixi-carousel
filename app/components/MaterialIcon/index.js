import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MaterialIcon = (props) => {
  const passedAttributes = { className: 'material-icons' };
  if (props.className) passedAttributes.className += ` ${props.className}`;
  if (props.id) passedAttributes.id = props.id;

  const MaterialIconPrimitive = styled.i.attrs(passedAttributes)`
    ${props.color && `color: ${props.color};`}
  `;

  if (props.onClick) return <MaterialIconPrimitive onClick={props.onClick}>{ props.type }</MaterialIconPrimitive>;
  return <MaterialIconPrimitive>{ props.type }</MaterialIconPrimitive>;
};

MaterialIcon.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default MaterialIcon;
