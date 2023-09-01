import {StoryFn} from '@storybook/react';
import styled from 'styled-components';
import SpaceSelectBack from "@components/common/FlipCard/SpaceSelectBack/SpaceSelectBack";

export default {
    title: 'common/SpaceInfoBack',
    component: SpaceSelectBack,
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