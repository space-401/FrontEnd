import {
  AlertModalType,
  ConfirmModalType,
  DetailModalType,
  ModalType,
} from '@/types';
import { create } from 'zustand';

export const useDetailModalStore = create<DetailModalType>((setState) => ({
  isOpen: false,
  postId: 0,
  setPostId: (postId) => setState((state) => ({ ...state, postId })),
  ModalOpen: () => setState((state) => ({ ...state, isOpen: true })),
  ModalClose: () => setState(() => ({ isOpen: false, postId: 0 })),
}));

export const useAlertModalStore = create<AlertModalType>((setState) => ({
  isOpen: false,
  alertState: { alertMessage: '', alertTitle: '', width: 0 },
  setAlertInfo: (alertInfo) =>
    setState(() => ({ isOpen: false, alertState: { ...alertInfo } })),
  ModalOpen: () => setState((state) => ({ ...state, isOpen: true })),
  ModalClose: () =>
    setState(() => ({
      isOpen: false,
      alertState: { alertMessage: '', alertTitle: '', width: 0 },
    })),
}));

export const useConfirmModalStore = create<ConfirmModalType>((setState) => ({
  isOpen: false,
  confirmState: {
    isPositiveModal: false,
    closeMessage: '',
    ApproveMessage: '',
    titleMessage: '',
    AsyncAction: () => {},
  },
  setConfirmInfo: (confirmInfo) =>
    setState({ isOpen: false, confirmState: { ...confirmInfo } }),
  ModalOpen: () => setState((state) => ({ ...state, isOpen: true })),
  ModalClose: () =>
    setState((state) => ({
      confirmState: { ...state.confirmState, descriptionMessage: undefined },
      isOpen: false,
    })),
}));

export const usePhotoModalStore = create<ModalType>((setState) => ({
  isOpen: false,
  ModalOpen: () => setState(() => ({ isOpen: true })),
  ModalClose: () => setState(() => ({ isOpen: false })),
}));
