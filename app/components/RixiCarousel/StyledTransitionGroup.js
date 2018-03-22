import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';

const TransitionGroup = ({ children, className }) => (
  <CSSTransitionGroup
    transitionName="main-transition"
    transitionAppear
    transitionAppearTimeout={500}
    // transitionEnter={false}
    transitionEnterTimeout={500}
    // transitionLeave={false}
    transitionLeaveTimeout={300}
    className={className}     //  eslint-disable-line react/jsx-no-duplicate-props
  >
    { children }
  </CSSTransitionGroup>
);

TransitionGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

const StyledTransitionGroup = styled(TransitionGroup)`
  display: flex;
  justify-content: space-between;

  .main-transition-enter {
    opacity: 0.01;
    transform: translate3d(500%, 0, 0);
  }

  .main-transition-enter.main-transition-enter-active {
    opacity: 1;
    transition: all 500ms ease-in;
  }

  .main-transition-leave {
    opacity: 1;
  }

  .main-transition-leave.main-transition-leave-active {
    opacity: 0.01;
    transform: translate3d(-500%, 0, 0);
    transition: all 300ms ease-in;
  }

  .main-transition-appear {
    opacity: 0.01;
  }

  .main-transition-appear.main-transition-appear-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
`;


export default StyledTransitionGroup;
