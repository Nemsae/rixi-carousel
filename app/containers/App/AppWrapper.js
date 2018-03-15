import styled from 'styled-components';

const AppWrapper = styled.div`
  display: grid;
  grid-template-areas: 'header'
  'content'
  'footer';
  grid-template-rows: 80px auto 60px;

  height: 100vh;
`;

export default AppWrapper;
