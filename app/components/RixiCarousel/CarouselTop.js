import styled from 'styled-components';

const CarouselTop = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;

  margin-bottom: 24px;

  div.carousel__card-top + div.carousel__card-top {
    margin-left: 30px;
  }
`;

export default CarouselTop;
