import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';

import MaterialIcon from 'components/MaterialIcon';
import BreadCrumbs from 'components/BreadCrumbs';
import CarouselBottom from './CarouselBottom';
import CarouselTop from './CarouselTop';
import CardImg from './CardImg';
import CardImgShadow from './CardImgShadow';
import CardBottom from './CardBottom';
import CardTop from './CardTop';
import CarouselCards from './CarouselCards';
import CarouselBreadCrumbs from './CarouselBreadCrumbs';
import CarouselUX from './CarouselUX';
import H2 from './H2';
import H3 from './H3';
import Wrapper from './Wrapper';

class RixiCarousel extends React.PureComponent {
  state = {
    page: this.props.startPage || 1,
    amt: this.props.amt || 4,
    total: this.props.totalPages || 4,
  }

  componentWillMount() {
    //  TODO: if data prop isn't supplied, or if data is empty => display error component
    if (!this.props.onPageChange) return;
    this.props.onPageChange(this.state.page, this.state.amt);
  }

  changePage = (e, pageNum) => {
    const id = e.target ? e.target.id : 'manual';
    const currentPage = this.state.page;
    let newPage = currentPage;

    switch (id) {
      case 'increment':
        if (currentPage + 1 > this.state.total) return;
        newPage = currentPage + 1;
        break;
      case 'decrement':
        if (currentPage === 1) return;
        newPage = currentPage - 1;
        break;
      case 'manual':
        if (pageNum === currentPage) return;
        newPage = pageNum;
        break;
      default:
        newPage = currentPage;
    }

    this.props.onPageChange(newPage, this.state.amt);
    this.setState((prevState) => ({
      ...prevState,
      page: newPage,
    }));
  }

  render() {
    // console.log('<RixiCarousel />     Rendered!!!');
    // console.log('(components/RixiCarousel/)    this.props.data: ', this.props.data);   // eslint-disable-line no-console

    let CardTops;
    let CardBottoms;

    const hasData = this.props.data.length > 0;

    if (hasData) {
      const cards = this.props.data.reduce((acc, curr) => {
        const isFilm = curr.type === 'film';

        //  TODO: for increased reusability, take out component and supply to <RixiCarousel /> as a prop instead.
        const currTop = (
          <CardTop key={curr.uuid}>
            { this.props.onItemChange &&
              <MaterialIcon className="rate-icon" type="favorite" onClick={() => this.props.onItemChange(curr.uuid, this.state.page, this.state.amt)} />
            }
            { isFilm &&
              <a target="_blank" href={curr.itemData.platforms[0] ? curr.itemData.platforms[0].url : `https://www.google.com/search?q=${curr.name}+film`}>
                <MaterialIcon className="play-icon" type="play_circle_outline" />
              </a>
            }
            <CardImg src={(curr.itemData.image && curr.itemData.image.length > 0) ? curr.itemData.image : ''} />
            <CardImgShadow />
          </CardTop>
        );

        //  TODO: for increased reusability, take out component and supply to <RixiCarousel /> as a prop instead.
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
        <CarouselBreadCrumbs>
          <BreadCrumbs total={this.state.total} page={this.state.page} changePage={this.changePage} />
        </CarouselBreadCrumbs>
        <CarouselCards>
          <CarouselTop>
            <CarouselUX>
              <MaterialIcon className="left arrow" type="keyboard_arrow_left" onClick={this.changePage} id="decrement" />
              <MaterialIcon className="right arrow" type="keyboard_arrow_right" onClick={this.changePage} id="increment" />
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
  onPageChange: PropTypes.func,
  onItemChange: PropTypes.func,
};

export default RixiCarousel;
