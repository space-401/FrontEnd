import { StoryFn } from '@storybook/react';
import styled from 'styled-components';
import MarkerContents, {MarkerPropTypes} from "@components/PostMap/components/MarkerContents";
import MainPageMock from "@mocks/data/MainPage/mainPage.mock";
import {getFormatDate} from "@utils/formatter";

export default {
    title: 'common/Marker',
    component: MarkerContents,
    tags: ['autodocs'],
    decorators: [
        (Story: StoryFn) => {
            return (
                <Container>
                    <Story />
                </Container>
            );
        },
    ],
    argTypes: {
        size: { control: 'number' },
    },
};

const Container = styled.div`
  width: 450px;
  height: 450px;
`;

export const MarkerTest: { args: MarkerPropTypes } = {
    args: {
        post_place: MainPageMock.postList[0].place_title,
        users: MainPageMock.postList[0].users,
        post_title: MainPageMock.postList[0].post_title,
        create_at: getFormatDate(MainPageMock.postList[0].place_create_at)
    },
};
