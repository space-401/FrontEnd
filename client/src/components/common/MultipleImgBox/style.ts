import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  display: flex;
  gap: 7px;
  margin-top: 7px;
`;
const SmallPhotoBox = styled.div<{ image?: string }>`
  width: 64px;
  height: 64px;
  border-radius: 5px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  ${flexCenter}
  border:1px solid white;
`;

const S = {
  Wrapper,
  SmallPhotoBox,
};

export default S;
