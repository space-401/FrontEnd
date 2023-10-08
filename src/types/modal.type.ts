export type ModalType = {
  isOpen: boolean;
  ModalOpen: () => void;
  ModalClose: () => void;
};

export type ModeType = {
  isMode: boolean;
  ModeOn: () => void;
  ModeClose: () => void;
};

export type DetailModalType = ModalType & {
  postId: number;
  setPostId: (postId: number) => void;
};

export type AlertPropType = {
  width: number;
  alertTitle: string;
  alertMessage: string;
};

export type AlertModalType = ModalType & {
  alertState: AlertPropType;
  setAlertInfo: (alertInfo: AlertPropType) => void;
};

export type ConfirmPropType = {
  isPositiveModal: boolean;
  titleMessage: string;
  descriptionMessage?: string;
  ApproveMessage: string;
  closeMessage: string;
  AsyncAction: () => void;
};

export type ConfirmModalType = ModalType & {
  confirmState: ConfirmPropType;
  setConfirmInfo: (confirmInfo: ConfirmPropType) => void;
};
