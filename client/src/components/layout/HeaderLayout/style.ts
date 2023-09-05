import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #171717;
  min-height: 100vh;
  width: 100%;
  flex-grow: 1; /* 자식 요소에 맞게 늘어나도록 설정 */
  margin-bottom: 100px;
`;

const HeaderWrapper = styled.div`
  margin: 32px 32px 0 32px;
  height: 64px;
  ${flexCenter}
  div {
    margin: 3.5px;
  }
`;

const IconBox = styled.div<{ padding?: number }>`
  background-color: #292a2f;
  height: inherit;
  width: 160px;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  svg {
    padding-left: ${(props) => (props.padding ? props.padding : 0)}px;
  }
`;

const SpaceBox = styled.div`
  width: calc(100% - 320px);
  min-width: 200px;
  height: inherit;
  background-color: #292a2f;
  ${flexCenter};
  border-radius: 15px;
`;

const ContentWrapper = styled.div<{ $isContentBox: boolean }>`
  background-color: '#292a2f'
    ${({ $isContentBox }) => ($isContentBox ? '#292a2f' : 'none')};
  margin: 10px 32px 32px 32px;
  border-radius: 30px;
  min-height: 100vh;
`;

const S = {
  HeaderWrapper,
  Wrapper,
  IconBox,
  SpaceBox,
  ContentWrapper,
};

export default S;
