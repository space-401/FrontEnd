import { PATH } from '@/constants';
import { useSpaceListQuery } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { ReactComponent as PlusIcon } from '@/assets/svg/plusIcon.svg';
import { ReactComponent as SelectLogo } from '@/assets/svg/selectlogo.svg';
import { BasicButton, FlipCard } from '@/components/common';
import { S } from './style';

const SelectSpace = () => {
  const navigate = useNavigate();

  const spaceList = useSpaceListQuery().spaceList!.spaceList!;

  return (
    spaceList && (
      <S.Wrapper>
        <S.Container>
          <S.LogoBox>
            <SelectLogo className={'main-logo'} />
          </S.LogoBox>
          <S.Content>
            <S.ButtonContainer>
              <BasicButton
                fontSize={16}
                width={130}
                borderRadius={10}
                onClick={() => navigate(PATH.INVITE)}
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
              {spaceList.length < 5 &&
                Array.from({ length: 4 - spaceList.length }).map(() => (
                  <S.EmptySpaceBox key={uuid()}></S.EmptySpaceBox>
                ))}
            </S.SpaceContainer>
          </S.Content>
        </S.Container>
      </S.Wrapper>
    )
  );
};

export default SelectSpace;
