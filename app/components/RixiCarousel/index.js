import React from 'react';
import PropTypes from 'prop-types';

import MaterialIcon from 'components/MaterialIcon';
import BreadCrumbs from 'components/BreadCrumbs';
import CarouselBottom from './CarouselBottom';
import CarouselTop from './CarouselTop';
import CarouselTopWrapper from './CarouselTopWrapper';
import CarouselCards from './CarouselCards';
import CarouselBreadCrumbs from './CarouselBreadCrumbs';
import CarouselUX from './CarouselUX';
import StyledTransitionGroup from './StyledTransitionGroup';
import Wrapper from './Wrapper';

class RixiCarousel extends React.PureComponent {
  state = {
    page: this.props.startPage || 1,
    amt: this.props.amt || 4,
    total: this.props.totalPages || 4,
    direction: 'right',
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

    let newDirection = 'right';
    if (newPage > currentPage) newDirection = 'right';
    if (newPage < currentPage) newDirection = 'left';

    this.props.onPageChange(newPage, this.state.amt);
    this.setState((prevState) => ({
      ...prevState,
      page: newPage,
      direction: newDirection,
    }));
  }

  render() {
    // console.log('<RixiCarousel />     Rendered!!!');
    let CardsMain;
    let CardsSub;

    const hasData = this.props.data.length > 0;

    if (hasData) {
      const MainComponent = this.props.mainComponent;
      const SubComponent = this.props.subComponent;

      const { main, sub } = this.props.data.reduce((acc, curr) => {
        const currMain = <MainComponent key={curr.uuid} item={curr} direction={this.state.direction} page={this.state.page} amt={this.state.amt} onItemChange={this.props.onItemChange} />;
        const currSub = <SubComponent key={curr.uuid} item={curr} direction={this.state.direction} />;
        return {
          main: [...acc.main, currMain],
          sub: [...acc.sub, currSub],
        };
      }, { main: [], sub: [] });

      CardsMain = main;
      CardsSub = sub;
    }
    // } else {
    //   //    ... render Error Component
    //   CardsMain = cards.top;
    //   CardsSub = cards.bottom;
    // }

    return (
      <Wrapper>
        <CarouselBreadCrumbs>
          <BreadCrumbs total={this.state.total} page={this.state.page} changePage={this.changePage} />
        </CarouselBreadCrumbs>
        <CarouselCards>
          <CarouselTopWrapper>
            <CarouselUX>
              <MaterialIcon className="left arrow" type="keyboard_arrow_left" onClick={this.changePage} id="decrement" />
              <MaterialIcon className="right arrow" type="keyboard_arrow_right" onClick={this.changePage} id="increment" />
            </CarouselUX>
            <CarouselTop>
              <StyledTransitionGroup>
                { CardsMain }
              </StyledTransitionGroup>
            </CarouselTop>
          </CarouselTopWrapper>
          <CarouselBottom>
            { CardsSub }
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
  mainComponent: PropTypes.any,
  subComponent: PropTypes.any,
  // errorComponent: PropTypes.any,
};

export default RixiCarousel;
