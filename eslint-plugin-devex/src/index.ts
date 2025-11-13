import noConsoleLog from './rules/no-console-log';

// This is the main plugin object that ESLint will read
const plugin = {
  rules: {
    // We map the rule name 'no-console-log'
    // to the module we just imported.
    'no-console-log': noConsoleLog,
  },
};

// Use `export =` to set the *entire* module's export to our plugin object.
// This is the TypeScript equivalent of `module.exports = plugin;`
export = plugin;