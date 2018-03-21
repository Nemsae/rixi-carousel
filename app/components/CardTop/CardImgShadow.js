import styled from 'styled-components';

const CardImgShadow = styled.div.attrs({ className: 'card-image__shadow' })`
  position: absolute;
  top: 0;

  ${'' /* box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8),
  0px 0px 0px rgba(0, 0, 0, 0.8),
  0px 0px 0px rgba(0, 0, 0, 0.8),
  inset 0px -60px 60px rgba(0, 0, 0, 0.8); */}
  box-shadow: inset 0px -60px 60px rgba(0, 0, 0, 0.8);
  transition: all 350ms;

  height: 283px;
  width: 224px;
`;

export default CardImgShadow;
