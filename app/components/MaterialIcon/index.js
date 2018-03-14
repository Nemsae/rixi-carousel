import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MaterialIcon = (props) => {
  const MaterialIconPrimitive = styled.i.attrs({ className: `material-icons ${props.class}` })`
    ${'' /* font-size: 18px;
    font-weight: 400; */}
  `;

  return <MaterialIconPrimitive>{ props.type }</MaterialIconPrimitive>;
};

MaterialIcon.propTypes = {
  class: PropTypes.string,
  type: PropTypes.string,
};

export default MaterialIcon;
