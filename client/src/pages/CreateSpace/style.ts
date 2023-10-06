import { flexCenter } from '@/styles/common';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  @media ${({ theme }) => theme.DEVICE.tablet} {
    flex-direction: column;
    ${flexCenter}
  }
`;

const Form = styled.div`
  width: 960px;
  padding-top: 2rem;
  padding-bottom: 2.5rem;
  color: white;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    flex-direction: column;
    display: flex;
    ${flexCenter}
  }

  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-template-rows: 160px 60px 160px 60px 44px;
  grid-gap: 32px;
  grid-template-areas: 'title1 input1' 'title2 input2' 'title3 input3' 'title4 input4' 'empty button';
`;

const TitleSection = styled.div`
  padding-top: 2rem;
  width: 960px;
  div {
    font-size: ${({ theme }) => theme.TEXT_SIZE['text-24']};
    color: ${({ theme }) => theme.COLOR.white};
  }
  p {
    padding-top: 5px;
    font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
    color: rgba(255, 255, 255, 0.6);
  }
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${flexCenter}
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ITitle {
  number: number;
  required: boolean;
}

interface IInput {
  number: number;
}

const TitleContainer = styled.div<ITitle>`
  padding: 5px;
  grid-area: ${({ number }) => `title${number}`};
  display: flex;
  ${({ required }) =>
    required &&
    css`
      &::after {
        content: '(필수)';
        color: ${({ theme }) => theme.COLOR.orange};
        padding-left: 0.5rem;
        padding-top: 0.2rem;
        font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
      }
    `}
`;

const InputContainer = styled.div<IInput>`
  grid-area: ${({ number }) => `input${number}`};
  display: flex;
  position: relative;
`;

const EmptyContainer = styled.div`
  grid-area: empty;
`;

const ButtonContainer = styled.div<{ paddingLeft: number }>`
  grid-area: button;
  padding-left: ${({ paddingLeft }) => paddingLeft}px;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    margin-left: 0;
  }
`;

const EditButton = styled.div`
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  color: ${({ theme }) => theme.COLOR.skyblue};
  padding-top: 140px;
  padding-left: 10px;
  position: absolute;
  left: 170px;
`;

const S = {
  Wrapper,
  Form,
  TitleContainer,
  InputContainer,
  ButtonContainer,
  EditButton,
  FlexContainer,
  TitleSection,
  EmptyContainer,
};

export default S;
