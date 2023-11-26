import { Box, Modal } from '@mui/material';
import { v4 as uuid } from 'uuid';
import S from './style';

//한 옵션 타입
type OneOptionType = {
  title: string;
  asyncFunc: () => void;
};

type IconModalPropsType = {
  isOpen: boolean;
  modalClose: () => void;
  title: string;
  selectOptionArr: OneOptionType[];
};

export const SelectIconModal = ({
  isOpen,
  modalClose,
  title,
  selectOptionArr,
}: IconModalPropsType) => {
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
          <S.Content fontSize={22} lightgrey={false}>
            {title}
          </S.Content>
          {selectOptionArr.map((option) => {
            return (
              <S.Content
                key={uuid()}
                fontSize={18}
                lightgrey={false}
                onClick={option.asyncFunc}
              >
                {option.title}
              </S.Content>
            );
          })}
          <S.Content fontSize={18} lightgrey={true} onClick={modalClose}>
            닫기
          </S.Content>
        </S.Wrapper>
      </Box>
    </Modal>
  );
};
