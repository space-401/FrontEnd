import {SpacePostType} from '@type/space.type';
import DefaultImage from '@assets/svg/KKIRI.svg';
import FlipCard from '@components/FlipCard/FlipCard';
import SpaceInfoBack from '@components/FlipCard/SpaceInfoBack/SpaceInfoBack';
import S from "@pages/mainPage/components/MainBody/style";
import SelectBox from "@components/common/SelectBox/SelectBox";
import {TagType} from "@type/tag.type";
import {UserType} from "@type/user.type";
import {useState} from "react";
import {selectType} from "@type/main.type";

export type MainBodyPropType = {
    postList: SpacePostType[];
    page: number;
    total: number;
    tagList: TagType[];
    userList: UserType[];
};

const MainBody = (props: MainBodyPropType) => {
    const {postList,userList,tagList} = props;
    const [_1, setUserState]= useState<selectType[]>([]);
    const [_2, setTagState]= useState<selectType[]>([]);

    return (
        <S.Wrapper>
            <S.FilterGroup>
                <SelectBox setState={setUserState} menuWidth={320} menuHeight={150} BoxWidth={168} labelName={"사용자"} ListItem={userList}/>
                <SelectBox placeHolder={"태그명을 검색해주세요."} setState={setTagState} menuWidth={200} menuHeight={188} BoxWidth={168} labelName={"태그"} ListItem={tagList}/>
            </S.FilterGroup>
            {postList.length === 0 ? (
                <S.UndefinedList>
                    <S.UndefinedDefaultImage img_url={DefaultImage}/>
                    <S.UndefinedPostText>
                        첫번째 게시글을 등록해 주세요
                    </S.UndefinedPostText>
                    <S.UndefinedShareText>게시글 공유하기</S.UndefinedShareText>
                </S.UndefinedList>
            ) : (
                <S.PostList>
                    {postList.map((item) => (
                        <FlipCard
                            key={item.post_id}
                            size={437}
                            img_url={item.main_img_url}
                            hoverCard={
                                <SpaceInfoBack
                                    users={item.users}
                                    post_id={item.post_id}
                                    post_title={item.place_title}
                                    main_img_url={item.main_img_url}
                                    place_title={item.place_title}
                                    place_create_at={item.place_create_at}
                                    place_tag={item.place_tag}
                                    key={item.post_id}
                                />
                            }
                        />
                    ))}
                </S.PostList>
            )}
        </S.Wrapper>
    );
};

export default MainBody;
