import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 628px;
  min-height: 268px;
  background-color: ${({ theme }) => theme.COLOR['gray-6']};
`;

const Text = styled.div`
  color: var(--grey-3, #868585);
  font-family: Pretendard;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  font-weight: 400;
`;

const Header = styled.div`
  height: 22px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
`;

const TagNum = styled.div`
  height: 43px;
  display: flex;
  padding-top: 10px;
  gap: 4px;
  p {
    color: ${({ theme }) => theme.COLOR.white};
  }
  span {
    color: ${({ theme }) => theme.COLOR.skyblue};
  }
`;

const List = styled.li<{ select: boolean; grid: boolean }>`
  color: white;
  border-radius: ${({ select }) => (select ? 3 : 5)}px;
  padding: 16px;
  cursor: pointer;
  transition: 0.2s background;
  display: flex;
  align-items: center;
  width: 50%;
  &:hover {
    background-color: #413f3f;
    border-radius: ${({ grid }) => (grid ? 3 : 5)}px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const S = {
  Wrapper,
  Text,
  Header,
  Body,
  TagNum,
  List,
  FlexContainer,
};
