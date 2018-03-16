import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

// import H1 from 'components/H1';
import RixiCarousel from 'components/RixiCarousel';

// import Header from './Header';
import HomeSection from './HomeSection';
import SectionH1 from './SectionH1';
import Wrapper from './Wrapper';

import { makeSelectRecommendations, makeSelectFeatures } from './selectors';
import { fetchRecommendations, rateRecommendation, fetchFeatures } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>

        {/* ------ First Carousel ------ */}
        <HomeSection>
          <SectionH1><FormattedMessage {...messages.recommendHeader} /></SectionH1>
          <RixiCarousel
            data={this.props.recommendations}
            totalPages={4}
            startPage={1}
            amt={4}
            onPageChange={this.props.fetchRecommendationsPage}
            onItemChange={this.props.changeRateRecommendation}
            // component={}
          />
        </HomeSection>

        {/* ------ Second Carousel ------ */}
        <HomeSection>
          <SectionH1><FormattedMessage {...messages.featuredHeader} /></SectionH1>
          <RixiCarousel
            data={this.props.features}
            totalPages={6}
            startPage={2}
            amt={5}
            onPageChange={this.props.fetchFeaturesPage}
          />
        </HomeSection>
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
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
)(HomePage);
