import { ConfirmPropType } from '@/types';
import { useConfirmModalStore } from '@/store/modal';

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
