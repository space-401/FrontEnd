import S from '@pages/createPost/style';
import BasicBox from '@/components/common/BasicBox';
import InputBox from '@/components/common/InputBox';
import TextAreaBox from '@/components/common/TextAreaBox';
import CircleIcon from '@/components/common/CircleIcon/CircleIcon';
import BasicButton from '@/components/common/BasicButton';
import Calender from '@/components/common/Calender/Calender';
import { ReactComponent as PhotoIcon } from '@assets/svg/photoIcon.svg';
import { ReactComponent as QuestionIcon } from '@assets/svg/QuestionIcon.svg';
import { ReactComponent as SearchIcon } from '@/assets/svg/searchIcon.svg';
import { selectType } from '@/types/main.type';
import CreateSelectBox from '@/components/Create/CreateSelectBox';
import { useState, useRef, useEffect } from 'react';
import { users_mock } from '@/mocks/data/user/users.mock';
import createPostMock from '@/mocks/data/createPostPage/createPost.mock';
import ImagesEditModal from '@/components/Create/ImageEditModal/ImagesEditModal';
import { theme } from '@/styles/theme/theme';
import { usePhotoModalStore } from '@/store/modal';
import ImgSlider from '@/components/Create/ImgSlider';
import { ImageType } from '@/types/image.type';
import CharacterCounter from '@/components/Create/CharacterCounter';
import useInputs from '@/hooks/common/useInputs';
import SearchModal from '@components/Create/SearchMapModal';
import { MarkerType } from '@/components/Create/SearchMapModal/component/MapBox';
import { PostType } from '@/types/post.type';
import { ImageArrType } from '@/types/image.type';
// import { useForm } from 'react-hook-form';

const CreatePost = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  //이미지 파일을 저장하는 곳
  const [imageArr, setImageArr] = useState<ImageArrType>({
    images: [],
    cropImages: [],
    convertedImages: [],
  });
  //현재 편집 모달이 열려있는지
  const { ModalOpen, isOpen } = usePhotoModalStore();
  //현재 선택한 이미지의 index
  const [currentIdx, setCurrentIdx] = useState(0);
  //현재 글자개수 세기
  const { values, onChange } = useInputs({
    title: '',
    content: '',
  });
  const { title, content } = values;

  //선택한 장소 정보
  const [mapInfo, setMapInfo] = useState<MarkerType>({
    content: '',
    position: { lng: '0', lat: '0' },
    markerId: '',
  });
  //장소 선택 모달이 열렸는지
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  //현재 포스트 객체 데이터
  const [postData, setPostData] = useState<PostType>({
    title: '',
    content: '',
    people: [],
    tag: [],
    place: {
      content: '',
      position: {
        lng: '',
        lat: '',
      },
    },
    imgs: [],
    date: {
      startDate: null,
      endDate: null,
    },
  });

  //친구들 상태 바꾸는 함수
  const setPeopleState = (newPeopleState: selectType[]) => {
    setPostData((prev) => ({ ...prev, people: newPeopleState }));
  };

  //태그 바꾸는 함수
  const setTagState = (newTagState: selectType[]) => {
    setPostData((prev) => ({ ...prev, tag: newTagState }));
  };

  //자식 inputRef 요소를 클릭하는 함수
  const onClickImgEditModal = () => {
    if (inputRef.current && imageArr.images.length == 0)
      inputRef.current.click();
    if (imageArr.cropImages.length > 0) {
      if (confirm('기존에 편집사항들이 삭제됩니다. 다시 편집하시겠습니까?')) {
        return ModalOpen();
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
    let hasAlert = false;

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
          alert('이미지는 10개까지만 추가됩니다');
          hasAlert = true;
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };
  //이미지를 데이터 객체에 추가
  useEffect(() => {
    setPostData({
      ...postData,
      imgs: [...imageArr.convertedImages],
    });
  }, [imageArr.convertedImages]);

  const onSubmit = () => {
    console.log(postData);
    // console.log('imgs', convertedImages);
    // console.log('title', title);
    // console.log('content', content);
    // console.log('userList', userList);
    // console.log('tagList', tagList);
    // console.log('place', mapInfo);
    // console.log('setDateInfo', dateInfo);
  };

  return (
    <S.Wrapper>
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
          <CircleIcon img_url=""></CircleIcon>
          <div>스페이스 이름</div>
        </S.SpaceInfoContainer>

        {/*게시글 제목*/}
        <S.Label number={1} required={true}>
          게시글 제목
        </S.Label>
        <S.InputContainer number={1}>
          <InputBox
            height={60}
            readonly={false}
            width={628}
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

        {/*함께한 친구들*/}
        <S.Label number={2} required={false}>
          함께한 친구들
        </S.Label>
        <S.InputContainer number={2}>
          <CreateSelectBox
            labelName={'사용자'}
            ListItem={users_mock}
            BoxWidth={628}
            setState={setPeopleState}
            menuHeight={89 * Math.floor(users_mock.length / 2)}
            menuWidth={628}
          />
        </S.InputContainer>

        {/*태그*/}
        <S.FlexContainer>
          <S.Label number={3} required={false}>
            태그
          </S.Label>
          <S.IconContainer>
            <QuestionIcon />
          </S.IconContainer>
        </S.FlexContainer>

        <S.InputContainer number={3}>
          <CreateSelectBox
            labelName={'태그'}
            ListItem={createPostMock}
            BoxWidth={628}
            setState={setTagState}
            menuHeight={100 * Math.floor(users_mock.length / 2)}
            menuWidth={628}
          />
        </S.InputContainer>

        {/*장소*/}
        <S.Label number={4} required={true}>
          장소
        </S.Label>
        <S.InputContainer number={4}>
          <S.MapContainer onClick={() => setIsMapModalOpen(true)}>
            <InputBox
              readonly={true}
              height={60}
              placeholder="등록할 장소를 입력해주세요."
              type="text"
              maxLength={20}
              width={628}
              children={<SearchIcon />}
              onChange={() => {}}
              name=""
            />
          </S.MapContainer>
        </S.InputContainer>

        {/*날짜*/}
        <S.Label number={5} required={true}>
          날짜
        </S.Label>
        <S.InputContainer number={5}>
          <Calender isMain={false} setPostData={setPostData} />
        </S.InputContainer>

        {/*내용*/}
        <S.Label number={6} required={true}>
          내용
        </S.Label>
        <S.InputContainer number={6}>
          <TextAreaBox
            height={212}
            placeholder="500자 이내의 내용을 입력해 주세요."
            maxLength={500}
            width={628}
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
              !title.length || !content.length || !postData.date.startDate
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
