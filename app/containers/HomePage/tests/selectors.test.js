import { fromJS } from 'immutable';

import { makeSelectRecommendations, makeSelectLoading, makeSelectSuccess, makeSelectError } from 'containers/HomePage/selectors';

describe('makeSelectRecommendations', () => {
  it('should select the recommendations array', () => {
    const home = fromJS({
      recommendations: [],
    });
    const mockedState = fromJS({
      home,
    });
    expect(makeSelectRecommendations()(mockedState)).toEqual(home.get('recommendations').toJS());
  });
});

describe('makeSelectLoading', () => {
  it('should select the loading value', () => {
    const home = fromJS({
      loading: false,
    });
    const mockedState = fromJS({
      home,
    });
    expect(makeSelectLoading()(mockedState)).toEqual(home.get('loading'));
  });
});

describe('makeSelectSuccess', () => {
  it('should select the loading value', () => {
    const home = fromJS({
      success: false,
    });
    const mockedState = fromJS({
      home,
    });
    expect(makeSelectSuccess()(mockedState)).toEqual(home.get('success'));
  });
});

describe('makeSelectError', () => {
  it('should select the loading value', () => {
    const home = fromJS({
      error: false,
    });
    const mockedState = fromJS({
      home,
    });
    expect(makeSelectError()(mockedState)).toEqual(home.get('error'));
  });
});
