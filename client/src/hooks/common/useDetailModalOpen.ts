import {useDetailModalStore} from "@store/modal";

export const useDetailModalOpen = () => {
    const {setPostId, ModalOpen} = useDetailModalStore((state) => state);

    const DetailModalOpen = (postId: number) => {
        setPostId(postId);
        ModalOpen();
    }

    return {DetailModalOpen}
}