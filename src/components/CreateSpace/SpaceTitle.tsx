import { theme } from '@/styles';
import { S } from '@/pages/CreateSpace/style';
import { CharacterCounter } from '@/components/Create';
import { InputBox } from '@/components/common';

const SpaceTitle = ({
  title,
  onChange,
}: {
  title: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) => {
  return (
    <>
      <S.TitleContainer number={2} required={true}>
        <div>스페이스 명</div>
      </S.TitleContainer>
      <S.InputContainer number={2}>
        <InputBox
          readonly={false}
          height={60}
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
          value={title}
        />
      </S.InputContainer>
    </>
  );
};

export default SpaceTitle;
