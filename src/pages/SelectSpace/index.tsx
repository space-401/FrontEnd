import { MAX_SPACE_COUNT, PATH } from '@/constants';
import { useSpaceListQuery } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { ReactComponent as PlusIcon } from '@/assets/svg/plusIcon.svg';
import { ReactComponent as SelectLogo } from '@/assets/svg/selectlogo.svg';
import { CharacterCounter } from '@/components/Create';
import { BasicButton, FlipCard } from '@/components/common';
import { S } from './style';

const SelectSpace = () => {
  const navigate = useNavigate();

  const spaceList = useSpaceListQuery().spaceList!.spaceList!;
  const spaceCount = spaceList.length;
  return (
    spaceList && (
      <S.Wrapper>
        <S.Container>
          <S.LogoBox>
            <SelectLogo className={'main-logo'} />
          </S.LogoBox>
          <S.Content>
            <S.ButtonContainer>
              {spaceCount < MAX_SPACE_COUNT ? (
                <BasicButton
                  fontSize={16}
                  width={130}
                  borderRadius={10}
                  onClick={() => navigate(PATH.INVITE)}
                >
                  초대코드 입력
                </BasicButton>
              ) : null}
            </S.ButtonContainer>
            <S.SpaceInfoBox>
              <div>현재 스페이스 개수</div>
              <S.CounterBox>
                <CharacterCounter
                  currentNum={spaceCount}
                  maxNum={MAX_SPACE_COUNT}
                  color="white"
                />
              </S.CounterBox>
            </S.SpaceInfoBox>
            <S.SpaceContainer>
              {spaceCount < MAX_SPACE_COUNT ? (
                <S.AddBox
                  onClick={() => {
                    navigate(PATH.SPACE_CREATE);
                  }}
                >
                  <PlusIcon width={24} height={24} />
                </S.AddBox>
              ) : null}
              {spaceList?.map((space) => {
                return (
                  <FlipCard
                    key={uuid()}
                    item={space}
                    isBig={false}
                    imgUrl={space.imgUrl}
                    onClick={() => {
                      navigate(PATH.SPACE_MAIN(space.spaceId));
                    }}
                  />
                );
              })}
            </S.SpaceContainer>
          </S.Content>
        </S.Container>
      </S.Wrapper>
    )
  );
};

export default SelectSpace;
