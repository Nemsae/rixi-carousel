import styled from 'styled-components';

const BackgroundVideo = styled.video`
  ${''/* height: 100vh; */}
  height: 100%;
  max-width: 100%;

  background: pink;

  opacity: 1;

  transition: opacity 1100ms;

  &:hover {

  }
`;

export default BackgroundVideo;
