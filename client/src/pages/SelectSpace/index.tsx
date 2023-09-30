import S from '@pages/SelectSpace/style';
import FlipCard from '@/components/common/FlipCard/FlipCard';
import spaceListMock from '@/mocks/data/SpaceList/spaceList.mock';
import { OneSpaceType } from '@/types/space.type';
import { useState } from 'react';
import { ReactComponent as PlusIcon } from '@/assets/svg/plusIcon.svg';
const SelectSpace = () => {
  const [spaceList, setSpaceList] = useState<OneSpaceType[]>([]);
  return (
    <S.Wrapper>
      <S.Container>
        <S.Img />
        <S.SpaceContainer>
          {spaceList.length < 5 && (
            <S.AddBox>
              <PlusIcon />
            </S.AddBox>
          )}
          {spaceListMock?.map((space) => {
            return (
              <>
                <FlipCard
                  item={space}
                  size="medium"
                  imgUrl={''}
                  onClick={() => {}}
                  borderRadius={'20px'}
                />
              </>
            );
          })}
        </S.SpaceContainer>
      </S.Container>
    </S.Wrapper>
  );
};
export default SelectSpace;
