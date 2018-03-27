import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('<Header />', () => {
  it('should render an <header> tag', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.type()).toEqual('header');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Header id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
