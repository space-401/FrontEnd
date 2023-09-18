import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 700px;
  /* position: absolute;
  bottom: 72px;
  right: 10px; */
  padding: '8px';
  background-color: ${({ theme }) => theme.COLOR['gray-5']};
  border-radius: 10px;
`;
const SmallPhotoBox = styled.div<{ image?: string }>`
  width: 64px;
  height: 64px;
  border-radius: 5px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  ${flexCenter}
`;

const S = {
  Wrapper,
  SmallPhotoBox,
};

export default S;
