import React from 'react';
import PropTypes from 'prop-types';

import MaterialIcon from 'components/MaterialIcon';
import CardImg from './CardImg';
import CardImgShadow from './CardImgShadow';
import Wrapper from './Wrapper';

const CardTop = (props) => {
  const { item } = props;
  const isFilm = item.type === 'film';
  return (
    <Wrapper direction={props.direction}>
      { props.onItemChange &&
        <MaterialIcon className="rate-icon" type="favorite" onClick={() => props.onItemChange(item.uuid, props.page, props.amt)} />
      }
      { isFilm &&
        <a target="_blank" href={item.itemData.platforms[0] ? item.itemData.platforms[0].url : `https://www.google.com/search?q=${item.name}+film`}>
          <MaterialIcon className="play-icon" type="play_circle_outline" />
        </a>
      }
      <CardImg src={(item.itemData.image && item.itemData.image.length > 0) ? item.itemData.image : ''} />
      <CardImgShadow />
    </Wrapper>
  );
};

CardTop.propTypes = {
  page: PropTypes.number,
  amt: PropTypes.number,
  direction: PropTypes.string,
  item: PropTypes.any,
  onItemChange: PropTypes.func,
};

export default CardTop;
