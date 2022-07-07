import '!style-loader!css-loader!sass-loader!../src/svelte/global.scss';
import '!style-loader!css-loader!sass-loader!./storybook_preview.scss';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
