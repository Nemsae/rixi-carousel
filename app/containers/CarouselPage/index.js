import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import RixiCarousel from 'components/RixiCarousel';
import CardBottom from 'components/CardBottom';
import CardTop from 'components/CardTop';

import HomeSection from './HomeSection';
import SectionH1 from './SectionH1';
import Wrapper from './Wrapper';

import { makeSelectRecommendations, makeSelectFeatures } from './selectors';
import { fetchRecommendations, rateRecommendation, fetchFeatures } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class CarouselPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    // console.log('<CarouselPage />     rendered!!!');
    return (
      <Wrapper>

        {/* ------ First Carousel ------ */}
        <HomeSection>
          <SectionH1><FormattedMessage {...messages.recommendHeader} /></SectionH1>
          <RixiCarousel
            data={this.props.recommendations}
            startPage={1}
            totalPages={4}
            amt={4}
            onPageChange={this.props.fetchRecommendationsPage}
            onItemChange={this.props.changeRateRecommendation}
            mainComponent={CardTop}
            subComponent={CardBottom}
            // errorComponent={CardError}
          />
        </HomeSection>

        {/* ------ Second Carousel ------ */}
        {/* <HomeSection>
          <SectionH1><FormattedMessage {...messages.featuredHeader} /></SectionH1>
          <RixiCarousel
            data={this.props.features}
            totalPages={6}
            startPage={2}
            amt={5}
            onPageChange={this.props.fetchFeaturesPage}
            mainComponent={CardTop}
            subComponent={CardBottom}
            // errorComponent={CardError}
          />
        </HomeSection> */}
      </Wrapper>
    );
  }
}

CarouselPage.propTypes = {
  recommendations: PropTypes.array,
  features: PropTypes.array,
  fetchRecommendationsPage: PropTypes.func,
  fetchFeaturesPage: PropTypes.func,
  changeRateRecommendation: PropTypes.func,
  // loading: PropTypes.bool,
  // success: PropTypes.bool,
  // error: PropTypes.oneOfType([
  //   PropTypes.object,
  //   PropTypes.bool,
  // ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    fetchRecommendationsPage: (page, amt) => dispatch(fetchRecommendations(page, amt)),
    fetchFeaturesPage: (page, amt) => dispatch(fetchFeatures(page, amt)),
    changeRateRecommendation: (id, page, amt) => dispatch(rateRecommendation(id, page, amt)),
  };
}

const mapStateToProps = createStructuredSelector({
  recommendations: makeSelectRecommendations(),
  features: makeSelectFeatures(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CarouselPage);
