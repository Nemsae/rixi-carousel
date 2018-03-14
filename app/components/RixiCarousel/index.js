import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';

import MaterialIcon from 'components/MaterialIcon';
import CarouselBottom from './CarouselBottom';
import CarouselTop from './CarouselTop';
import CardImg from './CardImg';
import CardImgShadow from './CardImgShadow';
import CardBottom from './CardBottom';
import CardTop from './CardTop';
import CarouselCards from './CarouselCards';
import CarouselCircles from './CarouselCircles';
import CarouselUX from './CarouselUX';
import CircleLink from './CircleLink';
import H2 from './H2';
import H3 from './H3';
import Wrapper from './Wrapper';

// import messages from './messages';

// state = {
//   page: 1,
//   amt: 4,
// };

const RixiCarousel = (props) => {
  console.log('(components/RixiCarousel/)    props.data: ', props.data);

  let CardTops;
  let CardBottoms;

  //  TODO:CASE if data prop isn't supplied, display error component

  //  CASE if data prop isn't empty
  const hasData = props.data.length > 0;
  if (hasData) {
    const cards = props.data.reduce((acc, curr) => {
      const isFilm = curr.type === 'film';

      const currTop = (
        <CardTop key={curr.uuid}>
          <MaterialIcon class="rate-icon" type="favorite" />
          { isFilm && <a href={curr.itemData.platforms[0].url} target="_blank"><MaterialIcon class="play-icon" type="play_circle_outline" /></a> }
          <CardImg src={curr.itemData.image} />
          <CardImgShadow />
        </CardTop>
      );

      const currBottom = (
        <CardBottom key={curr.uuid}>
          <H2>{curr.name}</H2>
          <H3>{curr.itemData.definingInfo}</H3>
        </CardBottom>
      );

      return {
        top: [...acc.top, currTop],
        bottom: [...acc.bottom, currBottom],
      };
    }, { top: [], bottom: [] });

    CardTops = cards.top;
    CardBottoms = cards.bottom;
  }

  return (
    <Wrapper>

      <CarouselCircles>
        <CircleLink></CircleLink>
        <CircleLink></CircleLink>
        <CircleLink></CircleLink>
        <CircleLink></CircleLink>
      </CarouselCircles>

      <CarouselCards>
        <CarouselTop>
          <CarouselUX>
            <MaterialIcon class="left arrow" type="keyboard_arrow_left" />
            <MaterialIcon class="right arrow" type="keyboard_arrow_right" />
          </CarouselUX>
          { CardTops }
        </CarouselTop>

        <CarouselBottom>
          { CardBottoms }
        </CarouselBottom>
      </CarouselCards>

    </Wrapper>
  );
};

RixiCarousel.propTypes = {
  data: PropTypes.array,
};

export default RixiCarousel;
