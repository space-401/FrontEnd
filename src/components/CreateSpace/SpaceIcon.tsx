import { ImageArrType, ImageType } from '@/types';
import { S } from '@/pages/CreateSpace/style';

const SpaceIcon = ({
  setImageArr,
  inputRef,
}: {
  setImageArr: any;
  inputRef: any;
}) => {
  //파일 변경 함수
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (!files) return;
    //여러개의 파일을 하나씩 순회하여 읽어오기
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        const newObj: ImageType = {
          id: 1,
          img: result,
        };
        setImageArr((prev: ImageArrType) => ({ ...prev, image: newObj }));
      }
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <>
      <S.TitleContainer number={1} required={true}>
        <div>스페이스 아이콘</div>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => {
            handleFileChange(e);
          }}
          ref={inputRef}
        />
      </S.TitleContainer>
    </>
  );
};

export default SpaceIcon;
