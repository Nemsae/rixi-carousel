import styled from 'styled-components';

const LangBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;

  span {
    font-size: 12px;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }

  ${'' /* a {
    display: flex;
    color: #000;

    &:visited {
      color: #000;
    }
  } */}
`;

export default LangBar;
