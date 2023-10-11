// import { S, M } from '@/components/Main/WelcomeAndSettingModal/style';
// import { useRef, useState } from 'react';
// import { ImageArrType } from '@/types/image.type';
// import { ImageType } from '@/types/image.type';
// import CircleIcon from '@/components/common/CircleIcon/CircleIcon';
// import InputBox from '@/components/common/InputBox';
// import CharacterCounter from '@/components/Create/CharacterCounter';
// import { ReactComponent as ProfileMock } from '@assets/svg/profileMock.svg';
// import { Box, Modal } from '@mui/material';
// import { ReactComponent as DeleteIcon } from '@assets/svg/whiteDeleteIcon.svg';
// import ImgEditModal from '@/components/Create/ImageEditModal/ImageEditModal';
// import BasicButton from '@/components/common/BasicButton';

// type SettinModalProps = {
//   ModalClose: () => void;
//   isOpen: boolean;
// };

// //프로필 수정 모달
// const SettingModal = ({ ModalClose, isOpen }: SettinModalProps) => {
//   //이미지 모달이 열렸는지
//   const [isImageModalOpen, setImageModalOpen] = useState(false);

//   const onOpenModal = () => {
//     setImageModalOpen(true);
//   };

//   const inputRef = useRef<HTMLInputElement>(null);

//   const [nickName, setNickName] = useState('');
//   const [imageArr, setImageArr] = useState<ImageArrType>({
//     images: [],
//     cropImages: [],
//     convertedImages: [],
//   });

//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = e.target;
//     setNickName(value);
//   };
//   //파일 변경 함수
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     const files = e.target.files;
//     if (!files) return;
//     //여러개의 파일을 하나씩 순회하여 읽어오기
//     const reader = new FileReader();
//     reader.onload = () => {
//       const result = reader.result;
//       if (typeof result === 'string') {
//         const newObj: ImageType = {
//           id: 1,
//           img: result,
//         };
//         console.log('newObj', newObj);
//         setImageArr((prev: ImageArrType) => ({ ...prev, images: [newObj] }));
//       }
//     };
//     reader.readAsDataURL(files[0]);
//   };

//   //자식 inputRef 요소를 클릭하는 함수
//   const onClickImgEditModal = () => {
//     if (inputRef.current) {
//       inputRef.current.click();
//       onOpenModal();
//     }
//   };
//   return (
//     <Modal
//       open={isOpen}
//       slotProps={{
//         backdrop: {
//           sx: {
//             backgroundColor: 'rgba(0,0,0,0.6)',
//           },
//         },
//       }}
//     >
//       <Box tabIndex={-1}>
//         <M.DeleteIconBox>
//           <DeleteIcon onClick={ModalClose} />
//         </M.DeleteIconBox>
//         {isImageModalOpen && (
//           <ImgEditModal
//             setImageModalOpen={setImageModalOpen}
//             imageArr={imageArr}
//             setImageArr={setImageArr}
//             isCircle={true}
//           />
//         )}
//         <S.Wrapper>
//           <S.SectionWrapper gap={25}>
//             <S.DetailText>
//               스페이스에서 사용할 프로필과
//               <br /> 닉네임을 지정해 주세요.
//             </S.DetailText>
//             {imageArr.images.length == 0 ? (
//               <>
//                 <M.Label isAlert={false}>프로필 사진</M.Label>
//                 <M.ImgBox onClick={onClickImgEditModal}>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     style={{ display: 'none' }}
//                     onChange={(e) => {
//                       handleFileChange(e);
//                     }}
//                     ref={inputRef}
//                   />
//                   <ProfileMock />
//                 </M.ImgBox>
//               </>
//             ) : (
//               <>
//                 <M.Label isAlert={false}>프로필 사진</M.Label>
//                 <M.ImgBox
//                   onClick={() => {
//                     setImageModalOpen(true);
//                   }}
//                 >
//                   <CircleIcon size={240} img_url={imageArr.cropImages[0]} />
//                 </M.ImgBox>
//               </>
//             )}
//             <M.Label isAlert={false}>닉네임</M.Label>
//             <InputBox
//               placeholder="닉네임을 입력하세요"
//               height={60}
//               width={250}
//               maxLength={10}
//               paddingLeft={60}
//               type="text"
//               onChange={(e) => {
//                 onChange(e);
//               }}
//               backgroundColor={'#5F5F5F'}
//               name="nickname"
//               readonly={false}
//               children={
//                 <CharacterCounter
//                   color={'white'}
//                   currentNum={nickName.length}
//                   maxNum={10}
//                 />
//               }
//             />
//             <M.Label isAlert={true}>중복된 닉네임입니다.</M.Label>
//           </S.SectionWrapper>
//           <S.ButtonContainer>
//             <BasicButton
//               width={212}
//               height={48}
//               onClick={() => {}}
//               disabled={!nickName.length}
//             >
//               <S.ButtonText>완료</S.ButtonText>
//             </BasicButton>
//           </S.ButtonContainer>
//         </S.Wrapper>
//       </Box>
//     </Modal>
//   );
// };

// export default SettingModal;
