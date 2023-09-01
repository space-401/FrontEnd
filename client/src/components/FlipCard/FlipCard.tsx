import S from "@components/FlipCard/style";

export type CardSizeType = {
    /**
     * 정사각형 카드의 크기를 정해주세요
     */
    size: number;
    /**
     * 해당 이미지의 주소를 넣어주세요
     */
    img_url: string;
};

export type PropType = CardSizeType

const FlipCard = (props: PropType) => {
    const {size, img_url} = props;
    return (
        <>
            <S.Flip size={size}>
                <S.Card>
                    {/* 처음 화면 */}
                    <S.Front img_url={img_url}></S.Front>
                    {/* 마우스를 올려 두었을시에 화면 */}
                    <S.Back></S.Back>
                </S.Card>
            </S.Flip>
        </>
    );
};

export default FlipCard;

FlipCard.defaultProps = {
    size: 450,
};
