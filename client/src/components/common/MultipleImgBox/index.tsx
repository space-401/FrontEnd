import S from '@components/common/MultipleImgBox/style';
import { ReactComponent as PlusPhotoIcon } from '@assets/svg/photo/plusIcon.svg';
import { ReactComponent as DeleteIcon } from '@assets/svg/photo/deleteIcon.svg';
import { useRef } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ImageType } from '@/types/image.type';

type MultiBoxType = {
  images: ImageType[];
  setImages: React.Dispatch<React.SetStateAction<ImageType[]>>;
  isAddPhoto: boolean;
  isBackground: boolean;
  setCurrentIdx: React.Dispatch<React.SetStateAction<number>>;
  currentIdx: number;
};

const MultipleImgBox = ({
  images,
  setImages,
  isAddPhoto, //사진 추가 기능이 들어가 있는지
  // currentIdx,
  setCurrentIdx,
}: MultiBoxType) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onAddImage = () => {
    inputRef.current && inputRef.current.click();
  };

  //이미지는 10개까지만 추가 설정
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (!files) return;

    let currentImgNum = images.length;

    let hasAlert = false;
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === 'string' && currentImgNum < 10) {
          const newObj: ImageType = {
            id: currentImgNum,
            img: result,
          };
          setImages((prev) => [...prev, newObj]);
          currentImgNum++;
        }
        if (currentImgNum >= 10 && !hasAlert) {
          alert('이미지는 10개까지만 추가됩니다');
          hasAlert = true;
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  //이미지 삭제
  const onClickDelete = (event: any) => {
    const draggableContextId =
      event.target.parentElement.parentElement?.getAttribute(
        'data-rbd-draggable-id'
      );
    const newImages = images.filter(
      (element) => element.id !== draggableContextId / 1
    );
    setImages(newImages);
    setCurrentIdx(0);
  };

  //dnd
  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = [...images];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setImages(items);
  };

  //선택한 이미지를 보기
  // const onClickCurrentImg = (sliderRef: any, idx: number) => {
  //   setCurrentIdx(idx);
  //   const newPosition = idx * 760;
  //   sliderRef.current.style.transform = `translateX(-${newPosition}px)`;
  // };

  return (
    <S.Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="imgList" direction="horizontal">
          {(provided) => (
            <div
              className="imgList"
              ref={provided.innerRef}
              style={{ display: 'flex' }}
              {...provided.droppableProps}
            >
              {images.map((image: any, idx: number) => (
                <Draggable
                  draggableId={`${image.id}`}
                  index={idx}
                  key={`${image.id}`}
                >
                  {(provided) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        style={{ position: 'relative' }}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <S.SmallPhotoBox
                          image={image.img}
                          // onClick={() => {
                          //   onClickCurrentImg(idx);
                          // }}
                          style={{ position: 'relative' }}
                        >
                          <DeleteIcon
                            onClick={(event: any) => {
                              onClickDelete(event);
                            }}
                            style={{
                              position: 'absolute',
                              top: 0,
                              right: 0,
                            }}
                          />
                        </S.SmallPhotoBox>
                      </div>
                    );
                  }}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {isAddPhoto && images.length < 10 && (
        <S.SmallPhotoBox onClick={onAddImage}>
          <PlusPhotoIcon />
          <form method="post">
            <input
              type="file"
              ref={inputRef}
              onChange={(e) => {
                handleFileChange(e);
              }}
              style={{ display: 'none' }}
              multiple
            />
          </form>
        </S.SmallPhotoBox>
      )}
    </S.Wrapper>
  );
};
export default MultipleImgBox;
