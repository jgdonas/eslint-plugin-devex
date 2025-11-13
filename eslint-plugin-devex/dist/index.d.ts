import * as eslint from 'eslint';

declare const plugin: {
    rules: {
        'no-console-log': eslint.Rule.RuleModule;
    };
};

export { plugin as default };
