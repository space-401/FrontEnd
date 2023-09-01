import {StoryFn} from '@storybook/react';
import styled from 'styled-components';
import SpaceInfoBack from "@components/common/FlipCard/SpaceInfoBack/SpaceInfoBack";

export default {
    title: 'common/SpaceInfoBack',
    component: SpaceInfoBack,
    tags: ['autodocs'],
    decorators: [
        (Story: StoryFn) => {
            return (
                <Container>
                    <Story/>
                </Container>
            );
        },
    ],
};

const Container = styled.div`
  width: 450px;
  height: 450px;
`;