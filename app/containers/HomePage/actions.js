import {
  GET_RECOMMENDATIONS,
  GET_RECOMMENDATIONS_SUCCESS,
  GET_RECOMMENDATIONS_ERROR,
} from './constants';

/**
 * Fetches recommendations given page num and amount
 *
 * @param  {number} page The page number of the carousel
 * @param  {number} amt The number of items per page
 *
 * @return {object}    An action object with a type of GET_RECOMMENDATIONS
 */
export function fetchRecommendations(page, amt) {
  // console.log('page: ', page);
  // console.log('amt: ', amt);
  return {
    type: GET_RECOMMENDATIONS,
    page,
    amt,
  };
}

/**
 * Dispatched when recommendations are succesfully retrieved
 *
 * @param  {array} data The recommendations data
 *
 * @return {object}      An action object with a type of GET_RECOMMENDATIONS_SUCCESS passing the data
 */
export function recommendationsFetched(data) {
  return {
    type: GET_RECOMMENDATIONS_SUCCESS,
    data,
  };
}

/**
 * Dispatched when fetching recommendations fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of GET_RECOMMENDATIONS_ERROR passing the error
 */
export function recommendationsFetchingError(error) {
  return {
    type: GET_RECOMMENDATIONS_ERROR,
    data: error,
  };
}
