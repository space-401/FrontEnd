import {O} from '@components/PostMap/components/style';
import {TagType} from "@type/tag.type";

type OnePostPropType = {
    post_title: string,
    post_description: string,
    post_place: string,
    post_tags: TagType[],
    main_img_url: string,
    create_at: string,
    isSelect: boolean
}
const OnePostMapCard = (props: OnePostPropType) => {
    const {isSelect, post_description, post_tags, post_place, post_title, main_img_url, create_at,} = props
    return (
        <O.OneWrapper isSelect={isSelect}>
            <O.CardImg>{main_img_url}</O.CardImg>
            <O.CardInfo>
                <O.CardCreate>{create_at}</O.CardCreate>
                <O.CardTitle>{post_title}</O.CardTitle>
                <O.CardDescription>{post_description}</O.CardDescription>
                <O.CardPlace>{post_place}</O.CardPlace>
                <O.TagGroup>{post_tags.map(tag=><div key={tag.tag_id}>{tag.tag_title}</div>)}</O.TagGroup>
            </O.CardInfo>
        </O.OneWrapper>)
};

export default OnePostMapCard;