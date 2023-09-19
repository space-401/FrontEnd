import { create } from 'zustand';
import { AlertModalType } from '@type/modal.type';

type ModalType = {
  isOpen: boolean;
  ModalOpen: () => void;
  ModalClose: () => void;
};

type ModeType = {
  isMode: boolean;
  ModeOn: () => void;
  ModeClose: () => void;
};

export const useDetailModalStore = create<ModalType>((setState) => ({
  isOpen: false,
  ModalOpen: () => setState(() => ({ isOpen: true })),
  ModalClose: () => setState(() => ({ isOpen: false })),
}));

export const useSpaceUserModalStore = create<ModalType>((setState) => ({
  isOpen: false,
  ModalOpen: () => setState(() => ({ isOpen: true })),
  ModalClose: () => setState(() => ({ isOpen: false })),
}));

export const useAlertModalStore = create<{
  info: AlertModalType | undefined;
  setInfo: (newInfo: AlertModalType) => void;
}>((setState) => ({
  info: undefined,
  setInfo: (newInfo: AlertModalType) =>
    setState(() => ({
      info: newInfo,
    })),
}));

export const usePhotoModalStore = create<ModalType>((setState) => ({
  isOpen: false,
  ModalOpen: () => setState(() => ({ isOpen: true })),
  ModalClose: () => setState(() => ({ isOpen: false })),
}));

export const useEditModeStore = create<ModeType>((setState) => ({
  isMode: false,
  ModeOn: () => setState(() => ({ isMode: true })),
  ModeClose: () => setState(() => ({ isMode: false })),
}));
