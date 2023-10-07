import { Modal, Box } from '@mui/material';
import { S, M } from '@/components/Main/WelcomeAndSettingModal/style';
import BasicButton from '@/components/common/BasicButton';
import { useState, useRef } from 'react';
import { ImageArrType } from '@/types/image.type';
import { ImageType } from '@/types/image.type';
import { ReactComponent as PhotoIcon } from '@assets/svg/photoIcon.svg';
import CircleIcon from '@/components/common/CircleIcon/CircleIcon';
import InputBox from '@/components/common/InputBox';
import CharacterCounter from '@/components/Create/CharacterCounter';
import ImgEditModal from '@/components/Create/ImageEditModal/ImageEditModal';

type FirstSettingModalProps = {
  isOpen: boolean;
  modalClose: () => void;
};

//프로필 기본 이미지 선택
const FirstSettingModal = ({ isOpen }: FirstSettingModalProps) => {
  // const SubmitAction = () => {
  //   // 변경 완료시 누를 버튼
  //   const newUserInfo = {
  //     id: user?.id,
  //     img: imageArr.convertedImages[0],
  //     nickname: nickName,
  //     token_key: user?.token_key,
  //   };
  //   console.log(newUserInfo);
  //   modalClose();
  // };

  //이미지 저장하는 곳
  const [imageArr, setImageArr] = useState<ImageArrType>({
    images: [],
    cropImages: [],
    convertedImages: [],
  });

  const [nickName, setNickName] = useState('');

  const [isImageModalOpen, setImageModalOpen] = useState(false);

  // const onToggleModal = () => {
  //   setImageModalOpen((prev) => !prev);
  // };

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

  {
    if (isImageModalOpen) {
      return (
        <ImgEditModal
          imageArr={imageArr}
          setImageArr={setImageArr}
          isCircle={true}
        />
      );
    }
  }
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
          <S.Text weight={600}>Welcome to Kkiri!</S.Text>
          <S.DetailText>
            스페이스에서 사용할 닉네임과
            <br /> 프로필을 지정해 주세요.
          </S.DetailText>

          {imageArr.images.length == 0 ? (
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
              <PhotoIcon />
              {/* <BasicBox
                width={160}
                borderradius={80}
                onClick={onClickImgEditModal}
              >
                <PhotoIcon />
              </BasicBox> */}
            </M.ImgBox>
          ) : (
            <M.ImgBox>
              <CircleIcon size={240} img_url={imageArr.cropImages[0]} />
            </M.ImgBox>
          )}
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
            backgroundColor={'#5F5F5F'}
            name="nickname"
            readonly={false}
            children={
              <CharacterCounter
                color={'white'}
                // color={({ theme }) => theme.COLOR['gray-3']}
                currentNum={nickName.length}
                maxNum={10}
              />
            }
          />
          {/* {imageArr.images.length > 0 && (
            <M.ImgButton onClick={onToggleModal}>완료</M.ImgButton>
          )} */}
          <S.Text weight={400}>{nickName}</S.Text>
          <BasicButton width={212} height={48} onClick={() => {}}>
            <S.FlexContainer>
              <div>완료</div>
            </S.FlexContainer>
          </BasicButton>
        </S.Wrapper>
      </Box>
    </Modal>
  );
};

export default FirstSettingModal;
