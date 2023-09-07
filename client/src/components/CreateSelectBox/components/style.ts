import styled from 'styled-components';
import { omitText } from '@styles/common';

const Wrapper = styled.div``;

const List = styled.li<{ select: boolean; grid: boolean }>`
  border-radius: ${({ select }) => (select ? 3 : 5)}px;
  background: ${({ select, theme }) =>
    select ? theme.COLOR['gray-4'] : 'done'};
  line-height: 14px;
  padding: 16px;
  cursor: pointer;
  transition: 0.2s background;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.COLOR['gray-6']};
    border-radius: ${({ grid }) => (grid ? 3 : 5)}px;
  }
`;

const UserList = styled.div``;

const FlexUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
`;

const UserProfile = styled.div``;

const UserTiTle = styled.div`
  ${omitText};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
`;

const TagTitle = styled.div`
  ${omitText}
`;

const TagGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DeleteButton = styled.div``;

const S = {
  Wrapper,
  UserProfile,
  UserList,
  UserTiTle,
  FlexUser,
  List,
  TagTitle,
  TagGroup,
  DeleteButton,
};

export default S;
