import type {Preview} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";
import CombinedProvider from "../src/utils/CombinedProvider";

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export const decorators = [
    (Story) => (
        <CombinedProvider>
            <BrowserRouter>
                <Story/>
            </BrowserRouter>
        </CombinedProvider>
    ),
]

export default preview;
