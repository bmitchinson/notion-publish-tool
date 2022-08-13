import sveltePreprocess from 'svelte-preprocess';

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-mock/register',
    ],
    framework: '@storybook/svelte',
    svelteOptions: {
        preprocess: sveltePreprocess({}),
    },
    core: {
        builder: 'webpack5',
    },
    staticDirs: [{ from: '../src/assets', to: 'assets/' }],
    webpackFinal: async (config: any) => {
        const rules = config.module?.rules || [];

        if (process.env.GH_PAGES) {
            rules.push({
                test: /.svelte$/,
                loader: 'string-replace-loader',
                options: {
                    search: /\/assets\//g,
                    replace: '/notion-publish-tool/assets/',
                },
            });
        }

        config.module.rules = rules;
        return config;
    },
};
