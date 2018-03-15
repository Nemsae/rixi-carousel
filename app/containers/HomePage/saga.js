/**
 * Sagas for:
 *  1. Get recommendations
 *  2. Rate a recommendation
 *
 */

import { call, take, put, select, takeLatest } from 'redux-saga/effects';   // eslint-disable-line no-unused-vars
import { GET_RECOMMENDATIONS, RATE_RECOMMENDATION } from 'containers/HomePage/constants';
import { recommendationRated, recommendationRatingError, recommendationsFetched, recommendationsFetchingError } from 'containers/HomePage/actions';

import request from 'utils/request';
// import { makeSelectInputs } from 'containers/HomePage/selectors';

/**
 * POST     change rating to an item
 */
export function* rateRecommendation(action) {
  const requestURL = `/items/${action.id}`;

  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      // body: 'like',

      // mode: 'cors',
      // redirect: 'follow',
      body: JSON.stringify({ rating: 'like' }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    });
    console.log('(container/HomePage/saga.js)     rateRecommendation:response ', response);     //  eslint-disable-line no-console
    //  Call with existing state values for page and amt

    // loadRecommendations
    yield put(recommendationRated());
  } catch (err) {
    yield put(recommendationRatingError(err));
  }
}

/**
 * GET    Fetch all recommendations
 */
export function* loadRecommendations(action) {
  const requestURL = `/items/?page=${action.page}&amt=${action.amt}`;
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
    });
    // console.log('(container/HomePage/saga.js) response:loadRecommendations: ', response);     //  eslint-disable-line no-console
    yield put(recommendationsFetched(response));
  } catch (err) {
    // console.log('(container/HomePage/saga.js) err:loadRecommendations: ', err);
    yield put(recommendationsFetchingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* sensorsData() {
  // Watches for GET_RECOMMENDATIONS actions and calls loadRecommendations when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount

  // yield takeLatest(CREATE_SENSOR, addSensor);
  yield takeLatest(RATE_RECOMMENDATION, rateRecommendation);
  yield takeLatest(GET_RECOMMENDATIONS, loadRecommendations);
}
