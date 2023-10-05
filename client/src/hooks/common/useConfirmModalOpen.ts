import { useConfirmModalStore } from '@store/modal';
import { ConfirmPropType } from '@type/modal.type';

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
