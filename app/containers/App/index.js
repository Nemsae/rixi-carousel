
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import MaterialIcon from 'components/MaterialIcon';

import AppWrapper from './AppWrapper';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import HeaderBar from './HeaderBar';
import H1 from './H1';
import P from './P';
// import messages from './messages';

export default function App() {
  return (
    <AppWrapper>
      <Header>
        <HeaderBar />
        <H1>
          <b>project</b><br />CAROUSEL
          {/* project<br /><b>CAROUSEL</b> */}
          {/* <FormattedMessage {...messages.header} /> */}
        </H1>
      </Header>

      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Content>

      <Footer>
        <HeaderBar />
        <P>
          made with<br /><b><a href="https://github.com/Nemsae" target="_blank">RIXI</a></b>
          <a href="https://github.com/Nemsae"><MaterialIcon color="red" type="favorite" /></a>
        </P>
      </Footer>
    </AppWrapper>
  );
}
