import { ImageArrType, ImageType } from '@/types';
import { ReactComponent as PhotoIcon } from '@/assets/svg/photoIcon.svg';
import { S } from '@/pages/CreateSpace/style';
import { BasicIcon } from '@/components/Create';
import { BasicBox } from '@/components/common';


const SpaceIcon = ({
  setImageArr,
  inputRef,
  imageArr,
  onClickOptionModalOpen,
  setIsIconModalOpen,
  isBasicIcon,
}: {
  setImageArr: React.Dispatch<React.SetStateAction<ImageArrType>>;
  inputRef: any;
  imageArr: ImageArrType;
  isBasicIcon: [false] | [true, number];
  onClickOptionModalOpen: () => void;
  setIsIconModalOpen: React.Dispatch<React.SetStateAction<[boolean, boolean]>>;
}) => {
  const BasicIconArr = BasicIcon();

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
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => {
          handleFileChange(e);
        }}
        ref={inputRef}
      />
      {!imageArr.cropImage && !isBasicIcon[0] ? (
        <S.InputContainer number={1} onClick={onClickOptionModalOpen}>
          <BasicBox width={160} borderradius={10}>
            <PhotoIcon />
          </BasicBox>
        </S.InputContainer>
      ) : (
        <S.InputContainer number={1}>
          <BasicBox
            onClick={() => {
              setIsIconModalOpen([true, false]);
            }}
            backgroundImage={
              isBasicIcon[0]
                ? BasicIconArr[isBasicIcon[1]]
                : imageArr.cropImage!
            }
            width={160}
            borderradius={10}
            color="grey"
          ></BasicBox>
        </S.InputContainer>
      )}
    </>
  );
};

export default SpaceIcon;