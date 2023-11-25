import { useConfirmModalStore } from '@/store/modal';
import { ConfirmPropType } from '@/types';

export const useConfirmModalOpen = () => {
  const { ModalOpen, setConfirmInfo } = useConfirmModalStore((state) => state);

  const confirmModalOpen = (props: ConfirmPropType) => {
    const {
      isPositiveModal,
      closeMessage,
      ApproveMessage,
      descriptionMessage,
      titleMessage,
      AsyncAction,
    } = props;
    setConfirmInfo({
      isPositiveModal,
      closeMessage,
      ApproveMessage,
      descriptionMessage,
      titleMessage,
      AsyncAction,
    });
    ModalOpen();
  };

  return confirmModalOpen;
};
