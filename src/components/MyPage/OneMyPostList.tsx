import { getFormatDate } from '@utils/formatter';
import { A } from '@components/MyPage/style';
import Avatars from '@components/common/AvatarGroup/Avatars';
import { useDetailModalOpen } from '@hooks/common/useDetailModalOpen';
import type { OneMyPostType } from '@type/user.type';
import { useState } from 'react';
import S from '@modal/Detail/style';
import { ReactComponent as MenuSvg } from '@assets/svg/menu.svg';
import { PATH } from '@constants/path';
import { useNavigate } from 'react-router-dom';
import { useConfirmModalOpen } from '@hooks/common/useConfirmModalOpen';
import { toastColorMessage } from '@utils/toastMessage';

const OneMyPostList = ({ items }: { items: OneMyPostType }) => {
  const {
    postCommentCount,
    postTitle,
    postCreatedAt,
    postId,
    selectedUsers,
    spaceId,
  } = items;
  const [isSettingMode, setIsSettingMode] = useState(false);

  const detailModalOpen = useDetailModalOpen();

  const navigate = useNavigate();

  const confirmModalOpen = useConfirmModalOpen();

  const DeleteAction = () => {
    toastColorMessage('삭제되었습니다.');
  };

  const deleteConfirmOpen = () => {
    confirmModalOpen({
      isPositiveModal: false,
      titleMessage: '이 게시글을 삭제하시겠습니까?',
      closeMessage: '취소',
      ApproveMessage: '삭제',
      AsyncAction: DeleteAction,
    });
  };

  return (
    <tr key={postId + postCommentCount + postCreatedAt}>
      <td onClick={() => detailModalOpen(postId)}>{postTitle}</td>
      <td>{getFormatDate(postCreatedAt)}</td>
      <td>
        <A.AvatarBox>
          <Avatars fontSize={10} size={17.5} users={selectedUsers} max={5} />
        </A.AvatarBox>
      </td>
      <td>
        <S.CommentDeleteIconBox onClick={() => setIsSettingMode(true)}>
          <MenuSvg width={16} height={16} />
        </S.CommentDeleteIconBox>
        <S.ManagementList>
          <S.BackClickBlock
            isOpen={isSettingMode}
            onClick={() => {
              setIsSettingMode(false);
            }}
          />
          <S.MenuGroup top={1} width={87} isOpen={isSettingMode}>
            <S.MenuButton
              padding={'4px 8px'}
              fontSize={12}
              onClick={() => {
                navigate(PATH.POST_UPDATE(spaceId, postId));
              }}
            >
              게시물 수정
            </S.MenuButton>
            <S.MenuButton
              padding={'4px 8px'}
              fontSize={12}
              onClick={() => deleteConfirmOpen()}
            >
              게시물 삭제
            </S.MenuButton>
          </S.MenuGroup>
        </S.ManagementList>
      </td>
    </tr>
  );
};

export default OneMyPostList;
