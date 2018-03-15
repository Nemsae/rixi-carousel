/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import MaterialIcon from 'components/MaterialIcon';

import H1 from './H1';
import Header from './Header';
import Wrapper from './Wrapper';
import messages from './messages';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Header>
          <MaterialIcon type="info_outline" />
          <H1>
            <FormattedMessage {...messages.header} />
          </H1>
        </Header>
      </Wrapper>
    );
  }
}
