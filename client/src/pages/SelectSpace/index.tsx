import S from '@pages/SelectSpace/style';
import FlipCard from '@/components/common/FlipCard/FlipCard';
import { ReactComponent as PlusIcon } from '@/assets/svg/plusIcon.svg';
import BasicButton from '@/components/common/BasicButton';
import { useNavigate } from 'react-router-dom';
import { spaceList } from '@mocks/data/space.mock';
import { PATH } from '@constants/path';

const SelectSpace = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        <S.Img />
        <S.SpaceContainer>
          <S.ButtonContainer>
            <BasicButton
              fontSize={16}
              width={130}
              borderRadius={10}
              onClick={() => {}}
            >
              초대코드 입력
            </BasicButton>
          </S.ButtonContainer>
          {spaceList.length < 5 && (
            <S.AddBox
              onClick={() => {
                navigate(PATH.SPACE_CREATE);
              }}
            >
              <PlusIcon />
            </S.AddBox>
          )}
          {spaceList.map((space) => {
            return (
              <>
                <FlipCard
                  key={Math.floor(Math.random() * 1000)}
                  item={space}
                  size="medium"
                  imgUrl={space.imgUrl}
                  onClick={() => {
                    navigate(`/space/${space.spaceId}`);
                  }}
                  borderRadius={'20px'}
                />
              </>
            );
          })}
          {spaceList.length < 5 &&
            Array.from({ length: 4 - spaceList.length }).map(() => (
              <S.EmptySpaceBox
                key={Math.floor(Math.random() * 1000)}
              ></S.EmptySpaceBox>
            ))}
        </S.SpaceContainer>
      </S.Container>
    </S.Wrapper>
  );
};
export default SelectSpace;
