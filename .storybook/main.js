const build_site = 'bmitchinson.github.io/notion-publish-tool';

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
    staticDirs: [{ from: '../src/assets', to: 'assets/' }],
    webpackFinal: async (config) => {
        if (process.env.GH_PAGES) {
            config.output.publicPath = build_site;
        }
        return config;
    },
    managerWebpack: async (config) => {
        if (process.env.GH_PAGES) {
            config.output.publicPath = build_site;
        }
        return config;
    },
};
