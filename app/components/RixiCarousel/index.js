
import React from 'react';
import { FormattedMessage } from 'react-intl';

import Card from './Card';
import CardImg from './CardImg';
import CarouselCards from './CarouselCards';
import CarouselCircles from './CarouselCircles';
import CircleLink from './CircleLink';
import H2 from './H2';
import H3 from './H3';
import Wrapper from './Wrapper';

import messages from './messages';

export default class RixiCarousel extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <CarouselCircles>
          <CircleLink></CircleLink>
          <CircleLink></CircleLink>
          <CircleLink></CircleLink>
          <CircleLink></CircleLink>
        </CarouselCircles>

        <CarouselCards>
          <Card>
            <CardImg></CardImg>
            <H2>Title</H2>
            <H3>Genre</H3>
          </Card>
          <Card>
            <CardImg></CardImg>
            <H2>Title</H2>
            <H3>Genre</H3>
          </Card>
          <Card>
            <CardImg></CardImg>
            <H2>Title</H2>
            <H3>Genre</H3>
          </Card>
          <Card>
            <CardImg></CardImg>
            <H2>Title</H2>
            <H3>Genre</H3>
          </Card>
        </CarouselCards>

      </Wrapper>
    );
  }
}
