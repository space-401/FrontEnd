import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div<{ isBackground: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  position: absolute;
  bottom: 80px;
  right: 20px;
  width: ${({ isBackground }) => !isBackground && '355px'};
  margin-top: 7px;
  padding: ${({ isBackground }) => isBackground && '8px'};
  background-color: ${({ theme, isBackground }) =>
    isBackground ? theme.COLOR['gray-5'] : 'none'};
  border-radius: 10px;
`;
const SmallPhotoBox = styled.div<{ image?: string }>`
  width: 63px;
  height: 63px;
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
