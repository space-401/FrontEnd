import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  position: relative;
`;

const GridWrapper = styled.div`
  width: 50%;
  margin-left: 4rem;
  /* padding-top: 2.5rem; */
  padding-bottom: 2.5rem;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 60px 60px 60px 60px 60px 212px 60px;
  grid-gap: ${({ theme }) => theme.SPACING['gap-32']};
  grid-template-areas: 'spacename spacename' 'title1 input1' 'title2 input2' 'title3 input3' 'title4 input4' 'title5 input5' 'title6 input6';
`;

const PhotoText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

interface ITitle {
  number: number;
  required: boolean;
}

interface IInput {
  number: number;
}

const Label = styled.label<ITitle>`
  padding: 5px;
  grid-area: ${({ number }) => `title${number}`};
  display: flex;
  /* flex-direction: column; */
  ${({ required }) =>
    required &&
    css`
      &::after {
        content: '필수';
        color: ${({ theme }) => theme.COLOR.red};
        padding-left: 0.5rem;
        padding-top: 0.2rem;
        font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
      }
    `}
`;

const InputContainer = styled.div<IInput>`
  grid-area: ${({ number }) => `input${number}`};
  display: flex;
`;

const SpaceInfoContainer = styled.div`
  grid-area: spacename;
  display: flex;
  align-items: center;
  div {
    padding-left: 20px;
  }
`;

const PostButtonWrapper = styled.div`
  position: absolute;
  right: 0;
`;

const S = {
  Wrapper,
  GridWrapper,
  PhotoText,
  Label,
  InputContainer,
  SpaceInfoContainer,
  PostButtonWrapper,
};
export default S;
