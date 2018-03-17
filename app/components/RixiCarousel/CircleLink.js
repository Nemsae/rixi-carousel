import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class CircleLink extends React.PureComponent {
  goToPage = () => {
    this.props.onClick(false, this.props.pageNum);
  };

  render() {
    const CircleLinkPrimitive = styled.a`
    border: 1px solid #fff;
    border-radius: 10px;

    cursor: pointer;

    height: 10px;
    width: 10px;

    &:hover {
      background: #fff;
    }

    ${this.props.active && `
      background: #fff;
     `}
    `;

    return <CircleLinkPrimitive onClick={this.goToPage} />;
  }
}

CircleLink.propTypes = {
  pageNum: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CircleLink;
