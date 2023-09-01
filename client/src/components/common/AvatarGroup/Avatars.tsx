import {UserImageType} from "@type/user.type";
import Avatar from '@mui/material/Avatar';
import Avatars from '@mui/material/AvatarGroup';
import {PropsWithChildren} from "react";

type PropType = {
    users: UserImageType[]
}

const Avatars = (props: PropsWithChildren<PropType>) => {
        const {users} = props;
        return <Avatars max={users.length}>{
            users?.map(user => <Avatar key={user.user_id} alt={user.user_name} src={user.user_profile_img}/>)}
        </Avatars>
    }
;

export default Avatars;