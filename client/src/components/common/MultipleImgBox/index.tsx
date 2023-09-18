import S from '@components/common/MultipleImgBox/style';
import { ReactComponent as PlusPhotoIcon } from '@assets/svg/photo/plusIcon.svg';
import { ReactComponent as DeleteIcon } from '@assets/svg/photo/deleteIcon.svg';
import { useEffect, useRef, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

type MultiBoxType = {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  isAddPhoto: boolean;
  onClickCurrentImg?: any;
  isBackground: boolean;
};

type makeImgIdType = {
  id: number;
  img: string;
};

const MultipleImgBox = ({
  images,
  setImages,
  isAddPhoto, //사진 추가 기능이 들어가 있는지

  onClickCurrentImg,
}: MultiBoxType) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  //아이디 포함 이미지 객체를 가진 배열
  const [imgListWidthId, setImgListWidthId] = useState<makeImgIdType[]>([]);
  const onAddImage = () => {
    inputRef.current && inputRef.current.click();
  };

  //이미지는 10개까지만 추가 설정
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (!files) return;

    let currentImgNum = images.length;
    console.log('현재이미지길이', currentImgNum);
    let hasAlert = false;
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === 'string' && currentImgNum < 10) {
          setImages((prev) => [...prev, result]);
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
  const onClickDelete = (index: number) => {
    const images_copy = images.slice();
    setImages([
      ...images_copy.slice(0, index),
      ...images_copy.slice(index + 1, images_copy.length),
    ]);
  };

  const makeImgId = (images: string[]) => {
    const ImgListwithId: makeImgIdType[] = [];
    images.map((image, index) => {
      ImgListwithId.push({
        id: index,
        img: image,
      });
    });
    return ImgListwithId;
  };

  //아이디 포함 이미지 객체 생성
  useEffect(() => {
    const copy_images = [...images];
    setImgListWidthId(makeImgId(copy_images));
  }, []);

  //dnd
  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = [...imgListWidthId];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setImgListWidthId(items);
    // if (type === 'column') {
    //   // column Drag 처리 부분 추가됨
    //   const newColumnOrder = Array.from(data.columnOrder);
    //   newColumnOrder.splice(source.index, 1);
    //   newColumnOrder.splice(destination.index, 0, draggableId);

    //   const newData = {
    //     ...data,
    //     columnOrder: newColumnOrder,
    //   };
    //   setData(newData);
    //   return;
    // }
  };

  return (
    <S.Wrapper>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <Droppable droppableId="imgList" direction="horizontal">
          {(provided) => (
            <div
              className="imgList"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ display: 'flex' }}
            >
              {imgListWidthId.map((image: any, idx: number) => (
                <Draggable
                  draggableId={`img-${image.id}`}
                  index={idx}
                  key={image.id}
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
                        />
                        <DeleteIcon
                          onClick={() => {
                            onClickDelete(idx);
                          }}
                          style={{ position: 'absolute', top: 0, right: 0 }}
                        />
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
    </S.Wrapper>
  );
};
export default MultipleImgBox;

// {isAddPhoto && images.length < 10 && (
//   <S.SmallPhotoBox onClick={onAddImage}>
//     <PlusPhotoIcon />
//     <form method="post">
//       <input
//         type="file"
//         ref={inputRef}
//         onChange={(e) => {
//           handleFileChange(e);
//         }}
//         style={{ display: 'none' }}
//         multiple
//       />
//     </form>
//   </S.SmallPhotoBox>
// )}
