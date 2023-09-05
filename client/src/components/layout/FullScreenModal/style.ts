import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 60px;
  min-height: 100vh;
  ${flexCenter}
  flex-direction: column;
  background-color: #171717;
`;

const TitleSection = styled.div<{ isTitle: boolean }>`
  padding-top: 2rem;
  width: 50%;
  div {
    font-size: ${({ theme }) => theme.TEXT_SIZE['text-24']};
  }
  p {
    padding-top: 5px;
    font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
    color: rgba(255, 255, 255, 0.6);
  }
  padding-bottom: 1rem;
  border-bottom: ${({ isTitle }) =>
    isTitle ? '1px solid rgba(255, 255, 255, 0.15)' : 'none'};
`;

const DeleteIconContainer = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
`;
const S = {
  Wrapper,
  TitleSection,
  DeleteIconContainer,
};

export default S;
