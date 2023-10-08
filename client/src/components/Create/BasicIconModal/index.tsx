import { Modal, Box } from '@mui/material';
import S from '@/components/Create/BasicIconModal/style';
import { ReactComponent as DeleteIcon } from '@/assets/svg/deleteIcon.svg';
import BasicButton from '@/components/common/BasicButton';
// import { SetStateAction, Dispatch } from 'react';
import BasicIcon from './BasicIcon';
// import { useState } from 'react';
// import { onConvertToFile } from '@/utils/fileConvertor';

type BasicIconModalPropsType = {
  isOpen: boolean;
  modalClose: () => void;
  setSelectIconIdx: any;
  selectIconIdx: any;
};

const BasicIconModal = ({
  isOpen,
  modalClose,
  setSelectIconIdx,
  selectIconIdx,
}: BasicIconModalPropsType) => {
  const BasicIconArr = BasicIcon();

  // const [selectIconIdx, setSelectIconIdx] = useState(0);

  const onSubmitImg = () => {
    // setIsBasicImg(true, selectIconIdx);
    // const fileImg = onConvertToFile(BasicIconArr[selectIconIdx], 'spaceImage');
    // setFileImg(fileImg);
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
