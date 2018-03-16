import styled from 'styled-components';

const Header = styled.div`
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #F7CA18;
  color: #000;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  height: 100%;
  padding-left: 30px;
  padding-right: 30px;

  .header-bar {
    background: #fff;
  }
`;

export default Header;
