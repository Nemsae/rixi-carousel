
import React from 'react';
import { FormattedMessage } from 'react-intl';

import CarouselBottom from './CarouselBottom';
import CarouselTop from './CarouselTop';
import CardImg from './CardImg';
import CardBottom from './CardBottom';
import CardTop from './CardTop';
import CarouselCards from './CarouselCards';
import CarouselCircles from './CarouselCircles';
import CarouselUX from './CarouselUX';
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

          <CarouselTop>
            <CarouselUX>
              <i className="material-icons left arrow">keyboard_arrow_left</i>
              <i className="material-icons right arrow">keyboard_arrow_right</i>
            </CarouselUX>

            <CardTop>
              <i className="material-icons rate-icon">favorite</i>
              <i className="material-icons play-icon">play_circle_outline</i>
              <CardImg />
            </CardTop>
            <CardTop>
              <i className="material-icons rate-icon">favorite</i>
              <i className="material-icons play-icon">play_circle_outline</i>
              <CardImg />
            </CardTop>
            <CardTop>
              <i className="material-icons rate-icon">favorite</i>
              <i className="material-icons play-icon">play_circle_outline</i>
              <CardImg />
            </CardTop>
            <CardTop>
              <i className="material-icons rate-icon">favorite</i>
              <i className="material-icons play-icon">play_circle_outline</i>
              <CardImg />
            </CardTop>
          </CarouselTop>

          <CarouselBottom>
            <CardBottom>
              <H2>Title</H2>
              <H3>Genre</H3>
            </CardBottom>
            <CardBottom>
              <H2>Title</H2>
              <H3>Genre</H3>
            </CardBottom>
            <CardBottom>
              <H2>Title</H2>
              <H3>Genre</H3>
            </CardBottom>
            <CardBottom>
              <H2>Title</H2>
              <H3>Genre</H3>
            </CardBottom>
          </CarouselBottom>

          {/* <Card>
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
          </Card> */}
        </CarouselCards>

      </Wrapper>
    );
  }
}
