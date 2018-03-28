import styled from 'styled-components';

import { opaqueIn } from 'utils/KeyFrames';

const BackgroundVideo = styled.video`
  ${''/* height: 100vh; */}
  height: 100%;
  max-width: 100%;

  background: transparent;

  animation: ${opaqueIn()} 11100ms;

  ${'' /* opacity: 0;
  transition: opacity 1100ms;
  &.fade-in {
    opacity: 1;
  } */}

  &:hover {
  }
`;

export default BackgroundVideo;
