import { Modal, Box } from '@mui/material';
import S from '@/components/Create/BasicIconModal/style';
import { ReactComponent as DeleteIcon } from '@/assets/svg/deleteIcon.svg';
import BasicButton from '@/components/common/BasicButton';
import BasicIcon from './BasicIcon';
import React from 'react';
import { v4 } from 'uuid';

type BasicIconModalPropsType = {
  isOpen: boolean;
  modalClose: () => void;
  setSelectIconIdx: React.Dispatch<number>;
  selectIconIdx: number;
};

//프로필 기본 이미지 선택
const BasicIconModal = ({
  isOpen,
  modalClose,
  setSelectIconIdx,
  selectIconIdx,
}: BasicIconModalPropsType) => {
  const BasicIconArr = BasicIcon();

  const onSubmitImg = () => {
    modalClose();
  };

  return (
    <Modal
      open={isOpen}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
        },
      }}
    >
      <Box tabIndex={-1}>
        <S.Wrapper>
          <S.Text>아이콘을 선택하세요</S.Text>
          <S.IconBoxWrapper>
            {BasicIconArr.map((icon, index) => {
              return (
                <S.IconBox
                  key={v4()}
                  backImg={icon}
                  isSelected={selectIconIdx == index}
                  onClick={() => {
                    setSelectIconIdx(index);
                  }}
                />
              );
            })}
          </S.IconBoxWrapper>
          <DeleteIcon
            style={{
              position: 'absolute',
              right: 20,
              top: 20,
              cursor: 'pointer',
            }}
            onClick={modalClose}
          />
          <S.SubmitBtnWrapper>
            <BasicButton width={76} onClick={onSubmitImg} fontSize={16}>
              확인
            </BasicButton>
          </S.SubmitBtnWrapper>
        </S.Wrapper>
      </Box>
    </Modal>
  );
};
export default BasicIconModal;
