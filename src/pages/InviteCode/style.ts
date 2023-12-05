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
    width: 100%;
    flex-direction: column;
  }
`;
const TitleSection = styled.div`
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
  width: 70%;
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
  ${flexCenter};
  flex-direction: column;
  height: 100px;
  span {
    color: ${({ theme }) => theme.COLOR.orange};
    padding-left: 0.5rem;
    font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  }
`;

const InputContainer = styled.div<gridRowNum>`
  grid-area: ${({ number }) => `input${number}`};
  display: flex;
  width: 400px;
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
  height: 100px;
  margin-top: 30px;
  width: 30%;
  margin-left: auto;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${flexCenter};
    flex-direction: column;
    width: 100vw;
    margin: 0;
  }
`;

export const S = {
  Wrapper,
  TitleSection,
  Form,
  TitleContainer,
  InputContainer,
  ButtonContainer,
};
