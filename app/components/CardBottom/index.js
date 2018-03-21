import React from 'react';
import PropTypes from 'prop-types';

import H2 from './H2';
import H3 from './H3';
import Wrapper from './Wrapper';

const CardBottom = (props) => {
  const { item } = props;
  return (
    <Wrapper direction={props.direction}>
      <H2>{item.name}</H2>
      <H3>{item.itemData.definingInfo}</H3>
    </Wrapper>
  );
};

CardBottom.propTypes = {
  direction: PropTypes.string,
  item: PropTypes.any,
};

export default CardBottom;
