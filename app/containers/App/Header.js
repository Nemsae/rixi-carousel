import styled from 'styled-components';

const Header = styled.div`
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #F7CA18;
  color: #000;

  height: 100%;
  padding-left: 30px;
  padding-right: 30px;

  .header-bar {
    background: #fff;
  }
`;

export default Header;
