import S from '@/components/Main/WelcomeAndSettingModal/style';
import BasicBox from '@/components/common/BasicBox';

type WelcomeModalProps = {
  spaceTitle: string;
  imgUrl: string;
};

//프로필 기본 이미지 선택
const WelcomeModal = ({ spaceTitle, imgUrl }: WelcomeModalProps) => {
  return (
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
    </S.SectionWrapper>
  );
};

export default WelcomeModal;
