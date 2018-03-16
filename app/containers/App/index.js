
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { changeLocale } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';

import MaterialIcon from 'components/MaterialIcon';
// import FlagIcon from 'components/FlagIcon';

import A from './A';
import AppWrapper from './AppWrapper';
import LangBar from './LangBar';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import HeaderBar from './HeaderBar';
import H1 from './H1';
import P from './P';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

import messages from './messages';

// export default function App() {
export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppWrapper>
        <Header>
          <HeaderLeft>
            <HeaderBar />
            <H1>
              {/* <b>project</b><br />CAROUSEL */}
              <b><FormattedMessage {...messages.header1} /></b><br /><FormattedMessage {...messages.header2} />
            </H1>
          </HeaderLeft>
          <HeaderRight>
            <LangBar>
              <A isActive={this.props.locale === 'en'} role="button" tabIndex={0} onClick={() => this.props.changeLocaleLang('en')}><span>EN</span></A>
              <A isActive={this.props.locale === 'es'} role="button" tabIndex={0} onClick={() => this.props.changeLocaleLang('es')}><span>ES</span></A>
              <A isActive={this.props.locale === 'ko'} role="button" tabIndex={0} onClick={() => this.props.changeLocaleLang('ko')}><span>KO</span></A>
            </LangBar>
            <HeaderBar />
          </HeaderRight>
        </Header>

        <Content>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Content>

        <Footer>
          {/* <FlagIcon code="us" size="3x" />
          <FlagIcon code="es" size="3x" />
          <FlagIcon code="kr" size="3x" /> */}
          <HeaderBar />
          <P>
            <FormattedMessage {...messages.footer} /><br /><b><a href="https://github.com/Nemsae" target="_blank">RIXI</a></b>
            <a href="https://github.com/Nemsae"><MaterialIcon color="red" type="favorite" /></a>
          </P>
        </Footer>
      </AppWrapper>
    );
  }
}

App.propTypes = {
  locale: PropTypes.string,
  changeLocaleLang: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    changeLocaleLang: (lang) => dispatch(changeLocale(lang)),
  };
}

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect
)(App);
