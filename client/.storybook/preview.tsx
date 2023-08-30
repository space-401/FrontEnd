import type {Preview} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";
import KKiriProvider from "../src/router/KkliriProvider";

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
        <KKiriProvider>
            <BrowserRouter>
                <Story/>
            </BrowserRouter>
        </KKiriProvider>
    ),
]

export default preview;
