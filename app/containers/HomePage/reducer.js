import { fromJS } from 'immutable';

import {
  // RATE_RECOMMENDATION,
  // RATE_RECOMMENDATION_SUCCESS,
  // RATE_RECOMMENDATION_ERROR,
  GET_RECOMMENDATIONS,
  GET_RECOMMENDATIONS_SUCCESS,
  GET_RECOMMENDATIONS_ERROR,
} from './constants';

const initialState = fromJS({
  recommendations: [],
  loading: false,
  success: false,
  error: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECOMMENDATIONS:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
        // .set('recommendations', null);
    case GET_RECOMMENDATIONS_SUCCESS:
      return state
        .set('loading', false)
        .set('success', true)
        .set('error', false)
        .set('recommendations', action.data);
    case GET_RECOMMENDATIONS_ERROR:
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', true)
        .set('recommendations', action.data);
    default:
      return state;
  }
}

export default homeReducer;
