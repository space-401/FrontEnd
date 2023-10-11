import { S } from '@/components/Main/WelcomeAndSettingModal/style';
import BasicBox from '@/components/common/BasicBox';
import BasicButton from '@/components/common/BasicButton';
import { ReactComponent as GoArrowIcon } from '@/assets/svg/goArrowIcon.svg';
import { Box } from '@mui/material';

type WelcomeModalProps = {
  spaceTitle: string;
  imgUrl: string;
  onMoveSettingModal: () => void;
};

//프로필 기본 이미지 선택
const WelcomeModal = ({
  spaceTitle,
  imgUrl,
  onMoveSettingModal,
}: WelcomeModalProps) => {
  return (
    <Box tabIndex={-1}>
      <S.Wrapper>
        <S.SectionWrapper gap={32}>
          <S.Text weight={600}>Welcome to Kkiri!</S.Text>
          <S.DetailText>
            새로운 스페이스를 만들었습니다!
            <br />
            친구들과 함께 추억을 공유해보세요.
          </S.DetailText>
          <BasicBox
            width={240}
            borderradius={15}
            backgroundImage={imgUrl}
            color="grey"
          />
          <S.Text weight={400}>'{spaceTitle}'</S.Text>
          <BasicButton width={212} height={48} onClick={onMoveSettingModal}>
            <S.FlexContainer>
              <div>프로필 설정하기</div>
              <GoArrowIcon />
            </S.FlexContainer>
          </BasicButton>
        </S.SectionWrapper>
      </S.Wrapper>
    </Box>
  );
};

export default WelcomeModal;
