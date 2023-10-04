import { create } from 'zustand';

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

type DetailModalType = {
  postId: number;
  setPostId: (postId: number) => void;
};

export const useDetailModalStore = create<ModalType & DetailModalType>(
  (setState) => ({
    isOpen: false,
    postId: 0,
    setPostId: (postId: number) =>
      setState((state) => ({ ...state, postId: postId })),
    ModalOpen: () => setState((state) => ({ ...state, isOpen: true })),
    ModalClose: () => setState((state) => ({ ...state, isOpen: false })),
  })
);

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

export const useSelectIconModalStore = create<ModalType>((setState) => ({
  isOpen: false,
  ModalOpen: () => setState(() => ({ isOpen: true })),
  ModalClose: () => setState(() => ({ isOpen: false })),
}));

export const useAlertModalStore = create<ModalType>((setState) => ({
  isOpen: false,
  ModalOpen: () => setState(() => ({ isOpen: true })),
  ModalClose: () => setState(() => ({ isOpen: false })),
}));

export const useSelectBasicIconModalStore = create<ModalType>((setState) => ({
  isOpen: false,
  ModalOpen: () => setState(() => ({ isOpen: true })),
  ModalClose: () => setState(() => ({ isOpen: false })),
}));

export const useCreateUserModal = create<ModalType>((setState) => ({
  isOpen: false,
  ModalOpen: () => setState(() => ({ isOpen: true })),
  ModalClose: () => setState(() => ({ isOpen: false })),
}));

export const useConfirmModalStore = create<ModalType>((setState) => ({
  isOpen: false,
  ModalOpen: () => setState(() => ({ isOpen: true })),
  ModalClose: () => setState(() => ({ isOpen: false })),
}));
