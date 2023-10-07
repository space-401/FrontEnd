import { Box } from '@mui/material';
import React from 'react';
import { M } from '@/components/common/UserSettingModal/style';
import { ReactComponent as DeleteIcon } from '@assets/svg/whiteDeleteIcon.svg';
import { useUserStore } from '@store/user';
import ImgEditModal from '@/components/Create/ImageEditModal/ImageEditModal';
import { ImageArrType } from '@/types/image.type';
import { useState, useRef } from 'react';
import { ImageType } from '@/types/image.type';
import BasicBox from '@/components/common/BasicBox';
import { ReactComponent as PhotoIcon } from '@assets/svg/photoIcon.svg';
import CircleIcon from '@/components/common/CircleIcon/CircleIcon';
import InputBox from '@/components/common/InputBox';
import CharacterCounter from '@/components/Create/CharacterCounter';
import { theme } from '@/styles/theme/theme';

type ProfileModalType = {
  ModalClose: () => void;
};

const UserSettingModal = React.forwardRef((props: ProfileModalType, ref) => {
  const { ModalClose } = props;
  const { getState } = useUserStore;
  const { user } = getState();
  console.log(user);
  const [nickName, setNickName] = useState('');

  const SubmitAction = () => {
    // 변경 완료시 누를 버튼
    const newUserInfo = {
      id: user?.id,
      img: imageArr.convertedImages[0],
      nickname: nickName,
      token_key: user?.token_key,
    };
    console.log(newUserInfo);
    ModalClose();
  };

  //이미지 저장하는 곳
  const [imageArr, setImageArr] = useState<ImageArrType>({
    images: [],
    cropImages: [],
    convertedImages: [],
  });

  const [isImageModalOpen, setImageModalOpen] = useState(false);

  const onToggleModal = () => {
    setImageModalOpen((prev) => !prev);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickName(value);
  };
  //파일 변경 함수
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (!files) return;
    //여러개의 파일을 하나씩 순회하여 읽어오기
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        const newObj: ImageType = {
          id: 1,
          img: result,
        };
        setImageArr((prev: ImageArrType) => ({ ...prev, images: [newObj] }));
      }
    };
    reader.readAsDataURL(files[0]);
  };

  //자식 inputRef 요소를 클릭하는 함수
  const onClickImgEditModal = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
    setImageModalOpen(true);
  };

  return (
    <>
      {isImageModalOpen && (
        <ImgEditModal
          imageArr={imageArr}
          setImageArr={setImageArr}
          isCircle={true}
          setImageModalOpen={setImageModalOpen}
        />
      )}
      <Box sx={{ backgroundColor: 'transparent' }} tabIndex={-1} ref={ref}>
        <M.Container>
          <M.ModalTop>
            프로필을 수정해 주세요.
            <M.DeleteIconBox>
              <DeleteIcon onClick={ModalClose} />
            </M.DeleteIconBox>
          </M.ModalTop>
          <M.ModalMain>
            <M.LeftImgSection>
              {imageArr.images.length == 0 ? (
                <M.ImgBox>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      handleFileChange(e);
                    }}
                    ref={inputRef}
                  />
                  <BasicBox
                    width={160}
                    borderradius={80}
                    onClick={onClickImgEditModal}
                  >
                    <PhotoIcon />
                  </BasicBox>
                </M.ImgBox>
              ) : (
                <M.ImgBox>
                  <CircleIcon size={160} img_url={imageArr.cropImages[0]} />
                </M.ImgBox>
              )}
              {imageArr.images.length > 0 && (
                <M.ImgButton onClick={onToggleModal}>편집하기</M.ImgButton>
              )}
            </M.LeftImgSection>
            <M.RightUserNameSection>
              <M.NickName>닉네임</M.NickName>
              <InputBox
                height={60}
                width={250}
                maxLength={10}
                paddingLeft={60}
                type="text"
                onChange={(e) => {
                  onChange(e);
                }}
                name="nickname"
                readonly={false}
                children={
                  <CharacterCounter
                    color={theme.COLOR['gray-3']}
                    currentNum={nickName.length}
                    maxNum={10}
                  />
                }
              />
            </M.RightUserNameSection>
          </M.ModalMain>
          <M.ModalFooter>
            <M.SubmitButton onClick={SubmitAction}>완료</M.SubmitButton>
          </M.ModalFooter>
        </M.Container>
      </Box>
    </>
  );
});

export default UserSettingModal;
