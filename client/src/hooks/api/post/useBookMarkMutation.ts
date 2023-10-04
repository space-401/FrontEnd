import {useMutation} from "@tanstack/react-query";
import {ApiResponseType} from "@type/response.type";
import {PostBookMark} from "@apis/post/postBookMark";

/**
 * 
 * @param postId 북마크를 누를 포스트 아이디
 * @return bookMarkAction 북마크를 좋아요 또는 해제할 액션
 */
export const UseBookMarkMutation = (postId: number) => {
    const {mutate: bookMarkAction} = useMutation<ApiResponseType>(() => PostBookMark(postId))
    return {bookMarkAction}
}