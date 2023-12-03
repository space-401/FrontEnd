import { theme } from '@/styles';
import { S } from '@/pages/CreateSpace/style';
import { CharacterCounter } from '@/components/Create';
import { TextAreaBox } from '@/components/common';


export const SpaceDescription = ({
  content,
  onChange,
}: {
  content: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) => {
  return (
    <>
      <S.InputContainer number={3}>
        <TextAreaBox
          value={content}
          height={160}
          placeholder="스페이스 설명 입력"
          maxLength={100}
          onChange={onChange}
          name="content"
          children={
            <CharacterCounter
              color={theme.COLOR['gray-3']}
              currentNum={content.length}
              maxNum={100}
            />
          }
        />
      </S.InputContainer>
    </>
  );
};