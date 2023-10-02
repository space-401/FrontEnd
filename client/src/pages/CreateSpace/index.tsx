import S from '@pages/CreateSpace/style';
import InputBox from '@/components/common/InputBox';
import BasicButton from '@/components/common/BasicButton';
import TextAreaBox from '@/components/common/TextAreaBox';
import { ReactComponent as PhotoIcon } from '@assets/svg/photoIcon.svg';
import { ReactComponent as ShowEye } from '@assets/svg/showEye.svg';
import { ReactComponent as ClosedEye } from '@assets/svg/closedEye.svg';
import BasicBox from '@/components/common/BasicBox';
import { useState, useRef, useEffect } from 'react';
import {
  useAlertModalStore,
  usePhotoModalStore,
  useSelectIconModalStore,
  useSelectBasicIconModalStore,
} from '@/store/modal';
import ImgEditModal from '@/components/Create/ImageEditModal/ImageEditModal';
import { ImageType } from '@/types/image.type';
import CharacterCounter from '@/components/Create/CharacterCounter';
import { theme } from '@/styles/theme/theme';
import useInputs from '@/hooks/common/useInputs';
import SelectIconModal from '@/components/Create/SelectIconModal';
import { ImageArrType } from '@/types/image.type';
import AlertModal from '@/modal/Alert/AlertModal';
import BasicIconModal from '@/components/Create/BasicIconModal';
import { onConvertToFile } from '@/utils/fileConvertor';
import BasicIcon from '@/components/Create/BasicIconModal/BasicIcon';

const CreateSpace = () => {
  //기본 이미지 선택
  const [isBasicImg, setIsBasicImg] = useState<boolean>(false);
  //기본 이미지
  //이미지 저장하는 곳
  const [imageArr, setImageArr] = useState<ImageArrType>({
    images: [],
    cropImages: [],
    // convertedImages: [],
  });
  const BasicIconArr = BasicIcon();
  // const [fileImg, setFileImg] = useState<File | null>();

  //기본이미지 선택
  const [selectIconIdx, setSelectIconIdx] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  //모달
  //현재 편집 모달이 열려있는지
  const { ModalOpen: PhotoModalOpen, isOpen: isPhotoModalOpen } =
    usePhotoModalStore();
  //현재 경고 모달이 열려있는지
  const {
    ModalOpen: AlertModalOpen,
    isOpen: isAlertModalOpen,
    ModalClose: AlertModalClose,
  } = useAlertModalStore();
  //현재 아이콘 선택 모달이 열려있는지
  const {
    ModalOpen: IconModalOpen,
    ModalClose: IconModalClose,
    isOpen: isIconModalOpen,
  } = useSelectIconModalStore();
  //현재 기본 아이콘 선택 모달이 열려있는지
  const {
    ModalOpen: BasicIconModalOpen,
    ModalClose: BasicIconModalClose,
    isOpen: isBasicIconModalOpen,
  } = useSelectBasicIconModalStore();
  // const BasicIconArr = BasicIcon();

  //스페이스 명, 스페이스 설명
  const { values, onChange } = useInputs({
    title: '',
    content: '',
  });
  const { title, content } = values;

  //비밀번호
  const [pswd, setPswd] = useState('');
  //비밀번호 보이기,숨기기
  const [isShowPswd, setIsShowPswd] = useState(false);
  const onToggleShowPswd = () => {
    setIsShowPswd((prev) => !prev);
  };

  //비밀번호 숫자만
  const onCheckInputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // 정규 표현식을 사용하여 숫자가 아닌 값 검사
    if (!/^[0-9]*$/.test(value)) {
      // 숫자가 아닌 값이 있을 때 에러 처리
      return AlertModalOpen();
    }
    setPswd(value);
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
    PhotoModalOpen();
    IconModalClose();
  };

  //기본 아이콘 이미지 선택 모달
  const onMoveBasicIconModal = () => {
    BasicIconModalOpen();
    IconModalClose();
  };

  //스페이스 생성하기
  const onSubmit = () => {
    let convertedImg;
    if (isBasicImg) {
      convertedImg = onConvertToFile(BasicIconArr[selectIconIdx], 'spaceImg');
    } else {
      convertedImg = onConvertToFile(imageArr.cropImages[0], 'spaceImg');
    }
    const spaceData = {
      title,
      content,
      img: convertedImg,
      password: pswd,
    };
    console.log('space', spaceData);
  };

  useEffect(() => {
    if (isIconModalOpen) {
      setIsBasicImg(false);
    }
    if (isBasicIconModalOpen) {
      setIsBasicImg(true);
      setImageArr({
        images: [],
        cropImages: [],
        // convertedImages: [],
      });
    }
  }, [isIconModalOpen, isBasicIconModalOpen]);

  return (
    <S.Wrapper>
      <AlertModal
        ModalClose={AlertModalClose}
        isOpen={isAlertModalOpen}
        width={300}
        alertMessage="확인"
        alertTitle="비밀번호는 숫자만 입력해 주세요"
      />
      <S.TitleSection>
        <div>스페이스 설정하기</div>
        <p>우리만을 위한 스페이스를 새로 만들어요.</p>
      </S.TitleSection>
      {/*사진 편집 모달*/}
      {isPhotoModalOpen && (
        <ImgEditModal
          isCircle={false}
          imageArr={imageArr}
          setImageArr={setImageArr}
        />
      )}
      {/*아이콘 선택 모달*/}
      {isIconModalOpen && (
        <SelectIconModal
          modalClose={IconModalClose}
          isOpen={isIconModalOpen}
          onClickImgEditModal={onClickImgEditModal}
          onMoveBasicIconModal={onMoveBasicIconModal}
        />
      )}
      {/*기본 아이콘 선택 모달*/}
      {isBasicIconModalOpen && (
        <BasicIconModal
          modalClose={BasicIconModalClose}
          isOpen={isBasicIconModalOpen}
          // setIsBasicImg={setIsBasicImg}
          selectIconIdx={selectIconIdx}
          setSelectIconIdx={setSelectIconIdx}
        />
      )}
      <S.Form>
        {/*아이콘 지정 인풋*/}
        <S.TitleContainer number={1} required={true}>
          <div>스페이스 아이콘</div>
        </S.TitleContainer>

        {imageArr.images.length == 0 && !isBasicImg ? (
          <S.InputContainer number={1} onClick={IconModalOpen}>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => {
                handleFileChange(e);
              }}
              ref={inputRef}
            />
            <BasicBox width={160} borderradius={10}>
              <PhotoIcon />
            </BasicBox>
          </S.InputContainer>
        ) : (
          <S.InputContainer number={1}>
            <BasicBox
              onClick={IconModalOpen}
              backgroundImage={
                isBasicImg && !isBasicIconModalOpen
                  ? BasicIconArr[selectIconIdx]
                  : imageArr.cropImages[0]
              }
              // backgroundImage={fileImg}
              width={160}
              borderradius={10}
              color="grey"
            ></BasicBox>
            <S.EditButton onClick={PhotoModalOpen}>편집하기</S.EditButton>
          </S.InputContainer>
        )}

        {/*이름 지정 인풋*/}
        <S.TitleContainer number={2} required={true}>
          <div>스페이스 명 </div>
        </S.TitleContainer>
        <S.InputContainer number={2}>
          <InputBox
            readonly={false}
            height={60}
            placeholder="16자 이내의 제목을 입력해 주세요."
            type="text"
            maxLength={16}
            children={
              <CharacterCounter
                color={theme.COLOR['gray-3']}
                currentNum={title.length}
                maxNum={16}
              />
            }
            paddingLeft={65}
            onChange={onChange}
            name="title"
          />
        </S.InputContainer>

        {/*설명 지정 인풋*/}
        <S.TitleContainer number={3} required={false}>
          <div>스페이스 설명</div>
        </S.TitleContainer>
        <S.InputContainer number={3}>
          <TextAreaBox
            height={160}
            placeholder="스페이스 설명 입력"
            maxLength={100}
            onChange={onChange}
            name="content"
            children={
              <CharacterCounter
                color={theme.COLOR['gray-3']}
                currentNum={content.length}
                maxNum={100}
              />
            }
          />
        </S.InputContainer>

        {/*비밀번호 지정 인풋*/}
        <S.FlexContainer>
          <S.TitleContainer number={4} required={true}>
            <div>스페이스 비밀번호</div>
          </S.TitleContainer>
        </S.FlexContainer>
        <S.InputContainer number={4}>
          <InputBox
            onChange={(e) => {
              onCheckInputNumber(e);
            }}
            readonly={false}
            height={60}
            type={isShowPswd ? 'text' : 'password'}
            placeholder="숫자 5자리를 입력해주세요"
            maxLength={5}
            name="password"
            value={pswd}
            children={
              isShowPswd ? (
                <ShowEye onClick={onToggleShowPswd} />
              ) : (
                <ClosedEye onClick={onToggleShowPswd} />
              )
            }
          />
        </S.InputContainer>

        {/*스페이스 생성 버튼*/}
        <S.ButtonContainer>
          <BasicButton
            children="스페이스 생성하기"
            onClick={onSubmit}
            width={160}
            height={47}
            disabled={
              (!imageArr.cropImages.length && !isBasicImg) ||
              !title.length ||
              pswd.length < 5
            }
          />
        </S.ButtonContainer>
      </S.Form>
    </S.Wrapper>
  );
};
export default CreateSpace;
