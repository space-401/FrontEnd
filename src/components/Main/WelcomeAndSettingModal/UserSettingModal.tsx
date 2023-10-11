import { S, M } from '@/components/Main/WelcomeAndSettingModal/style';
import { useRef, useState } from 'react';
import { ImageArrType } from '@/types/image.type';
import { ImageType } from '@/types/image.type';
import CircleIcon from '@/components/common/CircleIcon/CircleIcon';
import InputBox from '@/components/common/InputBox';
import CharacterCounter from '@/components/Create/CharacterCounter';
import { ReactComponent as ProfileMock } from '@assets/svg/profileMock.svg';
import BasicButton from '@/components/common/BasicButton';
import ImgEditModal from '@/components/Create/ImageEditModal/ImageEditModal';
import { Box } from '@mui/material';
import { UserType } from '@/types/post.type';
import { makeObj } from '@/utils/makeObj';
import { useConfirmModalOpen } from '@/hooks/common/useConfirmModalOpen';

type SettingModalProps = {
  ModalClose: () => void;
  userNames: string[];
  userInfo?: UserType;
};

//프로필 기본 이미지 선택
const UserSettingModal = ({
  ModalClose,
  userNames,
  userInfo,
}: SettingModalProps) => {
  const [nickName, setNickName] = useState(userInfo ? userInfo.userName : '');
  const [imageArr, setImageArr] = useState<ImageArrType>({
    images: userInfo ? makeObj([userInfo.imgUrl!]) : [],
    cropImages: userInfo ? [userInfo.imgUrl!] : [],
    convertedImages: [],
  });
  const [errorMsg, setErrorMsg] = useState<string | null>();

  const [isImageModalOpen, setImageModalOpen] = useState(false);

  const onImageModalOpen = () => {
    setImageModalOpen(true);
  };

  const checkAlreadyNickname = () => {
    if (userNames.includes(nickName) && nickName !== userInfo?.userName) {
      console.log('중복');
      setErrorMsg('중복된 닉네임입니다.');
      return false;
    } else {
      console.log('중복 아님');
      setErrorMsg(null);
      return true;
    }
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
      onImageModalOpen();
    }
  };

  //제출 함수
  const onSubmitInfo = async () => {
    const result = checkAlreadyNickname();

    if (result) {
      console.log('성공');
      ModalClose();
      confirmModalOpen();
    }
  };

  const confirmOpen = useConfirmModalOpen();

  const confirmModalOpen = () => {
    confirmOpen({
      AsyncAction: () => {},
      isPositiveModal: true,
      ApproveMessage: '확인',
      closeMessage: '닫기',
      titleMessage: '성공적으로 변경되었습니다.',
    });
  };

  return (
    userNames && (
      <Box tabIndex={-1}>
        <S.Wrapper>
          {isImageModalOpen && (
            <ImgEditModal
              setImageModalOpen={setImageModalOpen}
              imageArr={imageArr}
              setImageArr={setImageArr}
              isCircle={true}
            />
          )}

          <S.SectionWrapper gap={25}>
            <S.DetailText>
              스페이스에서 사용할 프로필과
              <br /> 닉네임을 지정해 주세요.
            </S.DetailText>
            {imageArr.images.length == 0 ? (
              <>
                <M.Label isAlert={false}>프로필 사진</M.Label>
                <M.ImgBox onClick={onClickImgEditModal}>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      handleFileChange(e);
                    }}
                    ref={inputRef}
                  />
                  <ProfileMock />
                </M.ImgBox>
              </>
            ) : (
              <>
                <M.Label isAlert={false}>프로필 사진</M.Label>
                <M.ImgBox
                  onClick={() => {
                    setImageModalOpen(true);
                  }}
                >
                  <CircleIcon size={240} img_url={imageArr.cropImages[0]} />
                </M.ImgBox>
              </>
            )}
            <M.Label isAlert={false}>닉네임</M.Label>
            <InputBox
              placeholder="닉네임을 입력하세요"
              height={60}
              width={250}
              maxLength={10}
              paddingLeft={60}
              type="text"
              onChange={(e) => {
                onChange(e);
              }}
              backgroundColor={'#5F5F5F'}
              name="nickname"
              value={nickName}
              readonly={false}
              children={
                <CharacterCounter
                  color={'white'}
                  currentNum={nickName.length}
                  maxNum={10}
                />
              }
            />
            {errorMsg && <M.Label isAlert={true}>{errorMsg}</M.Label>}

            <S.ButtonContainer>
              <BasicButton
                width={212}
                height={48}
                onClick={() => {}}
                disabled={!nickName.length}
              >
                <S.ButtonText onClick={onSubmitInfo}>완료</S.ButtonText>
              </BasicButton>
            </S.ButtonContainer>
          </S.SectionWrapper>
        </S.Wrapper>
      </Box>
    )
  );
};

export default UserSettingModal;
