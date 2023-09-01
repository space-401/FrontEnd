import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;
  padding-top: 150px;

  ${flexCenter}
  flex-direction: column;
`;

const TitleSection = styled.div`
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
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
