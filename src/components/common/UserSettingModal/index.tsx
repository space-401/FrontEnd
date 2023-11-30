import { useConfirmModalOpen } from '@/hooks';
import { useSpaceUserUpdateMutation } from '@/hooks';
import { theme } from '@/styles';
import { ImageArrType, ImageType } from '@/types/image.type';
import { UserType } from '@/types/post.type';
import { Box } from '@mui/material';
import { useRef, useState } from 'react';
import { ReactComponent as ProfileMock } from '@/assets/svg/profileMock.svg';
import { usePhotoModalStore } from '@/store/modal';
import {
  CharacterCounter,
  CircleImgEditModal,
  SelectIconModal,
} from '@/components/Create';
import { M, S } from '@/components/Main/WelcomeModal/style';
import { BasicButton, CircleIcon, InputBox } from '@/components/common';

type SettingModalProps = {
  ModalClose: () => void;
  userNames: string[];
  userInfo?: UserType;
  spaceId: number;
  isAdmin: boolean;
};

//프로필 기본 이미지 선택
export const UserSettingModal = ({
  userNames,
  ModalClose,
  userInfo,
  spaceId, // isAdmin,
}: SettingModalProps) => {
  const { userUpdateAction } = useSpaceUserUpdateMutation(String(spaceId));

  const [nickName, setNickName] = useState(userInfo ? userInfo.userName : '');
  const [imageArr, setImageArr] = useState<ImageArrType>({
    image: null,
    cropImage: userInfo ? userInfo.imgUrl! : null,
    convertedImage: null,
  });
  const [errorMsg, setErrorMsg] = useState<string | null>();
  const [isSelectOptionModalOpen, setSelectOptionModalOpen] = useState(false);
  const { isOpen: isImgEditModalOpen, ModalOpen: imgEditModalOpen } =
    usePhotoModalStore();

  const [isDefaultImg, setIsDefaultImg] = useState(true);

  //이미지 선택 옵션 모달 열기
  const onClickImgOptionModalOpen = () => {
    if (imageArr.cropImage) {
      return setSelectOptionModalOpen(true);
    }
    return onClickImgEditModal();
  };

  //중복 닉네임 체크
  const checkAlreadyNickname = () => {
    if (userNames.includes(nickName) && nickName !== userInfo?.userName) {
      setErrorMsg('중복된 닉네임입니다.');
      return false;
    } else {
      setErrorMsg(null);
      return true;
    }
  };

  //기본 이미지로 설정
  const onSelectDefaultImg = () => {
    setImageArr({
      image: null,
      cropImage: null,
      convertedImage: null,
    });
    setIsDefaultImg(true);
    setSelectOptionModalOpen(false);
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
        setImageArr((prev: ImageArrType) => ({ ...prev, image: newObj }));
        setIsDefaultImg(false);
      }
    };
    reader.readAsDataURL(files[0]);
  };

  //자식 inputRef 요소를 클릭하는 함수
  const onClickImgEditModal = () => {
    if (isSelectOptionModalOpen) {
      setSelectOptionModalOpen(false);
    }
    inputRef.current?.click();
    imgEditModalOpen();
  };

  //제출 함수
  const onSubmitInfo = () => {
    const checkNickname = checkAlreadyNickname();
    const formData = new FormData();

    const spaceUserInfo = {
      spaceId,
      isAdmin: false,
      userNickname: nickName,
    };

    if (imageArr.convertedImage) {
      const image = new Blob([imageArr.convertedImage], {
        type: 'image/jpeg',
      });
      formData.append('image', image, 'image');
    }
    const spaceUserDTO = new Blob([JSON.stringify(spaceUserInfo)], {
      type: 'application/json',
    });
    formData.append('spaceUserDTO', spaceUserDTO);

    if (checkNickname) {
      userUpdateAction(formData);
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
      titleMessage: userInfo
        ? '성공적으로 변경되었습니다.'
        : `${nickName}님 환영합니다!`,
    });
  };

  const onEnterClose = (e: any) => {
    if (e.keyCode === 13) {
      onSubmitInfo();
    }
  };

  return (
    userNames && (
      <Box tabIndex={-1} onKeyDown={onEnterClose}>
        <S.Wrapper>
          {isImgEditModalOpen && imageArr.image && (
            <CircleImgEditModal imageArr={imageArr} setImageArr={setImageArr} />
          )}
          {/*이미지 옵션 선택 모달*/}

          <SelectIconModal
            title="프로필 사진"
            isOpen={isSelectOptionModalOpen}
            modalClose={() => {
              setSelectOptionModalOpen(false);
            }}
            selectOptionArr={[
              {
                title: '기본 이미지로 변경',
                asyncFunc: onSelectDefaultImg,
              },
              {
                title: '파일에서 이미지 선택',
                asyncFunc: onClickImgEditModal,
              },
            ]}
          />

          <S.SectionWrapper gap={25}>
            <S.DetailText>
              스페이스에서 사용할 프로필과
              <br /> 닉네임을 지정해 주세요.
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => {
                  handleFileChange(e);
                }}
                ref={inputRef}
              />
            </S.DetailText>{' '}
            <M.Label isAlert={false}>프로필 사진</M.Label>
            {/*프로필 사진을 설정하지 않았을 경우 mock*/}
            {!imageArr.cropImage && isDefaultImg ? (
              <>
                <M.ImgBox onClick={onClickImgOptionModalOpen}>
                  <ProfileMock />
                </M.ImgBox>
              </>
            ) : (
              <>
                <M.ImgBox onClick={onClickImgOptionModalOpen}>
                  <CircleIcon size={240} imgUrl={imageArr.cropImage!} />
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
              backgroundColor={theme.COLOR['gray-4']}
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
                onClick={onSubmitInfo}
                disabled={!nickName.length}
              >
                <S.ButtonText>완료</S.ButtonText>
              </BasicButton>
            </S.ButtonContainer>
          </S.SectionWrapper>
        </S.Wrapper>
      </Box>
    )
  );
};

export default UserSettingModal;
