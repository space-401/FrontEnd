import styled from 'styled-components';
import {omitText} from '@styles/common';

const Wrapper = styled.div``;

const List = styled.li<{ select: boolean, grid:boolean }>`
  border-radius: ${({select}) => select ? 3 : 5}px;
  background: ${({select, theme}) => select ? theme.COLOR["gray-5"] : 'done'};
  line-height: 14px;
  padding: 6px 8px;
  cursor: pointer;
  transition: 0.2s background;
  width: 100%;

  &:hover {
    background-color: ${({theme}) => theme.COLOR['gray-5']};
    border-radius: ${({grid}) => grid ? 3 : 5}px;
  }

  [class*='MuiChip-label'] {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 2px 8px;
    white-space: nowrap;
  }
`;

const UserList = styled.div`
`;

const FlexUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
`;

const UserProfile = styled.div``;

const UserTiTle = styled.div`
  ${omitText};
  font-size: ${({theme})=>theme.TEXT_SIZE["text-14"]};
`;

const S = {
    Wrapper,
    UserProfile,
    UserList,
    UserTiTle,
    FlexUser,
    List,
};

export default S;
