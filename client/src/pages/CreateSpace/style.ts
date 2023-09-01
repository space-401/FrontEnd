import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-template-rows: 160px 60px 160px 60px 44px;
  grid-gap: 32px;
  grid-template-areas: 'title1 input1' 'title2 input2' 'title3 input3' 'title4 input4' 'empty button';
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
    color: ${({ theme }) => theme.COLOR.red};
    padding-left: 0.5rem;
    font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  }
`;

const InputContainer = styled.div<gridRowNum>`
  grid-area: ${({ number }) => `input${number}`};
  display: flex;
`;

const ButtonContainer = styled.div`
  grid-area: button;
  margin-left: auto;
`;

const EditButton = styled.div`
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  color: ${({ theme }) => theme.COLOR.blue};
  padding-top: 140px;
  padding-left: 10px;
`;

const S = {
  Wrapper,
  TitleContainer,
  InputContainer,
  ButtonContainer,
  EditButton,
};

export default S;
