import { create } from 'zustand';

type ModalType = {
  isOpen: boolean;
  ModalOpen: () => void;
  ModalClose: () => void;
};

export const useModalStore = create<ModalType>((setState) => ({
  isOpen: false,
  ModalOpen: () => setState(() => ({ isOpen: true })),
  ModalClose: () => setState(() => ({ isOpen: false })),
}));
