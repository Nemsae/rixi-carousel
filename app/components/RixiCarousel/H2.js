import NormalH2 from 'components/H2';

const H2 = NormalH2.extend`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  margin: 0;
`;

export default H2;
