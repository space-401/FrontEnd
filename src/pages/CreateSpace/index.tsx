import S from '@pages/CreateSpace/style';
import InputBox from '@/components/common/InputBox';
import BasicButton from '@/components/common/BasicButton';
import TextAreaBox from '@/components/common/TextAreaBox';
import { ReactComponent as PhotoIcon } from '@assets/svg/photoIcon.svg';
import { ReactComponent as ShowEye } from '@assets/svg/showEye.svg';
import { ReactComponent as ClosedEye } from '@assets/svg/closedEye.svg';
import BasicBox from '@/components/common/BasicBox';
import { useState, useRef, useEffect } from 'react';
import { usePhotoModalStore } from '@/store/modal';
import ImgEditModal from '@/components/Create/ImageEditModal/ImageEditModal';
import { ImageType, ImageArrType } from '@/types/image.type';
import CharacterCounter from '@/components/Create/CharacterCounter';
import { theme } from '@/styles/theme/theme';
import useInputs from '@/hooks/common/useInputs';
import SelectIconModal from '@/components/Create/SelectIconModal';
import BasicIconModal from '@/components/Create/BasicIconModal';
import BasicIcon from '@/components/Create/BasicIconModal/BasicIcon';
import { useAlertModalOpen } from '@/hooks/common/useAlertModalOpen';
import { CreateSpaceType } from '@/types/space.type';
import { useSpaceInfoQuery } from '@/hooks/api/space/useSpaceInfoQuery';
import { useParams, useNavigate } from 'react-router-dom';
import { makeObj } from '@/utils/makeObj';
import { useConfirmModalOpen } from '@hooks/common/useConfirmModalOpen';
import { ReactComponent as EditIcon } from '@assets/svg/tagEditIcon.svg';
import TagEditModal from '@/components/Create/TagEditModal';

const CreateSpace = () => {
  window.scrollTo({ top: 0 });

  const params = useParams();
  const spaceId = params.spaceId;
  const navigate = useNavigate();

  const { spaceInfo } = useSpaceInfoQuery(spaceId!);

  //이미지 저장하는 곳
  const [imageArr, setImageArr] = useState<ImageArrType>({
    images: spaceInfo ? makeObj([spaceInfo.imgUrl]) : [],
    cropImages: spaceInfo ? [spaceInfo.imgUrl] : [],
    convertedImages: [],
  });
  const BasicIconArr = BasicIcon();

  const inputRef = useRef<HTMLInputElement>(null);

  //기본 스페이스 아이콘 선택 [선택 여부, 선택 아이콘 인덱스]
  const [isBasicIcon, setIsBasicIcon] = useState<[false] | [true, number]>([
    false,
  ]);

  useEffect(() => {
    console.log('aaa', isBasicIcon);
  }, [isBasicIcon]);

  //모달
  //현재 편집 모달이 열려있는지
  const { ModalOpen: PhotoModalOpen, isOpen: isPhotoModalOpen } =
    usePhotoModalStore();

  //현재 아이콘 선택 모달이 열려있는지 [아이콘 모달, 기본 아이콘 모달]
  const [isIconModalOpen, setIsIconModalOpen] = useState<[boolean, boolean]>([
    false,
    false,
  ]);

  //태그 편집 모달이 열려있는지
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);

  //스페이스 명, 스페이스 설명
  const { values, onChange } = useInputs({
    title: spaceInfo ? spaceInfo.spaceTitle : '',
    content: spaceInfo ? spaceInfo.spaceDescription : '',
  });
  const { title, content } = values;

  //비밀번호
  const [pswd, setPswd] = useState(spaceInfo ? spaceInfo.spacePw : '');

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
      return alertModalOpen();
    }
    setPswd(value);
  };

  //경고모달
  const alertOpen = useAlertModalOpen();

  const alertModalOpen = () => {
    alertOpen({
      width: 300,
      alertMessage: '확인',
      alertTitle: '비밀번호는 숫자만 입력해 주세요',
    });
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
    setIsIconModalOpen([false, isIconModalOpen[1]]);
  };

  //스페이스 생성하기
  const onCreateSpace = () => {
    const newData: CreateSpaceType = {
      spaceTitle: title,
      spaceDescription: content,
      imgUrl: imageArr.convertedImages[0],
      spacePw: Number(pswd),
    };
    console.log('새로운 데이터', newData);
    confirmModalOpen(false);
  };

  //스페이스 생성하기
  const onUpdateSpace = () => {
    const newData: CreateSpaceType = {
      spaceTitle: title,
      spaceDescription: content,
      imgUrl: imageArr.convertedImages[0],
      spacePw: Number(pswd),
    };
    console.log('새로운 데이터', newData);
    confirmModalOpen(true);
  };

  useEffect(() => {
    if (isIconModalOpen[1]) {
      setImageArr({
        images: [],
        cropImages: [],
        convertedImages: [],
      });
    }
  }, [isIconModalOpen, isBasicIcon]);

  const inputWidth = 628;
  const confirmOpen = useConfirmModalOpen();

  const onMoveSpacePage = () => {
    navigate(`/space/${spaceId}`);
  };

  //기본 아이콘 선택 함수
  const onSelectBasicIcon = (index: number) => {
    setIsBasicIcon([true, index]);
  };

  /**확인 모달*/
  const confirmModalOpen = (isUpdate: boolean) => {
    confirmOpen({
      AsyncAction: onMoveSpacePage,
      isPositiveModal: true,
      ApproveMessage: '확인',
      closeMessage: '닫기',
      titleMessage: isUpdate
        ? '스페이스 수정이 완료되었습니다.'
        : '스페이스가 생성되었습니다.',
    });
  };

  return (
    <S.Wrapper>
      {spaceId && isTagModalOpen && (
        <TagEditModal
          spaceId={spaceId}
          isOpen={isTagModalOpen}
          modalClose={() => {
            setIsTagModalOpen(false);
          }}
        />
      )}
      <S.TitleSection>
        <div>스페이스 설정하기</div>
        <p>우리만을 위한 스페이스를 새로 만들어요.</p>
      </S.TitleSection>

      {/*사진 편집 모달*/}
      {isPhotoModalOpen && imageArr.images.length && (
        <ImgEditModal
          isCircle={false}
          imageArr={imageArr}
          setImageArr={setImageArr}
        />
      )}

      {/*아이콘 선택 모달*/}
      {
        <SelectIconModal
          modalClose={() => {
            setIsIconModalOpen([false, isIconModalOpen[1]]);
          }}
          isOpen={isIconModalOpen[0]}
          onClickImgEditModal={onClickImgEditModal}
          onMoveBasicIconModal={() => {
            setIsIconModalOpen([false, true]);
          }}
        />
      }

      {/*기본 아이콘 선택 모달*/}
      {
        <BasicIconModal
          modalClose={() => {
            setIsIconModalOpen([isIconModalOpen[0], false]);
          }}
          isOpen={isIconModalOpen[1]}
          onSelectBasicIcon={onSelectBasicIcon}
          isBasicIcon={isBasicIcon}
        />
      }

      <S.Form>
        {/*아이콘 지정 인풋*/}
        <S.TitleContainer number={1} required={true}>
          <div>스페이스 아이콘</div>
        </S.TitleContainer>

        {imageArr.images.length == 0 && !isBasicIcon[0] ? (
          <S.InputContainer
            number={1}
            onClick={() => {
              setIsIconModalOpen([true, isIconModalOpen[1]]);
            }}
          >
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
              onClick={() => {
                setIsIconModalOpen([true, false]);
              }}
              backgroundImage={
                isBasicIcon[0] == true
                  ? BasicIconArr[isBasicIcon[1]]
                  : imageArr.cropImages[0]
              }
              width={160}
              borderradius={10}
              color="grey"
            ></BasicBox>
            {/*사진 선택 시에만 편집하기 생성*/}
            {!isBasicIcon[0] && (
              <S.EditButton onClick={PhotoModalOpen}>편집하기</S.EditButton>
            )}
          </S.InputContainer>
        )}

        {/*이름 지정 인풋*/}
        <S.TitleContainer number={2} required={true}>
          <div>스페이스 명</div>
        </S.TitleContainer>
        <S.InputContainer number={2}>
          <InputBox
            width={inputWidth}
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
            value={title}
          />
        </S.InputContainer>

        {/*설명 지정 인풋*/}
        <S.TitleContainer number={3} required={false}>
          <div>스페이스 설명</div>
        </S.TitleContainer>
        <S.InputContainer number={3}>
          <TextAreaBox
            value={content}
            height={160}
            placeholder="스페이스 설명 입력"
            maxLength={100}
            onChange={onChange}
            width={inputWidth}
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
            width={300}
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
        <S.EmptyContainer />

        {/*스페이스 태그 관리*/}
        <S.FlexContainer>
          <S.TitleContainer number={5} required={false}>
            <div>스페이스 태그 관리</div>
          </S.TitleContainer>
        </S.FlexContainer>
        <S.InputContainer number={5}>
          <BasicButton
            onClick={() => {
              setIsTagModalOpen(true);
            }}
            backgroundColor={theme.COLOR.white}
            borderRadius={10}
            width={160}
            height={47}
          >
            <S.ButtonInnerContainer>
              <EditIcon />
              태그 편집
            </S.ButtonInnerContainer>
          </BasicButton>
        </S.InputContainer>

        {/*스페이스 생성 버튼*/}
        <S.ButtonContainer>
          {spaceId ? (
            <BasicButton
              children={'스페이스 수정하기'}
              onClick={onUpdateSpace}
              width={160}
              fontSize={16}
              height={47}
              disabled={
                (!imageArr.cropImages.length && !isBasicIcon[0]) ||
                !title.length ||
                pswd.length < 5
              }
            />
          ) : (
            <BasicButton
              children={'스페이스 생성하기'}
              onClick={onCreateSpace}
              width={160}
              fontSize={16}
              height={47}
              disabled={
                (!imageArr.cropImages.length && !isBasicIcon[0]) ||
                !title.length ||
                pswd.length < 5
              }
            />
          )}
        </S.ButtonContainer>
      </S.Form>
    </S.Wrapper>
  );
};
export default CreateSpace;
