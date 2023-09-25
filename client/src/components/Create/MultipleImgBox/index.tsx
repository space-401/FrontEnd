import S from '@/components/Create/MultipleImgBox/style';
import { ReactComponent as PlusPhotoIcon } from '@assets/svg/photo/plusIcon.svg';
import { ReactComponent as DeleteIcon } from '@assets/svg/photo/deleteIcon.svg';
import { useRef } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ImageType } from '@/types/image.type';
import React from 'react';
import { ImageArrType } from '@/pages/CreatePost';

type MultiBoxType = {
  imageArr: ImageArrType;
  setImageArr: React.Dispatch<React.SetStateAction<ImageArrType>>;
  isBackground: boolean;
  setCurrentIdx?: React.Dispatch<React.SetStateAction<number>>;
  currentIdx?: number;
  onClickCurrentImg?: any;
  imgCount: number;
};

const MultipleImgBox = ({
  imageArr,
  setImageArr,
  onClickCurrentImg,
  currentIdx,
  setCurrentIdx,
  imgCount,
}: MultiBoxType) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  //이미지 추가하는 함수
  const onAddImage = () => {
    inputRef.current && inputRef.current.click();
  };

  //이미지는 10개까지만 추가 설정
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    imgNum: number
  ) => {
    e.preventDefault();
    const files = e.target.files;
    if (!files) return;

    let currentImgNum = imageArr.images.length + 1;

    let hasAlert = false;
    if (imgNum > 1) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result;
          if (typeof result === 'string' && currentImgNum <= 10) {
            const newObj: ImageType = {
              id: currentImgNum,
              img: result,
            };
            setImageArr((prev) => ({
              ...prev,
              images: [...prev.images, newObj],
            }));
            currentImgNum++;
          }
          if (currentImgNum >= 10 && !hasAlert) {
            alert('이미지는 10개까지만 추가됩니다');
            hasAlert = true;
          }
        };
        reader.readAsDataURL(files[i]);
      }
    } else {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === 'string') {
          const newObj: ImageType = {
            id: 1,
            img: result,
          };
          setImageArr((prev) => ({ ...prev, images: [newObj] }));
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  //이미지 삭제
  const onClickDelete = (event: any) => {
    const draggableContextId =
      event.target.parentNode.parentNode.parentNode.parentNode.getAttribute(
        'data-rbd-draggable-id'
      );
    const newImages = imageArr.images.filter(
      (element) => element.id !== draggableContextId / 1
    );
    setImageArr((prev) => ({ ...prev, images: [...newImages] }));
    if (currentIdx) {
      setCurrentIdx!(0);
    }
  };

  //dnd
  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = [...imageArr.images];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    // setImages(items);
    setImageArr((prev) => ({ ...prev, images: [...items] }));
  };

  return (
    <S.Wrapper>
      <S.Container>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="imgList" direction="horizontal">
            {(provided) => (
              <div
                className="imgList"
                ref={provided.innerRef}
                style={{ display: 'flex' }}
                {...provided.droppableProps}
              >
                {imageArr.images.map((image: any, idx: number) => (
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
                            onClick={() => {
                              onClickCurrentImg(idx);
                            }}
                            style={{ position: 'relative' }}
                          >
                            <S.DeleteIcon
                              onClick={(event: any) => {
                                onClickDelete(event);
                              }}
                              style={{ position: 'absolute' }}
                            >
                              <DeleteIcon />
                            </S.DeleteIcon>
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
        {imageArr.images.length < imgCount && (
          <S.SmallPhotoBox onClick={onAddImage}>
            <PlusPhotoIcon />
            <form method="post">
              <input
                type="file"
                ref={inputRef}
                onChange={(e) => {
                  handleFileChange(e, imgCount);
                }}
                style={{ display: 'none' }}
                multiple
              />
            </form>
          </S.SmallPhotoBox>
        )}
      </S.Container>
    </S.Wrapper>
  );
};
export default MultipleImgBox;
