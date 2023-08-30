import type {Preview} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";
import KirriProvider from "../src/router/KirriProvider";

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
        <KirriProvider>
            <BrowserRouter>
                <Story/>
            </BrowserRouter>
        </KirriProvider>
    ),
]

export default preview;
