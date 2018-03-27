/**
 * CarouselPage selectors
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

const makeSelectFeatures = () => createSelector(
  selectHome,
  (homeState) => {
    const featuresPrimitive = homeState.get('features');
    if (featuresPrimitive instanceof Array) return featuresPrimitive;
    return featuresPrimitive.toJS();
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
  makeSelectFeatures,
  makeSelectLoading,
  makeSelectSuccess,
  makeSelectError,
};
