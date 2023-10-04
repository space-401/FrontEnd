import S from '@pages/SelectSpace/style';
import FlipCard from '@/components/common/FlipCard/FlipCard';
import { ReactComponent as PlusIcon } from '@/assets/svg/plusIcon.svg';
import BasicButton from '@/components/common/BasicButton';
import { useNavigate } from 'react-router-dom';
import {spaceList} from "@mocks/data/space.mock";

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
              onClick={() => {
                navigate('/invite');
              }}
            >
              초대코드 입력
            </BasicButton>
          </S.ButtonContainer>
          {spaceList.length < 5 && (
            <S.AddBox>
              <PlusIcon />
            </S.AddBox>
          )}
          {spaceList.map((space) => {
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
