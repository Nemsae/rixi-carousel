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

// class RixiCarousel extends React.Component {
class RixiCarousel extends React.PureComponent {
  state = {
    page: this.props.startPage || 1,
    amt: this.props.amt || 4,
    total: this.props.totalPages || 4,
  }

  componentWillMount() {
    this.changePage(this.state.page, this.state.amt);
  }

  changePage = (action) => {
    const { page } = this.state;
    let newPage = page;

    switch (action.type) {
      case 'increment':
        if (page + 1 > this.state.total) return;
        newPage = page + 1;
        break;
      case 'decrement':
        if (page === 1) return;
        newPage = page - 1;
        break;
      case 'manual':
        if (action.page === page) return;
        newPage = action.page;
        break;
      default:
        newPage = page;
    }

    this.props.onPageChange(newPage, this.state.amt);
    this.setState((prevState) => ({
      ...prevState,
      page: newPage,
    }));
  }

  renderCircleNav = () => {
    const circleNav = [];
    for (let i = 0; i < this.state.total; i++) {  //  eslint-disable-line no-plusplus
      circleNav.push(<CircleLink key={i} active={this.state.page === i + 1} onClick={() => this.changePage({ type: 'manual', page: i + 1 })} />);
    }
    return circleNav;
  }

  render() {
    // console.log('(components/RixiCarousel/)    this.state.page: ', this.state.page);   // eslint-disable-line no-console
    // console.log('(components/RixiCarousel/)    this.state: ', this.state);   // eslint-disable-line no-console
    // console.log('(components/RixiCarousel/)    this.props.data: ', this.props.data);   // eslint-disable-line no-console

    let CardTops;
    let CardBottoms;

    //  TODO:CASE if data prop isn't supplied, display error component

    const hasData = this.props.data.length > 0;

    if (hasData) {
      const cards = this.props.data.reduce((acc, curr) => {
        const isFilm = curr.type === 'film';

        //  TODO: abstract out JSX, feed in component as a prop for reusability
        const currTop = (
          <CardTop key={curr.uuid}>
            <MaterialIcon class="rate-icon" type="favorite" onClick={() => this.props.onItemChange(curr.uuid, this.state.page, this.state.amt)} />
            { isFilm &&
              <a target="_blank" href={curr.itemData.platforms[0] ? curr.itemData.platforms[0].url : `https://www.google.com/search?q=${curr.name}+film`}>
                <MaterialIcon class="play-icon" type="play_circle_outline" />
              </a>
            }
            <CardImg src={(curr.itemData.image && curr.itemData.image.length > 0) ? curr.itemData.image : ''} />
            <CardImgShadow />
          </CardTop>
        );

        //  TODO: abstract out JSX, feed in component as a prop for reusability
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
          { this.renderCircleNav() }
        </CarouselCircles>

        <CarouselCards>
          <CarouselTop>
            <CarouselUX>
              <MaterialIcon class="left arrow" type="keyboard_arrow_left" onClick={() => this.changePage({ type: 'decrement' })} />
              <MaterialIcon class="right arrow" type="keyboard_arrow_right" onClick={() => this.changePage({ type: 'increment' })} />
            </CarouselUX>
            { CardTops }
          </CarouselTop>

          <CarouselBottom>
            { CardBottoms }
          </CarouselBottom>
        </CarouselCards>

      </Wrapper>
    );
  }
}

RixiCarousel.propTypes = {
  data: PropTypes.array,
  startPage: PropTypes.number,
  amt: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
  onItemChange: PropTypes.func,
};

export default RixiCarousel;
