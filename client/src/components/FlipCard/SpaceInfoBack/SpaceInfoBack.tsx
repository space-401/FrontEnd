import type {UserImageType} from "@type/user.type";
import type {TagType} from "@type/tag.type";
import Avatars from "@components/common/AvatarGroup/Avatars";

type SpacePropType = {
    place_title: string
    place_tag: TagType[]
    place_create_at: string
    users: UserImageType[]
}

const SpaceInfoBack = (props: SpacePropType) => {
    const {place_create_at, place_title, place_tag, users} = props
    return (
        <>
            <Avatars users={users}/>
        </>
    )
};

export default SpaceInfoBack;