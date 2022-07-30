const path = require('path')

module.exports = {
  stories: ['../src/**/stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    'storybook-addon-material-ui',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, '../src'),
      '@comp': path.resolve(__dirname, '../src/components'),
      '@atoms': path.resolve(__dirname, '../src/components/atoms'),
      '@molecules': path.resolve(__dirname, '../src/components/molecules'),
      '@organisms': path.resolve(__dirname, '../src/components/organisms'),
      '@util': path.resolve(__dirname, '../src/utilities'),
      '@def': path.resolve(__dirname, '../src/definitions'),
      '@services': path.resolve(__dirname, '../src/services'),
      '@theme': ['src/themes'],
    }

    return config
  },
}
