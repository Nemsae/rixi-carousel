
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import AppWrapper from './AppWrapper';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Content>
      <Footer />
    </AppWrapper>
  );
}
