import { S } from './style';
import {
  BasicBox,
  InputBox,
  TextAreaBox,
  CircleIcon,
  BasicButton,
  Calender,
} from '@/components/common';
import { ReactComponent as PhotoIcon } from '@/assets/svg/photoIcon.svg';
import { ReactComponent as SearchIcon } from '@/assets/svg/searchIcon.svg';
import {
  CreateSelectBox,
  ImagesEditModal,
  ImgSlider,
  SearchModal,
  CharacterCounter,
} from '@/components/Create';
import { useEffect, useRef, useState } from 'react';
import { theme } from '@/styles';
import { usePhotoModalStore } from '@/store/modal';
import {
  useInputs,
  usePostDetailQuery,
  useAlertModalOpen,
  useSpaceInfoQuery,
  usePostCreateMutation,
  usePostUpdateMutation,
  useConfirmModalOpen,
} from '@/hooks';
import type {
  MapType,
  DateInfoType,
  selectType,
  ImagesArrType,
  ImageType,
} from '@/types';
import { useNavigate, useParams } from 'react-router-dom';
import {
  onConvertedTagToSelectType,
  onConvertedUserToSelectType,
  convertImgArrToObj,
} from '@/utils';
import { PATH } from '@/constants/path';

const CreatePost = () => {
  const params = useParams();
  const postId = params.postId;
  const spaceId = params.spaceId;

  const { postDetailData } = usePostDetailQuery(Number(postId!));
  const { spaceInfo } = useSpaceInfoQuery(String(spaceId));
  const navigate = useNavigate();

  //내 작성글이 아닐 경우에 돌려보내기
  useEffect(() => {
    if (postId) {
      if (!postDetailData?.isMine) {
        noAuthalertModalOpen();
        navigate(PATH.SPACE);
      }
    }
  }, [navigate, postId]);

  const { createPostAction, postCreateSuccess } = usePostCreateMutation();
  const { updatePostAction, updatePostSuccess } = usePostUpdateMutation();

  const { imgUrl, spaceTitle, tagList, userList } = spaceInfo!;

  const inputRef = useRef<HTMLInputElement>(null);

  //이미지 파일을 저장하는 곳
  const [imageArr, setImageArr] = useState<ImagesArrType>({
    images: postDetailData ? convertImgArrToObj(postDetailData.imgUrl) : [],
    cropImages: postDetailData ? postDetailData.imgUrl : [],
    convertedImages: [],
  });
  //현재 선택한 이미지의 index
  const [currentIdx, setCurrentIdx] = useState(0);
  //현재 편집 모달이 열려있는지
  const { ModalOpen, isOpen } = usePhotoModalStore();
  //현재 글자개수 세기
  const { values, onChange } = useInputs({
    title: postDetailData?.postTitle ?? '',
    content: postDetailData?.postDescription ?? '',
  });
  const { title, content } = values;

  //선택한 장소 정보
  const [mapInfo, setMapInfo] = useState<MapType>({
    content: postDetailData ? postDetailData.placeTitle : '',
    position: postDetailData
      ? {
          lng: String(postDetailData.position.lng),
          lat: String(postDetailData.position.lat),
        }
      : { lng: '0', lat: '0' },
  });
  //날짜
  const [dateInfo, setDateInfo] = useState<DateInfoType>({
    startDate: postDetailData?.date?.startDate
      ? postDetailData.date.startDate
      : '',
    endDate: postDetailData?.date?.endDate ? postDetailData.date.endDate : '',
  });
  //장소 선택 모달이 열렸는지
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  //선택된 유저
  const [selectedUsers, setSelectedUsers] = useState<selectType[]>(
    postDetailData
      ? onConvertedUserToSelectType(postDetailData.selectedUsers)
      : []
  );
  //선택된 태그
  const [selectedTags, setSelectedTags] = useState<selectType[]>(
    postDetailData
      ? onConvertedTagToSelectType(postDetailData.selectedTags)
      : []
  );

  //자식 inputRef 요소를 클릭하는 함수
  const onClickImgEditModal = () => {
    if (inputRef.current && imageArr.images.length == 0) {
      inputRef.current.click();
      return ModalOpen();
    }
    ModalOpen();
  };

  //파일 변경 함수
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (!files) return;

    let currentImgNum = imageArr.images.length;
    const hasAlert = false;

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === 'string' && currentImgNum < 10) {
          const newImgObj: ImageType = {
            id: currentImgNum + 1,
            img: result,
          };
          setImageArr((prevImageArr) => ({
            ...prevImageArr,
            images: [...prevImageArr.images, newImgObj],
          }));
          currentImgNum++;
        }
        if (currentImgNum >= 10 && !hasAlert) {
          return alertModalOpen();
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  /**확인 모달*/

  const confirmOpen = useConfirmModalOpen();

  const confirmModalOpen = () => {
    confirmOpen({
      AsyncAction: onMoveCreatePost,
      isPositiveModal: true,
      ApproveMessage: '확인',
      closeMessage: '닫기',
      titleMessage: spaceInfo
        ? '성공적으로 수정되었습니다. '
        : '성공적으로 포스팅되었습니다.',
    });
  };

  //제출 후 포스트 생성 페이지로 이동
  const onSubmitPost = () => {
    const formData = new FormData();

    //이미지 파일 외 데이터들이 들어가는 객체
    const createPostDTO = {
      spaceId,
      postTitle: title,
      postContent: content,
      people: selectedUsers.map((user) => user.id),
      tags: selectedTags.map((tag) => tag.id),
      postLocationLat: mapInfo.position.lat,
      postLocationLng: mapInfo.position.lng,
      postLocationKeyword: mapInfo.content,
      postBeginDate: dateInfo.startDate,
      postEndDate: dateInfo.endDate,
    };

    const updatePostDTO = {
      ...createPostDTO,
      postId,
    };

    imageArr.convertedImages.forEach((image, index) => {
      formData.append(`file-${index}`, image);
    });

    if (postId) {
      //수정할 때
      formData.append('postDTO', JSON.stringify(updatePostDTO));
      updatePostAction(formData);
    } else {
      //처음 생성할 때
      formData.append('postDTO', JSON.stringify(createPostDTO));
      createPostAction(formData);
    }
  };

  //성공시 확인 모달 열기
  if (postCreateSuccess || updatePostSuccess) {
    confirmModalOpen();
  }

  const onMoveCreatePost = () => {
    const currentURL = window.location.href;
    const parts = currentURL.split('/');
    const index = parts.indexOf('post');
    window.location.href = parts.slice(0, index + 1).join('/');
  };

  /**경고 모달*/
  const alertOpen = useAlertModalOpen();

  const alertModalOpen = () => {
    alertOpen({
      width: 300,
      alertMessage: '확인',
      alertTitle: '이미지는 10개까지만 추가됩니다.',
    });
  };

  const noAuthalertOpen = useAlertModalOpen();

  const noAuthalertModalOpen = () => {
    noAuthalertOpen({
      width: 300,
      alertMessage: '확인',
      alertTitle: '포스트 수정 권한이 없습니다.',
    });
  };

  const inputWidth = 500;

  return (
    <S.Wrapper>
      {isOpen && imageArr.images.length > 0 && (
        <>
          <ImagesEditModal
            imageArr={imageArr}
            setImageArr={setImageArr}
            currentIdx={currentIdx}
            setCurrentIdx={setCurrentIdx}
            handleFileChange={handleFileChange}
          />
        </>
      )}

      {imageArr.cropImages.length == 0 ? (
        <S.BoxWrapper>
          <BasicBox
            color={theme.COLOR['gray-5']}
            width={348}
            borderradius={20}
            onClick={onClickImgEditModal}
          >
            <S.PhotoContainer>
              <PhotoIcon />
              <BasicButton
                onClick={() => {}}
                width={55}
                height={20}
                borderRadius={5}
                backgroundColor={theme.COLOR['gray-2']}
              >
                <form method="post" encType="form-data">
                  <input
                    type="file"
                    ref={inputRef}
                    onChange={(e) => {
                      handleFileChange(e);
                    }}
                    style={{ display: 'none' }}
                    multiple
                  />
                </form>
                <div>사진 선택</div>
              </BasicButton>
            </S.PhotoContainer>
          </BasicBox>
        </S.BoxWrapper>
      ) : (
        <S.BoxWrapper>
          <div style={{ zIndex: 1000, width: '348px' }}>
            <ImgSlider
              onClickImgEditModal={onClickImgEditModal}
              images={imageArr.cropImages}
            />
          </div>
        </S.BoxWrapper>
      )}
      {/*장소 찾기 모달*/}
      <SearchModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        mapInfo={mapInfo}
        setMapInfo={setMapInfo}
      />

      <S.GridWrapper>
        {/*스페이스 정보*/}
        <S.SpaceInfoContainer>
          <CircleIcon size={48} imgUrl={imgUrl}></CircleIcon>
          <div>{spaceTitle}</div>
        </S.SpaceInfoContainer>

        {/*게시글 제목*/}
        <S.Label number={1} required={true}>
          <span>게시글 제목</span>
        </S.Label>
        <S.InputContainer number={1}>
          <InputBox
            width={inputWidth}
            height={60}
            readonly={false}
            placeholder="30자 이내의 제목을 입력해 주세요"
            type="text"
            maxLength={30}
            children={
              <CharacterCounter
                color={theme.COLOR['gray-3']}
                currentNum={title.length}
                maxNum={30}
              />
            }
            paddingLeft={65}
            onChange={onChange}
            name="title"
            value={title}
          />
        </S.InputContainer>

        {/*함께한 친구들*/}
        <S.Label number={2} required={false}>
          <span>함께한 친구들</span>
        </S.Label>
        <S.InputContainer number={2}>
          <CreateSelectBox
            selectState={selectedUsers}
            labelName={'사용자'}
            ListItem={userList}
            boxWidth={inputWidth}
            setState={setSelectedUsers}
            menuHeight={89 * Math.floor(userList.length / 2)}
            menuWidth={inputWidth}
          />
        </S.InputContainer>

        {/*태그*/}
        <S.FlexContainer>
          <S.Label number={3} required={false}>
            태그
          </S.Label>
        </S.FlexContainer>

        <S.InputContainer number={3}>
          <CreateSelectBox
            selectState={selectedTags}
            labelName={'태그'}
            ListItem={tagList}
            boxWidth={inputWidth}
            setState={setSelectedTags}
            menuHeight={100 * Math.floor(userList.length / 2)}
            // setState={setTagState}
            menuWidth={inputWidth}
          />
        </S.InputContainer>

        {/*장소*/}
        <S.Label number={4} required={true}>
          <span>장소</span>
        </S.Label>
        <S.InputContainer number={4}>
          <S.MapContainer onClick={() => setIsMapModalOpen(true)}>
            <InputBox
              width={inputWidth}
              readonly={true}
              height={60}
              placeholder="등록할 장소를 입력해 주세요"
              type="text"
              maxLength={20}
              onChange={() => {}}
              children={<SearchIcon />}
              value={mapInfo.content}
              name=""
            />
          </S.MapContainer>
        </S.InputContainer>

        {/*날짜*/}
        <S.Label number={5} required={true}>
          <span>날짜</span>
        </S.Label>
        <S.InputContainer number={5}>
          <Calender
            width={270}
            height={60}
            isMain={false}
            setDateInfo={setDateInfo}
            borderRadius={10}
            dateInfo={dateInfo}
          />
        </S.InputContainer>

        {/*내용*/}
        <S.Label number={6} required={true}>
          <span>내용</span>
        </S.Label>
        <S.InputContainer number={6}>
          <TextAreaBox
            value={content}
            width={inputWidth}
            height={212}
            placeholder="500자 이내의 내용을 입력해 주세요"
            maxLength={500}
            onChange={onChange}
            name="content"
            children={
              <CharacterCounter
                color={theme.COLOR['gray-3']}
                currentNum={content.length}
                maxNum={500}
              />
            }
          />
        </S.InputContainer>

        <S.EmptyContainer />
        <S.ButtonContainer paddingLeft={inputWidth - 160}>
          {spaceId ? (
            <BasicButton
              disabled={
                !title.length ||
                !content.length ||
                !dateInfo.startDate ||
                mapInfo.content == ''
              }
              onClick={onSubmitPost}
              width={160}
              height={44}
              children="게시글 올리기"
              fontSize={14}
            />
          ) : (
            <BasicButton
              disabled={
                !title.length ||
                !content.length ||
                !dateInfo.startDate ||
                mapInfo.content == ''
              }
              onClick={onSubmitPost}
              width={160}
              height={44}
              children="게시글 수정하기"
              fontSize={14}
            />
          )}
        </S.ButtonContainer>
      </S.GridWrapper>
    </S.Wrapper>
  );
};

export default CreatePost;
