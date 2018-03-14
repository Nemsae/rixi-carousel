/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import RixiCarousel from 'components/RixiCarousel';

import SectionH1 from './SectionH1';
import Wrapper from './Wrapper';

import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

        <article>
          <SectionH1><FormattedMessage {...messages.recommendHeader} /></SectionH1>
          <RixiCarousel />
        </article>

      </Wrapper>
    );
  }
}
