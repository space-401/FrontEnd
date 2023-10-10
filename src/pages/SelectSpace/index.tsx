import S from '@pages/SelectSpace/style';
import FlipCard from '@/components/common/FlipCard/FlipCard';
import { ReactComponent as PlusIcon } from '@/assets/svg/plusIcon.svg';
import { ReactComponent as SelectLogo } from '@/assets/svg/selectlogo.svg';
import BasicButton from '@/components/common/BasicButton';
import { useNavigate } from 'react-router-dom';
import { spaceList } from '@mocks/data/space.mock';
import { PATH } from '@constants/path';
import { v4 as uuid } from 'uuid';

const SelectSpace = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        <SelectLogo className={'main-logo'} />
        <S.Content>
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
          <S.SpaceContainer>
            {spaceList?.length < 5 && (
              <S.AddBox
                onClick={() => {
                  navigate(PATH.SPACE_CREATE);
                }}
              >
                <PlusIcon width={24} height={24} />
              </S.AddBox>
            )}
            {spaceList.map((space) => {
              return (
                <FlipCard
                  key={uuid()}
                  item={space}
                  size="medium"
                  imgUrl={space.imgUrl}
                  onClick={() => {
                    navigate(PATH.SPACE_MAIN(space.spaceId));
                  }}
                  borderRadius={'20px'}
                />
              );
            })}
            {spaceList.length < 5 &&
              Array.from({ length: 4 - spaceList.length }).map(() => (
                <S.EmptySpaceBox key={uuid()}></S.EmptySpaceBox>
              ))}
          </S.SpaceContainer>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};
export default SelectSpace;
