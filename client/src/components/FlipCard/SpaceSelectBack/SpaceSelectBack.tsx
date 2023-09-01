import {UserImageType} from "@type/user.type";

type SpacePropType = {
    space_title : string
    isLike: boolean
    user: UserImageType[]
}

const SpaceSelectBack = (props: SpacePropType) => {
    const {space_title, isLike, user} = props
    return (
        <>
            <AvatarGroup total={24}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        </>
    )
};

export default SpaceSelectBack;