/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectRecommendations = () => createSelector(
  selectHome,
  (homeState) => {
    const recommendationsPrimitive = homeState.get('recommendations');
    if (recommendationsPrimitive instanceof Array) return recommendationsPrimitive;
    return recommendationsPrimitive.toJS();
  }
);

const makeSelectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading')
);

const makeSelectSuccess = () => createSelector(
  selectHome,
  (homeState) => homeState.get('success')
);

const makeSelectError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);

export {
  selectHome,
  makeSelectRecommendations,
  makeSelectLoading,
  makeSelectSuccess,
  makeSelectError,
};
