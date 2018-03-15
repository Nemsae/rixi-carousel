import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import H1 from 'components/H1';
import RixiCarousel from 'components/RixiCarousel';
import HomeSection from './HomeSection';
import SectionH1 from './SectionH1';
import Wrapper from './Wrapper';

import { makeSelectRecommendations } from './selectors';
import { fetchRecommendations, rateRecommendation } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('(containers/HomePage)    this.props.recommendations: ', this.props.recommendations);
    return (
      <Wrapper>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

        <HomeSection>
          <SectionH1><FormattedMessage {...messages.recommendHeader} /></SectionH1>
          <RixiCarousel
            data={this.props.recommendations}
            totalPages={4}
            startPage={1}
            amt={4}
            onPageChange={this.props.fetchRecommendationsPage}
            onItemChange={this.props.changeRateRecommendation}
          />
        </HomeSection>

        <HomeSection>
          <SectionH1><FormattedMessage {...messages.featuredHeader} /></SectionH1>
          {/* <RixiCarousel data={this.props.recommendations} /> */}
        </HomeSection>

      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  recommendations: PropTypes.array,
  // recommendations: PropTypes.array,
  // loading: PropTypes.bool,
  // success: PropTypes.bool,
  // error: PropTypes.oneOfType([
  //   PropTypes.object,
  //   PropTypes.bool,
  // ]),

  fetchRecommendationsPage: PropTypes.func,
  changeRateRecommendation: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    fetchRecommendationsPage: (page, amt) => dispatch(fetchRecommendations(page, amt)),
    changeRateRecommendation: (id) => dispatch(rateRecommendation(id)),
  };
}

const mapStateToProps = createStructuredSelector({
  recommendations: makeSelectRecommendations(),
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
