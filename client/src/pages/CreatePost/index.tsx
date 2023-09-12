import S from './style';
import BasicBox from '@/components/common/BasicBox';
import InputBox from '@/components/common/InputBox';
import TextAreaBox from '@/components/common/TextAreaBox';
import CircleIcon from '@/components/common/CircleIcon/CircleIcon';
import BasicButton from '@/components/common/BasicButton';
import Calendar from '@/components/common/Calender';
import { ReactComponent as PhotoIcon } from '@assets/svg/photoIcon.svg';
import { ReactComponent as QuestionIcon } from '@assets/svg/QuestionIcon.svg';
import FullScreenModal from '@/layout/FullScreenModal/FullScreenModal';
import Cat from '@assets/cat.jpg';
import { selectType } from '@/types/main.type';
import CreateSelectBox from '@/components/CreateSelectBox';
import { useState, useRef } from 'react';
import { users_mock } from '@/mocks/data/user/users.mock';
import createPostMock from '@/mocks/data/createPostPage/createPost.mock';
import ImgEditModal from '@/components/common/ImageEditModal/ImageEditModal';
import { theme } from '@/styles/theme/theme';

const CreatePost = () => {
  const [userList, setUserList] = useState<selectType[]>([]);
  //이미지 파일을 저장하는 곳
  const [images, setImages] = useState<string[]>([]);
  //이미지 파일을 저장하는 곳
  const [cropImages, setCropImages] = useState<string[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(userList);

  //자식 inputRef 요소를 클릭하는 함수
  const onClickImgEditModal = () => {
    if (inputRef.current && images.length == 0) inputRef.current.click();
    setIsEditModalOpen(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const files = e.target.files;

    if (!files) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        setImages((prev) => [...prev, result]);
      }
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <FullScreenModal isTitle={false}>
      {/*사진 편집 모달*/}
      <S.Wrapper>
        {cropImages.length > 0 && !isEditModalOpen ? (
          <S.PhotoBox src={cropImages[0]} onClick={onClickImgEditModal} />
        ) : isEditModalOpen && images.length ? (
          <ImgEditModal
            setIsEditModalOpen={setIsEditModalOpen}
            images={images}
            setImages={setImages}
            setCropImages={setCropImages}
            handleFileChange={handleFileChange}
          />
        ) : (
          <BasicBox color="grey" width={348} borderradius={20}>
            <S.PhotoContainer>
              <PhotoIcon />
              <BasicButton
                onClick={onClickImgEditModal}
                width={55}
                height={20}
                borderRadius={5}
                backgroundColor={theme.COLOR['gray-2']}
              >
                <input
                  type="file"
                  ref={inputRef}
                  onChange={(e) => {
                    handleFileChange(e);
                  }}
                  style={{ display: 'none' }}
                />
                <div>사진 선택</div>
              </BasicButton>
            </S.PhotoContainer>
          </BasicBox>
        )}

        <S.GridWrapper>
          {/*스페이스 정보*/}
          <S.SpaceInfoContainer>
            <CircleIcon img_url={Cat}></CircleIcon>
            <div>스페이스 이름</div>
          </S.SpaceInfoContainer>

          {/*게시글 제목*/}
          <S.Label number={1} required={true}>
            게시글 제목
          </S.Label>
          <S.InputContainer number={1}>
            <InputBox
              height={60}
              width={628}
              placeholder="16자 이내의 제목을 입력해 주세요."
              type="text"
              maxLength={16}
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
              setState={setUserList}
              menuHeight={89 * Math.floor(users_mock.length / 2)}
              menuWidth={628}
            />
          </S.InputContainer>

          {/*장소*/}
          <S.Label number={3} required={true}>
            장소
          </S.Label>
          <S.InputContainer number={3}>
            <InputBox
              height={60}
              placeholder="등록할 장소를 입력해주세요."
              type="text"
              maxLength={20}
              width={628}
            />
          </S.InputContainer>

          {/*날짜*/}
          <S.Label number={4} required={true}>
            날짜
          </S.Label>
          <S.InputContainer number={4}>
            <Calendar />
          </S.InputContainer>

          {/*내용*/}
          <S.Label number={5} required={true}>
            내용
          </S.Label>
          <S.InputContainer number={5}>
            <TextAreaBox
              height={212}
              placeholder="500자 이내의 내용을 입력해 주세요."
              maxLength={500}
              width={628}
            />
          </S.InputContainer>

          {/*태그*/}
          <S.FlexContainer>
            <S.Label number={6} required={false}>
              태그
            </S.Label>
            <S.IconContainer>
              <QuestionIcon />
            </S.IconContainer>
          </S.FlexContainer>

          <S.InputContainer number={6}>
            <CreateSelectBox
              labelName={'태그'}
              ListItem={createPostMock}
              BoxWidth={628}
              setState={setUserList}
              menuHeight={89 * Math.floor(users_mock.length / 2)}
              menuWidth={628}
            />
          </S.InputContainer>
          <S.EmptyContainer />
          <S.ButtonContainer>
            <BasicButton
              width={160}
              height={44}
              children="게시글 올리기"
              fontSize={14}
            />
          </S.ButtonContainer>
        </S.GridWrapper>
      </S.Wrapper>
    </FullScreenModal>
  );
};
export default CreatePost;
