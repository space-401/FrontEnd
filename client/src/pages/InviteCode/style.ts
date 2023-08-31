import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-template-rows: 60px 60px 60px;
  grid-gap: 32px;
  grid-template-areas: 'title1 input1' 'title2 input2' 'button button';
`;

type gridRowNum = {
  number: number;
};

const TitleContainer = styled.div<gridRowNum>`
  padding: 5px;
  grid-area: ${({ number }) => `title${number}`};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  display: flex;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.PALETTE.red};
    padding-left: 0.5rem;
    font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
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

const S = {
  Wrapper,
  TitleContainer,
  InputContainer,
  ButtonContainer,
};

export default S;
