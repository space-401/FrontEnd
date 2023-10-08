import { useDetailModalStore } from '@store/modal';

export const useDetailModalOpen = () => {
  const { ModalOpen, setPostId } = useDetailModalStore((state) => state);

  const DetailModalOpen = (postId: number) => {
    setPostId(postId);
    ModalOpen();
  };

  return DetailModalOpen;
};
