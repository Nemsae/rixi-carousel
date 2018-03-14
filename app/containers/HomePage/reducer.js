import { fromJS } from 'immutable';

import {
  GET_RECOMMENDATIONS,
  GET_RECOMMENDATIONS_SUCCESS,
  GET_RECOMMENDATIONS_ERROR,
} from './constants';

const initialState = fromJS({
  recommendations: [],
  loading: false,
  success: false,
  error: false,

  // inputs: {
  //   time: '',
  //   date: '',
  //   latitude: '',
  //   longitude: '',
  // },
  // loading: false,
  // success: false,
  // error: false,
  // data: null,
  // message: messages.errorMessage,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    // case CHANGE_INPUT:
    //   return state
    //     .setIn(['inputs', action.id], action.value);
    // case CHANGE_MESSAGE:
    //   return state
    //     .set('message', action.message);
    // case CHANGE_LOADING:
    //   return state
    //     .set('loading', !state.loading);
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
