// eslint.config.js
const pluginDevex = require('eslint-plugin-devex');

module.exports = [
  {
    plugins: {
      devex: pluginDevex,
    },
    files: ['**/*.js'],
    rules: {
      'devex/no-console-log': 'error',
    },
  },
];