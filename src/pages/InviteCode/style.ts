import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  background-color: ${({ theme }) => theme.COLOR.black};
  color: ${({ theme }) => theme.COLOR.white};

  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${flexCenter};
    flex-direction: column;
  }
`;
const TitleSection = styled.div`
  padding-top: 2rem;
  width: 956px;
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
    ${flexCenter};
    flex-direction: column;
  }
`;

const Form = styled.form`
  width: 80%;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 60px 60px 60px;
  grid-gap: 32px;
  grid-template-areas: 'title1 input1' 'title2 input2' 'button button';

  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${flexCenter};
    flex-direction: column;
  }
`;

type gridRowNum = {
  number: number;
};

const TitleContainer = styled.div<gridRowNum>`
  padding: 5px;
  grid-area: ${({ number }) => `title${number}`};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  display: flex;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.COLOR.orange};
    padding-left: 0.5rem;
    font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  }
`;

const InputContainer = styled.div<gridRowNum>`
  grid-area: ${({ number }) => `input${number}`};
  display: flex;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${flexCenter};
    width: 400px;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    ${flexCenter};
    width: 200px;
  }
`;

const ButtonContainer = styled.div`
  grid-area: button;
  margin-left: auto;
`;

export const S = {
  Wrapper,
  TitleSection,
  Form,
  TitleContainer,
  InputContainer,
  ButtonContainer,
};
