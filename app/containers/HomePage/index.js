import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import BackgroundVideo from './BackgroundVideo';
import H2 from 'components/H2';
import Wrapper from './Wrapper';

import { makeSelectRecommendations, makeSelectFeatures } from './selectors';
import { fetchRecommendations, rateRecommendation, fetchFeatures } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    
  }

  render() {
    // console.log('<HomePage />     rendered!!!');
    return (
      <Wrapper>
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <BackgroundVideo autoPlay mute>
          <source src="images/rixi_20180110_012904.mp4" type="video/mp4" />
          Your browser does not support the mp4 video format.
        </BackgroundVideo>
        {/* eslint-ensable jsx-a11y/media-has-caption */}
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
