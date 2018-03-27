import { fromJS } from 'immutable';

import {
  GET_FEATURES,
  GET_FEATURES_SUCCESS,
  GET_FEATURES_ERROR,
  GET_RECOMMENDATIONS,
  GET_RECOMMENDATIONS_SUCCESS,
  GET_RECOMMENDATIONS_ERROR,
} from './constants';

const initialState = fromJS({
  recommendations: [],
  features: [],
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
    case GET_FEATURES:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case GET_FEATURES_SUCCESS:
      return state
        .set('loading', false)
        .set('success', true)
        .set('error', false)
        .set('features', action.data);
    case GET_FEATURES_ERROR:
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', true)
        .set('features', action.data);
    default:
      return state;
  }
}

export default homeReducer;
