/**
 * Sagas for:
 *  1. Get recommendations
 *  2. Rate a recommendation
 *
 */

import { call, take, put, select, takeLatest } from 'redux-saga/effects';   // eslint-disable-line no-unused-vars
import { GET_RECOMMENDATIONS } from 'containers/HomePage/constants';
import { recommendationsFetched, recommendationsFetchingError } from 'containers/HomePage/actions';

import request from 'utils/request';
// import { makeSelectInputs } from 'containers/HomePage/selectors';

// /**
//  * POST add new sensor with Dark Sky API
//  */
// export function* addSensor() {
//   const inputs = yield select(makeSelectInputs());
//   const requestURL = '/api/sensors/add';
//
//   try {
//     const response = yield call(request, requestURL, {
//       method: 'POST',
//       mode: 'cors',
//       redirect: 'follow',
//       body: JSON.stringify(inputs),
//       headers: new Headers({
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       }),
//     });
//     // console.log('response:addSensor::HomePage/saga.js ', response);
//     yield put(sensorCreated(response.data));
//   } catch (err) {
//     yield put(sensorCreatingError(err));
//   }
// }
//
// /**
//  * POST delete sensor with id
//  */
// export function* deleteSensor(action) {
//   // const requestURL = `/api/sensors/delete?id=${action.id}`;
//   const requestURL = `/api/sensors/${action.id}`;
//
//   try {
//     const response = yield call(request, requestURL, {
//       method: 'DELETE',
//     });
//     yield put(sensorDeleted(action.id));
//   } catch (err) {
//     yield put(sensorDeletingError(err));
//   }
// }

// GET localhost:3000/items/?p=${page}&amt=${amt}
/**
 * Fetch all recommendations
 */
export function* loadRecommendations() {
  const requestURL = `/items/?p=${1}&amt=${4}`;
  // const requestURL = `/items/?p=${page}&amt=${amt}`;
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
    });
    // console.log('(container/HomePage/saga.js) response:loadRecommendations: ', response);
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
  // yield takeLatest(DELETE_SENSOR, deleteSensor);
  yield takeLatest(GET_RECOMMENDATIONS, loadRecommendations);
}
