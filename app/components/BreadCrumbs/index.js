import React from 'react';
import PropTypes from 'prop-types';

import CircleLink from './CircleLink';
import Wrapper from './Wrapper';

const BreadCrumbs = (props) => {
  console.log('Sanity:BreadCrumbs RENDERED');
  const breadCrumbs = [];
  for (let i = 0; i < props.total; i++) {  //  eslint-disable-line no-plusplus
    breadCrumbs.push(<CircleLink pageNum={i + 1} key={i} active={props.page === i + 1} onClick={props.changePage} />);
  }

  return (
    <Wrapper>
      { breadCrumbs }
    </Wrapper>
  );
};

BreadCrumbs.propTypes = {
  total: PropTypes.number,
  page: PropTypes.number,
  changePage: PropTypes.func,
};

export default BreadCrumbs;
