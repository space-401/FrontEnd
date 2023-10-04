import S from '@pages/CreatePost/style';
import BasicBox from '@/components/common/BasicBox';
import InputBox from '@/components/common/InputBox';
import TextAreaBox from '@/components/common/TextAreaBox';
import CircleIcon from '@/components/common/CircleIcon/CircleIcon';
import BasicButton from '@/components/common/BasicButton';
import Calender from '@/components/common/Calender/Calender';
import { ReactComponent as PhotoIcon } from '@assets/svg/photoIcon.svg';
import { ReactComponent as SearchIcon } from '@/assets/svg/searchIcon.svg';
import { selectType } from '@/types/main.type';
import CreateSelectBox from '@/components/Create/CreateSelectBox';
import { useState, useRef } from 'react';
import ImagesEditModal from '@/components/Create/ImageEditModal/ImagesEditModal';
import { theme } from '@/styles/theme/theme';
import { usePhotoModalStore } from '@/store/modal';
import ImgSlider from '@/components/Create/ImgSlider';
import { ImageType } from '@/types/image.type';
import CharacterCounter from '@/components/Create/CharacterCounter';
import useInputs from '@/hooks/common/useInputs';
import SearchModal from '@components/Create/SearchMapModal';
import { MapType } from '@/types/marker.type';
import { DateInfoType } from '@/types/post.type';
import { ImageArrType } from '@/types/image.type';
import AlertModal from '@/modal/Alert/AlertModal';
import { useAlertModalStore, useConfirmModalStore } from '@/store/modal';
import { useParams } from 'react-router-dom';
import { usePostDetailQuery } from '@/hooks/api/post/usePostDetailQuery';
import { makeObj } from '@/utils/makeObj';
import ConfirmModal from '@/modal/Confirm/ConfirmModal';
import { tagList, userList } from '@mocks/data/common';

const CreatePost = () => {
  const params = useParams();
  const postId = params.postId;
  const { postDetailData } = usePostDetailQuery(Number(postId), true);

  const inputRef = useRef<HTMLInputElement>(null);

  //이미지 파일을 저장하는 곳
  const [imageArr, setImageArr] = useState<ImageArrType>({
    images: postDetailData ? makeObj(postDetailData.imgs) : [],
    cropImages: postDetailData ? postDetailData.imgs : [],
    convertedImages: [],
  });
  //현재 선택한 이미지의 index
  const [currentIdx, setCurrentIdx] = useState(0);

  //수정모드일 떄 로직
  // useEffect(() => {
  //   if (postDetailData) {
  //     setImageArr({
  //       images: makeObj(postDetailData.imgs) || [],
  //       cropImages: postDetailData.imgs || [],
  //       convertedImages: [],
  //     });
  //     setDateInfo({
  //       startDate: postDetailData.date.startDate,
  //       endDate: postDetailData.date.endDate,
  //     });
  //   }
  // }, []);

  //현재 편집 모달이 열려있는지
  const { ModalOpen, isOpen } = usePhotoModalStore();
  //확인 모달이 열려있는지
  const {
    ModalOpen: confirmModalOpen,
    ModalClose: confirmModalClose,
    isOpen: isConfirmModalOpen,
  } = useConfirmModalStore();
  //현재 글자개수 세기
  const { values, onChange } = useInputs({
    title: postDetailData?.postTitle || '',
    content: postDetailData?.postDescription || '',
  });
  const { title, content } = values;

  //선택한 장소 정보
  const [mapInfo, setMapInfo] = useState<MapType>({
    content: postDetailData ? postDetailData.placeTitle : '',
    position: postDetailData
      ? {
          lng: String(postDetailData.location.lng),
          lat: String(postDetailData.location.lat),
        }
      : { lng: '0', lat: '0' },
  });
  //날짜
  const [dateInfo, setDateInfo] = useState<DateInfoType>({
    startDate: null,
    endDate: null,
  });
  //장소 선택 모달이 열렸는지
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  //사람
  const [people, setPeople] = useState<selectType[]>(
    postDetailData ? postDetailData.tagUsers : []
  );
  const [tags, setTags] = useState<selectType[]>([]);
  //경고 모달
  const {
    isOpen: isAlertModalOpen,
    ModalClose: AlertModalClose,
    ModalOpen: AlertModalOpen,
  } = useAlertModalStore();

  //자식 inputRef 요소를 클릭하는 함수
  const onClickImgEditModal = () => {
    if (inputRef.current && imageArr.images.length == 0)
      inputRef.current.click();
    if (imageArr.cropImages.length > 0) {
      if (confirm('기존에 편집사항들이 삭제됩니다. 다시 편집하시겠습니까?')) {
        setImageArr((prev) => ({ ...prev, cropImages: [] }));
        ModalOpen();
      }
    } else {
      ModalOpen();
    }
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
          console.log(imageArr);
          currentImgNum++;
        }
        if (currentImgNum >= 10 && !hasAlert) {
          return AlertModalOpen();
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  //제출 후 포스트 생성 페이지로 이동
  const onSubmit = () => {
    console.log('제출', imageArr);
    console.log();
    //성공시
    confirmModalOpen();
  };

  const onMoveCreatePost = () => {
    const currentURL = window.location.href;
    const parts = currentURL.split('/');
    const index = parts.indexOf('post');
    const result = parts.slice(0, index + 1).join('/');
    //확인 모달 닫히면 포스트 생성 페이지로 이동
    window.location.href = result;
  };

  const inputWidth = Number('calc(100% - 60px)');

  return (
    <S.Wrapper>
      {isAlertModalOpen && (
        <AlertModal
          ModalClose={AlertModalClose}
          isOpen={isOpen}
          width={300}
          alertMessage="확인"
          alertTitle="이미지는 10개까지만 추가됩니다."
        />
      )}
      {isConfirmModalOpen && (
        <ConfirmModal
          isPositiveModal={true}
          titleMessage="성공적으로 포스팅되었습니다."
          ApproveMessage="확인"
          closeMessage="닫기"
          AsyncAction={onMoveCreatePost}
          ModalClose={confirmModalClose}
          isOpen={isConfirmModalOpen}
        />
      )}
      {isOpen && (
        <ImagesEditModal
          imageArr={imageArr}
          setImageArr={setImageArr}
          currentIdx={currentIdx}
          setCurrentIdx={setCurrentIdx}
          handleFileChange={handleFileChange}
        />
      )}
      {imageArr.cropImages.length == 0 ? (
        <BasicBox color={theme.COLOR['gray-5']} width={348} borderradius={20}>
          <S.PhotoContainer>
            <PhotoIcon />
            <BasicButton
              onClick={onClickImgEditModal}
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
      ) : (
        <div style={{ zIndex: 1000, width: '348px' }}>
          <ImgSlider
            images={imageArr.cropImages}
            onClickImgEditModal={onClickImgEditModal}
          />
        </div>
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
          <CircleIcon size={48} img_url=""></CircleIcon>
          <div>스페이스 이름</div>
        </S.SpaceInfoContainer>

        {/*게시글 제목*/}
        <S.Label number={1} required={true}>
          <span>게시글 제목</span>
        </S.Label>
        <S.InputContainer number={1}>
          <InputBox
            height={60}
            readonly={false}
            placeholder="16자 이내의 제목을 입력해 주세요"
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

        {/*함께한 친구들*/}
        <S.Label number={2} required={false}>
          <span>함께한 친구들</span>
        </S.Label>
        <S.InputContainer number={2}>
          <CreateSelectBox
            selectState={people}
            labelName={'사용자'}
            ListItem={userList}
            BoxWidth={inputWidth}
            setState={setPeople}
            menuHeight={89 * Math.floor(userList.length / 2)}
            menuWidth={inputWidth}
            // state={people.map((v) => ({
            //   id: v.userId,
            //   title: v.userName,
            // }))}
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
            selectState={tags}
            labelName={'태그'}
            ListItem={tagList}
            BoxWidth={inputWidth}
            setState={setTags}
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
              readonly={true}
              height={60}
              placeholder="등록할 장소를 입력해 주세요"
              type="text"
              maxLength={20}
              width={inputWidth}
              children={<SearchIcon />}
              onChange={() => {}}
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
        <S.ButtonContainer>
          <BasicButton
            disabled={
              !title.length || !content.length || !dateInfo.startDate
              // !postData.place.content
            }
            onClick={onSubmit}
            width={160}
            height={44}
            children="게시글 올리기"
            fontSize={14}
          />
        </S.ButtonContainer>
      </S.GridWrapper>
    </S.Wrapper>
  );
};

export default CreatePost;
