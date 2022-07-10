module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/svelte',
    core: {
        builder: 'webpack5',
    },
    staticDirs: [{ from: '../src/assets', to: 'assets/' }],
    webpackFinal: async (config) => {
        if (process.env.GH_PAGES) {
            config.module.rules.push({
                test: /.svelte$/,
                loader: 'string-replace-loader',
                options: {
                    search: '/assets/',
                    replace: '/notion-publish-tool/assets/',
                },
            });
        }
        return config;
    },
};
