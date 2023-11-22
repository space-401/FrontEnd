import S from '@pages/CreateSpace/style';
import InputBox from '@/components/common/InputBox';
import BasicButton from '@/components/common/BasicButton';
import TextAreaBox from '@/components/common/TextAreaBox';
import { ReactComponent as PhotoIcon } from '@assets/svg/photoIcon.svg';
import { ReactComponent as ShowEye } from '@assets/svg/showEye.svg';
import { ReactComponent as ClosedEye } from '@assets/svg/closedEye.svg';
import BasicBox from '@/components/common/BasicBox';
import { useEffect, useRef, useState } from 'react';
import { usePhotoModalStore } from '@/store/modal';
import ImgEditModal from '@/components/Create/ImageEditModal/ImageEditModal';
import { ImageArrType, ImageType } from '@/types/image.type';
import CharacterCounter from '@/components/Create/CharacterCounter';
import { theme } from '@/styles/theme/theme';
import useInputs from '@/hooks/common/useInputs';
import SelectIconModal from '@/components/Create/SelectIconModal';
import BasicIconModal from '@/components/Create/BasicIconModal';
import BasicIcon from '@/components/Create/BasicIconModal/BasicIcon';
import { useAlertModalOpen } from '@/hooks/common/useAlertModalOpen';
import { useSpaceInfoQuery } from '@/hooks/api/space/useSpaceInfoQuery';
import { useNavigate, useParams } from 'react-router-dom';
import { useConfirmModalOpen } from '@hooks/common/useConfirmModalOpen';
import { ReactComponent as EditIcon } from '@assets/svg/tagEditIcon.svg';
import TagEditModal from '@/components/Create/TagEditModal';
import { useSpaceCreateMutation } from '@/hooks/api/space/useSpaceCreateMutation';
import { useSpaceUpdateMutation } from '@/hooks/api/space/useSpaceUpdateMutation';

const CreateSpace = () => {
  const params = useParams();
  const spaceId = params.spaceId ?? null;
  const navigate = useNavigate();

  const { postSpaceAction, isPostSuccess } = useSpaceCreateMutation();
  const { updateSpaceAction, isUpdateSuccess } = useSpaceUpdateMutation();
  const { spaceInfo } = useSpaceInfoQuery(spaceId!);

  //이미지 저장하는 곳
  const [imageArr, setImageArr] = useState<ImageArrType>({
    image: null,
    cropImage: spaceInfo ? spaceInfo.imgUrl : null,
    convertedImage: null,
  });
  const BasicIconArr = BasicIcon();

  const inputRef = useRef<HTMLInputElement>(null);

  //기본 스페이스 아이콘 선택 [선택 여부, 선택 아이콘 인덱스]
  const [isBasicIcon, setIsBasicIcon] = useState<[false] | [true, number]>([
    false,
  ]);

  //모달
  //현재 편집 모달이 열려있는지
  const { ModalOpen: PhotoModalOpen, isOpen: isPhotoModalOpen } =
    usePhotoModalStore();

  //현재 아이콘 선택 모달이 열려있는지 [아이콘 모달, 기본 아이콘 모달]
  const [isIconModalOpen, setIsIconModalOpen] = useState<[boolean, boolean]>([
    false,
    false,
  ]);

  //내 작성글이 아닐 경우에 돌려보내기
  useEffect(() => {
    if (spaceId) {
      if (!spaceInfo?.isAdmin) {
        noAuthalertModalOpen();
        navigate('/space');
      }
    }
  }, []);

  //아이콘 옵션 선택 모달 열기
  const onClickOptionModalOpen = () => {
    setIsIconModalOpen([true, false]);
  };

  //태그 편집 모달이 열려있는지
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);

  //스페이스 명, 스페이스 설명
  const { values, onChange } = useInputs({
    title: spaceInfo ? spaceInfo.spaceTitle : '',
    content: spaceInfo ? spaceInfo.spaceDescription : '',
  });
  const { title, content } = values;

  //비밀번호
  const [pswd, setPswd] = useState<string | null>(
    spaceInfo ? spaceInfo.spacePw : null
  );

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

  const noAuthalertOpen = useAlertModalOpen();

  const noAuthalertModalOpen = () => {
    noAuthalertOpen({
      width: 300,
      alertMessage: '확인',
      alertTitle: '스페이스 수정 권한이 없습니다.',
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
        setImageArr((prev: ImageArrType) => ({ ...prev, image: newObj }));
      }
    };
    reader.readAsDataURL(files[0]);
  };

  //새로운 이미지 불러오는 함수
  const onClickImgEditModal = () => {
    setIsIconModalOpen([false, false]);
    setIsBasicIcon([false]);
    inputRef.current?.click();
    PhotoModalOpen();
  };

  //스페이스 생성하기
  const onSubmitSpace = () => {
    const formData = new FormData();

    const createSpaceDTO = {
      spaceName: title,
      spaceDescription: content,
      defaultImg: isBasicIcon[0] ? String(isBasicIcon[1]) : '',
      spacePw: pswd,
    };

    const updateSpaceDTO = {
      ...createSpaceDTO,
      spaceId,
    };
    if (imageArr.convertedImage) {
      // 이미지 파일 추가
      const image = new Blob([imageArr.convertedImage], {
        type: 'image/jpeg',
      });
      formData.append('imgUrl', image, 'image.jpg');
    }

    if (spaceId) {
      // JSON 데이터 추가
      const spaceDTO = new Blob([JSON.stringify(updateSpaceDTO)], {
        type: 'application/json',
      });
      formData.append('spaceDTO', spaceDTO);
      updateSpaceAction(formData);
    } else {
      const spaceDTO = new Blob([JSON.stringify(createSpaceDTO)], {
        type: 'application/json',
      });
      formData.append('spaceDTO', spaceDTO);
      postSpaceAction(formData);
    }

    if (isUpdateSuccess || isPostSuccess) {
      confirmModalOpen(true);
    }
  };
  const confirmOpen = useConfirmModalOpen();

  const onMoveSpacePage = () => {
    navigate(`/space/${spaceId}`);
  };

  //기본 아이콘 선택 함수
  const onSelectBasicIcon = (index: number) => {
    if (imageArr.cropImage) {
      setImageArr({
        image: null,
        cropImage: null,
        convertedImage: null,
      });
    }
    setIsBasicIcon([true, index]);
  };

  //확인 모달
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
      {isTagModalOpen && (
        <TagEditModal
          spaceId={spaceId}
          isOpen={isTagModalOpen}
          modalOpen={() => {
            setIsTagModalOpen(true);
          }}
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
      {isPhotoModalOpen && imageArr.image && (
        <ImgEditModal
          isCircle={false}
          imageArr={imageArr}
          setImageArr={setImageArr}
          onCloseIconModal={() => {
            setIsIconModalOpen([false, false]);
          }}
        />
      )}

      {/*아이콘 선택 모달*/}
      <SelectIconModal
        modalClose={() => {
          setIsIconModalOpen([false, isIconModalOpen[1]]);
        }}
        isOpen={isIconModalOpen[0]}
        title="스페이스 아이콘 설정"
        selectOptionArr={[
          {
            title: '기본 아이콘 선택하기',
            asyncFunc: () => setIsIconModalOpen([false, true]),
          },
          {
            title: '이미지 불러오기',
            asyncFunc: onClickImgEditModal,
          },
        ]}
      />

      {/*기본 아이콘 선택 모달*/}
      <BasicIconModal
        modalClose={() => {
          setIsIconModalOpen([isIconModalOpen[0], false]);
        }}
        isOpen={isIconModalOpen[1]}
        onSelectBasicIcon={onSelectBasicIcon}
        isBasicIcon={isBasicIcon}
      />

      {/*스페이스 설정 폼*/}
      <S.Form>
        {/*아이콘 지정 인풋*/}
        <S.TitleContainer number={1} required={true}>
          <div>스페이스 아이콘</div>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => {
              handleFileChange(e);
            }}
            ref={inputRef}
          />
        </S.TitleContainer>

        {!imageArr.cropImage && !isBasicIcon[0] ? (
          <S.InputContainer number={1} onClick={onClickOptionModalOpen}>
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
                isBasicIcon[0]
                  ? BasicIconArr[isBasicIcon[1]]
                  : imageArr.cropImage!
              }
              width={160}
              borderradius={10}
              color="grey"
            ></BasicBox>
          </S.InputContainer>
        )}

        {/*이름 지정 인풋*/}
        <S.TitleContainer number={2} required={true}>
          <div>스페이스 명</div>
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
            value={pswd!}
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
              onClick={onSubmitSpace}
              width={160}
              fontSize={16}
              height={47}
              disabled={
                (!imageArr.cropImage && !isBasicIcon[0]) ||
                !title.length ||
                String(pswd).length < 5
              }
            />
          ) : (
            <BasicButton
              children={'스페이스 생성하기'}
              onClick={onSubmitSpace}
              width={160}
              fontSize={16}
              height={47}
              disabled={
                (!imageArr.cropImage && !isBasicIcon[0]) ||
                !title.length ||
                String(pswd).length < 5
              }
            />
          )}
        </S.ButtonContainer>
      </S.Form>
    </S.Wrapper>
  );
};
export default CreateSpace;
