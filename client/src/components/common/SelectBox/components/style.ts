import styled from "styled-components";
import {omitText} from "@styles/common";

const Wrapper = styled.div`
`

const List = styled.li`
  line-height: 14px;
  padding: 7px 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.COLOR["gray-5"]};
  }

  [class*="MuiChip-label"] {
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 8px;
    padding-right: 8px;
    white-space: nowrap;
  }
`

const UserList = styled.div<{ $select: boolean }>`
`

const FlexUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
`

const UserProfile = styled.div`
`

const UserTiTle = styled.div`
  ${omitText};
`

const S = {
    Wrapper,
    UserProfile,
    UserList,
    UserTiTle,
    FlexUser,
    List
}

export default S