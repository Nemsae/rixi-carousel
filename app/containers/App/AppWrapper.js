import styled from 'styled-components';

const AppWrapper = styled.div`
  display: grid;
  grid-template-areas: 'header'
  'content'
  'footer';
  grid-template-rows: 100px auto 50px;

  height: 100vh;
`;

export default AppWrapper;
