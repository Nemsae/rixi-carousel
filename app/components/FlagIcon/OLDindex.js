import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlagIcon = (props) => {
  const FlagIconPrimitive = styled.span.attrs({ className: `flag-icon flag-icon-${props.country} ${props.className ? props.className : ''}` })`
    ${'' /* ${props.color && `
      color: ${props.color}
    `} */}
  `;

  return <FlagIconPrimitive onClick={props.onClick}>{ props.type }</FlagIconPrimitive>;
};

FlagIcon.propTypes = {
  className: PropTypes.string,
  country: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default FlagIcon;
