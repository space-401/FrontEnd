import { PATH } from '@/constants';
import {
  useAlertModalOpen,
  useConfirmModalOpen,
  useInputs,
  useSpaceCreateMutation,
  useSpaceDeleteMutation,
  useSpaceInfoQuery,
  useSpaceUpdateMutation,
} from '@/hooks';
import { theme } from '@/styles';
import type { ImageArrType } from '@/types';
import { toastColorMessage } from '@/utils';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as EditIcon } from '@/assets/svg/tagEditIcon.svg';
import { usePhotoModalStore } from '@/store/modal';
import { SPACE_MESSAGE } from '@/constants/message';
import {
  BasicIconModal,
  ImageEditModal,
  SelectIconModal,
  TagEditModal,
} from '@/components/Create';
import SpaceDescription from '@/components/CreateSpace/SpaceDescription';
import SpaceIcon from '@/components/CreateSpace/SpaceIcon';
import SpacePswd from '@/components/CreateSpace/SpacePswd';
import SpaceTitle from '@/components/CreateSpace/SpaceTitle';
import { BasicButton } from '@/components/common';
import { S } from './style';


const CreateSpace = () => {
  const params = useParams();
  const spaceId = params.spaceId ?? null;
  const navigate = useNavigate();
  const isUpdateForm = Number.isInteger(Number(spaceId));

  const inputRef = useRef<HTMLInputElement>(null);

  const { postSpaceAction, isPostSuccess, createResponse } =
    useSpaceCreateMutation();
  const { updateSpaceAction, isUpdateSuccess, updateResponse } =
    useSpaceUpdateMutation();
  const { deleteSpaceAction, isDeleteSuccess } = useSpaceDeleteMutation();
  const { spaceInfo } = useSpaceInfoQuery(spaceId!);

  const formTitle = isUpdateForm
    ? SPACE_MESSAGE.TITLE.UPDATE
    : SPACE_MESSAGE.TITLE.CREATE;
  const formDescription = isUpdateForm
    ? SPACE_MESSAGE.DESCRIPTION.UPDATE
    : SPACE_MESSAGE.DESCRIPTION.CREATE;
  const formResponseMessage = isUpdateForm
    ? SPACE_MESSAGE.RESPONSE.UPDATE
    : SPACE_MESSAGE.RESPONSE.CREATE;

  //이미지 저장하는 곳
  const [imageArr, setImageArr] = useState<ImageArrType>({
    image: null,
    cropImage: spaceInfo ? spaceInfo.imgUrl : null,
    convertedImage: null,
  });
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
        navigate(PATH.SPACE);
      }
    }
  }, [navigate]);

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

  const noAuthalertOpen = useAlertModalOpen();

  const noAuthalertModalOpen = () => {
    noAuthalertOpen({
      width: 300,
      alertMessage: '확인',
      alertTitle: '스페이스 수정 권한이 없습니다.',
    });
  };

  //기본 스페이스 아이콘 선택 [선택 여부, 선택 아이콘 인덱스]
  const [isBasicIcon, setIsBasicIcon] = useState<[false] | [true, number]>([
    false,
  ]);

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
  };

  useEffect(() => {
    if (isUpdateSuccess || isPostSuccess) {
      toastColorMessage(formResponseMessage);

      let movePath;
      if (isUpdateForm) {
        movePath = updateResponse?.spaceId;
      } else {
        movePath = createResponse?.spaceId;
      }

      navigate(PATH.SPACE_MAIN(String(movePath)));
    }
  }, [isUpdateSuccess, isPostSuccess]);
  const confirmOpen = useConfirmModalOpen();

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

  const deleteSpace = () => {
    if (spaceId) {
      deleteSpaceAction(spaceId);
    }
    if (isDeleteSuccess) {
      toastColorMessage('성공적으로 삭제되었습니다.');
    }
  };

  const deleteSpaceModalOpen = () => {
    confirmOpen({
      AsyncAction: deleteSpace,
      isPositiveModal: false,
      ApproveMessage: '확인',
      closeMessage: '닫기',
      titleMessage: '스페이스를 삭제하시겠습니까?',
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
        <S.FlexBoxColumn>
          <div>{formTitle}</div>
          <p>{formDescription}</p>
        </S.FlexBoxColumn>
        {isUpdateForm ?? (
          <S.DeleteButton>
            <BasicButton
              onClick={deleteSpaceModalOpen}
              backgroundColor={theme.COLOR.orange}
              color={theme.COLOR.white}
              fontSize={12}
              height={40}
            >
              스페이스 삭제하기
            </BasicButton>
          </S.DeleteButton>
        )}
      </S.TitleSection>

      {/*사진 편집 모달*/}
      {isPhotoModalOpen && imageArr.image && (
        <ImageEditModal
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
        <>
          <S.TitleContainer number={1} required={true}>
            <div>스페이스 아이콘</div>
          </S.TitleContainer>
          <SpaceIcon
            isBasicIcon={isBasicIcon}
            setIsIconModalOpen={setIsIconModalOpen}
            setImageArr={setImageArr}
            inputRef={inputRef}
            imageArr={imageArr}
            onClickOptionModalOpen={onClickOptionModalOpen}
          />
        </>

        {/*이름 지정 인풋*/}
        <>
          <S.TitleContainer number={2} required={true}>
            <div>스페이스 명</div>
          </S.TitleContainer>
          <SpaceTitle title={title} onChange={onChange} />
        </>

        {/*설명 지정 인풋*/}
        <>
          <S.TitleContainer number={3} required={false}>
            <div>스페이스 설명</div>
          </S.TitleContainer>
          <SpaceDescription content={content} onChange={onChange} />
        </>

        {/*비밀번호 지정 인풋*/}
        <>
          <S.FlexContainer>
            <S.TitleContainer number={4} required={true}>
              <div>스페이스 비밀번호</div>
            </S.TitleContainer>
          </S.FlexContainer>
          <SpacePswd pswd={pswd} setPswd={setPswd} />
        </>
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
            <S.FlexBox>
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
            </S.FlexBox>
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