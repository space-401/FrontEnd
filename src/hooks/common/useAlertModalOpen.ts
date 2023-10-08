import { useAlertModalStore } from '@store/modal';
import { AlertPropType } from '@type/modal.type';

export const useAlertModalOpen = () => {
  const { ModalOpen, setAlertInfo } = useAlertModalStore((state) => state);

  const alertModalOpen = (props: AlertPropType) => {
    const { alertMessage, alertTitle, width } = props;
    setAlertInfo({
      alertMessage,
      alertTitle,
      width,
    });
    ModalOpen();
  };

  return alertModalOpen;
};
